const routes = [
  {
    id: "uluwatu",
    name: "Route A: Uluwatu cliffs",
    fit: "Best overall for this short trip",
    time: "10:30-22:00",
    notes:
      "Most scenic and social. It gives beaches, cliffs, sunset, and dinner without needing a very early start.",
    stops: [
      "Seminyak brunch",
      "Padang Padang or Melasti Beach",
      "Uluwatu Temple",
      "Kecak sunset show",
      "Jimbaran seafood or Seminyak dinner",
    ],
  },
  {
    id: "ubud",
    name: "Route B: Ubud culture",
    fit: "Best for temples, markets, and greenery",
    time: "08:30-20:30",
    notes:
      "Beautiful, but traffic makes this the longest day. Start early and keep the stop list disciplined.",
    stops: [
      "Tegenungan waterfall",
      "Ubud market",
      "Monkey Forest or Campuhan ridge",
      "Rice terrace cafe",
      "Dinner back in Seminyak",
    ],
  },
  {
    id: "tanah-lot",
    name: "Route C: Canggu and Tanah Lot",
    fit: "Best relaxed alternative",
    time: "11:00-21:00",
    notes:
      "Less packed than Uluwatu or Ubud, good for a slower friend-group day and sunset photos.",
    stops: [
      "Canggu brunch",
      "Boutiques or beach club",
      "Tanah Lot sunset",
      "Seminyak dinner",
    ],
  },
];

const restaurants = [
  ["sisterfields", "Sisterfields", "Seminyak", "brunch, cafe, easy first meetup"],
  ["motel-mexicola", "Motel Mexicola", "Seminyak", "lively group dinner"],
  ["mades-warung", "Made's Warung", "Seminyak", "Balinese classics, simple and reliable"],
  ["jimbaran", "Jimbaran seafood", "Jimbaran", "sunset seafood after Uluwatu"],
  ["revolver", "Revolver Espresso", "Seminyak", "coffee and breakfast"],
  ["boy-n-cow", "Boy'N'Cow", "Seminyak", "steakhouse dinner"],
];

const checklist = [
  ["Documents", "passport", "Passport valid for 6+ months"],
  ["Documents", "evisa", "Indonesia e-VOA or visa plan"],
  ["Documents", "arrival", "All Indonesia arrival declaration within 72 hours"],
  ["Documents", "levy", "Bali tourist levy payment"],
  ["Documents", "insurance", "Travel insurance saved offline"],
  ["Transport", "driver", "Late-night airport driver booked"],
  ["Friends", "korea", "Korea friends' arrival times shared in chat"],
  ["On arrival", "sim", "eSIM or roaming ready"],
  ["On arrival", "cash", "Small cash for first night"],
  ["Packing", "adapter", "Power adapter, sunscreen, swimwear"],
];

const profileKey = "bali-trip-profile-v2";
const supabaseConfig = window.BALI_SUPABASE || {};
const hasSupabase = Boolean(supabaseConfig.url && supabaseConfig.anonKey);
const state = {
  name: localStorage.getItem(profileKey) || "",
  selectedRoute: "uluwatu",
  votes: {},
  comments: [],
  checks: {},
};

function supabaseHeaders(extra = {}) {
  return {
    apikey: supabaseConfig.anonKey,
    Authorization: `Bearer ${supabaseConfig.anonKey}`,
    "content-type": "application/json",
    ...extra,
  };
}

async function supabaseFetch(path, options = {}) {
  const baseUrl = supabaseConfig.url
    .replace(/\/$/, "")
    .replace(/\/rest\/v1$/, "");
  const url = `${baseUrl}/rest/v1/${path}`;
  const response = await fetch(url, {
    ...options,
    headers: supabaseHeaders(options.headers),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const text = await response.text();
  if (!text) return null;
  return JSON.parse(text);
}

function showSyncStatus(message, tone = "info") {
  let node = document.querySelector("#syncStatus");
  if (!node) {
    node = document.createElement("p");
    node.id = "syncStatus";
    node.className = "sync-status";
    document.querySelector(".intro div").append(node);
  }
  node.dataset.tone = tone;
  node.textContent = message;
}

function travellerName() {
  return document.querySelector("#travellerName").value.trim();
}

function renderRoutes() {
  const container = document.querySelector("#routeCards");
  const stops = document.querySelector("#routeStops");
  container.innerHTML = "";
  stops.innerHTML = "";

  routes.forEach((route) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `route-card ${state.selectedRoute === route.id ? "is-active" : ""}`;
    button.innerHTML = `
      <small>${route.fit}</small>
      <strong>${route.name}</strong>
      <span>${route.time}</span>
      <p>${route.notes}</p>
    `;
    button.addEventListener("click", () => {
      state.selectedRoute = route.id;
      renderRoutes();
    });
    container.append(button);
  });

  const activeRoute = routes.find((route) => route.id === state.selectedRoute) || routes[0];
  activeRoute.stops.forEach((stop, index) => {
    const item = document.createElement("li");
    item.innerHTML = `<b>${index + 1}</b><span>${stop}</span>`;
    stops.append(item);
  });
}

function renderRestaurants() {
  const container = document.querySelector("#restaurantGrid");
  container.innerHTML = "";

  restaurants.forEach(([id, name, area, mood]) => {
    const votes = state.votes[id] || [];
    const card = document.createElement("article");
    card.className = "restaurant-card";
    card.innerHTML = `
      <div>
        <p>${area}</p>
        <h3>${name}</h3>
        <span>${mood}</span>
      </div>
      <button type="button">Vote</button>
      <output>${votes.length} votes${votes.length ? ` from ${votes.join(", ")}` : ""}</output>
    `;
    card.querySelector("button").addEventListener("click", () => {
      const nameValue = travellerName();
      if (!nameValue) {
        alert("Add your name first.");
        return;
      }
      voteForRestaurant(id, nameValue);
    });
    container.append(card);
  });
}

function renderChecklist() {
  const container = document.querySelector("#checklistGrid");
  const grouped = checklist.reduce((groups, [group, id, label]) => {
    groups[group] = groups[group] || [];
    groups[group].push([id, label]);
    return groups;
  }, {});

  container.innerHTML = "";
  Object.entries(grouped).forEach(([group, items]) => {
    const card = document.createElement("article");
    card.className = "check-group";
    card.innerHTML = `<h3>${group}</h3>`;
    items.forEach(([id, label]) => {
      const checkId = `${group}-${id}`.replace(/\s+/g, "-").toLowerCase();
      const row = document.createElement("label");
      row.innerHTML = `
        <input id="${checkId}" type="checkbox" ${state.checks[id] ? "checked" : ""} />
        <span>${label}</span>
      `;
      row.querySelector("input").addEventListener("change", (event) => {
        saveChecklist(id, event.target.checked);
      });
      card.append(row);
    });
    container.append(card);
  });
}

function renderComments() {
  const container = document.querySelector("#commentsList");
  container.innerHTML = "";

  if (!state.comments.length) {
    container.innerHTML = `<p class="empty">No comments yet. Add the first idea.</p>`;
    return;
  }

  state.comments
    .slice()
    .reverse()
    .forEach((comment) => {
      const card = document.createElement("article");
      card.className = "comment";
      card.innerHTML = `
        <div><strong>${comment.name}</strong><span>${comment.section}</span></div>
        <p>${comment.body}</p>
      `;
      container.append(card);
    });
}

async function loadSharedData() {
  if (!hasSupabase) {
    showSyncStatus(
      "Supabase config.js is not set yet. This page can open, but shared sync is off.",
      "warning"
    );
    return;
  }

  try {
    const [comments, votes, checks] = await Promise.all([
      supabaseFetch("trip_comments?select=id,name,section,body,created_at&order=id.desc&limit=80"),
      supabaseFetch("restaurant_votes?select=restaurant_id,name"),
      supabaseFetch("checklist_state?select=item_id,name,done"),
    ]);

    state.comments = comments || [];
    state.votes = (votes || []).reduce((grouped, vote) => {
      grouped[vote.restaurant_id] = grouped[vote.restaurant_id] || [];
      grouped[vote.restaurant_id].push(vote.name);
      return grouped;
    }, {});
    state.checks = (checks || {})
      .filter?.((item) => item.name.toLowerCase() === travellerName().toLowerCase())
      .reduce((grouped, item) => {
        grouped[item.item_id] = item.done;
        return grouped;
      }, {}) || {};

    renderRestaurants();
    renderChecklist();
    renderComments();
    showSyncStatus("Supabase sync is connected. Updates refresh automatically.", "ok");
  } catch (error) {
    showSyncStatus("Could not connect to Supabase. Check config.js and table policies.", "warning");
    console.error(error);
  }
}

async function voteForRestaurant(restaurantId, name) {
  if (!hasSupabase) {
    alert("Supabase is not configured yet.");
    return;
  }

  try {
    await supabaseFetch("restaurant_votes?on_conflict=restaurant_id,name", {
      method: "POST",
      headers: { Prefer: "resolution=ignore-duplicates" },
      body: JSON.stringify({ restaurant_id: restaurantId, name }),
    });
    await loadSharedData();
  } catch (error) {
    alert("Vote could not be saved. Check Supabase setup.");
    console.error(error);
  }
}

async function saveChecklist(itemId, done) {
  const name = travellerName();
  if (!name) {
    alert("Add your name first.");
    renderChecklist();
    return;
  }

  if (!hasSupabase) {
    alert("Supabase is not configured yet.");
    renderChecklist();
    return;
  }

  try {
    await supabaseFetch("checklist_state?on_conflict=item_id,name", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates" },
      body: JSON.stringify({
        item_id: itemId,
        name,
        done,
        updated_at: new Date().toISOString(),
      }),
    });
    await loadSharedData();
  } catch (error) {
    alert("Checklist could not be saved. Check Supabase setup.");
    console.error(error);
  }
}

document.querySelector("#travellerName").value = state.name || "";
document.querySelector("#travellerName").addEventListener("input", (event) => {
  state.name = event.target.value;
  localStorage.setItem(profileKey, state.name);
  loadSharedData();
});

document.querySelector("#commentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = travellerName();
  const section = document.querySelector("#commentSection").value;
  const body = document.querySelector("#commentBody").value.trim();

  if (!name) {
    alert("Add your name first.");
    return;
  }

  if (!body) return;

  if (!hasSupabase) {
    alert("Supabase is not configured yet.");
    return;
  }

  supabaseFetch("trip_comments", {
    method: "POST",
    body: JSON.stringify({ name, section, body }),
  })
    .then(() => {
      document.querySelector("#commentBody").value = "";
      return loadSharedData();
    })
    .catch((error) => {
      alert("Comment could not be saved. Check Supabase setup.");
      console.error(error);
    });
});

renderRoutes();
renderRestaurants();
renderChecklist();
renderComments();
loadSharedData();
setInterval(loadSharedData, 8000);
