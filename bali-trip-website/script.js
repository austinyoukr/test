const routes = [
  {
    id: "uluwatu",
    name: "A안: 울루와뚜 절벽(Uluwatu cliffs)",
    fit: "짧은 여행에 가장 추천",
    time: "10:30-22:00",
    notes:
      "해변, 절벽, 선셋, 저녁을 한 번에 즐길 수 있는 가장 균형 좋은 루트입니다.",
    stops: [
      "스미냑 브런치(Seminyak brunch)",
      "빠당빠당 또는 멜라스티 비치(Padang Padang / Melasti Beach)",
      "울루와뚜 사원(Uluwatu Temple)",
      "케착 선셋 공연(Kecak sunset show)",
      "짐바란 해산물 또는 스미냑 저녁(Jimbaran seafood / Seminyak dinner)",
    ],
  },
  {
    id: "ubud",
    name: "B안: 우붓 문화(Ubud culture)",
    fit: "사원, 시장, 자연을 원하면 추천",
    time: "08:30-20:30",
    notes:
      "예쁘지만 이동 시간이 깁니다. 일찍 출발하고 방문지는 너무 많이 넣지 않는 편이 좋습니다.",
    stops: [
      "뜨그눙안 폭포(Tegenungan Waterfall)",
      "우붓 시장(Ubud Market)",
      "몽키 포레스트 또는 짬뿌한 릿지(Monkey Forest / Campuhan Ridge)",
      "라이스 테라스 카페(Rice terrace cafe)",
      "스미냑 복귀 후 저녁(Dinner back in Seminyak)",
    ],
  },
  {
    id: "tanah-lot",
    name: "C안: 짱구와 따나롯(Canggu & Tanah Lot)",
    fit: "여유로운 대안",
    time: "11:00-21:00",
    notes:
      "울루와뚜나 우붓보다 덜 빡빡해서 친구들과 느긋하게 움직이기 좋습니다.",
    stops: [
      "짱구 브런치(Canggu brunch)",
      "숍 구경 또는 비치클럽(Boutiques / beach club)",
      "따나롯 선셋(Tanah Lot sunset)",
      "스미냑 저녁(Seminyak dinner)",
    ],
  },
];

const restaurants = [
  { id: "crumb-coaster", day: "Sat 25", meal: "Breakfast", region: "꾸따(Kuta)", name: "Crumb & Coaster", note: "브런치(brunch), 도착 다음날 가볍게 시작", map: "Crumb & Coaster Kuta Bali" },
  { id: "sisterfields", day: "Sat 25", meal: "Breakfast", region: "스미냑(Seminyak)", name: "Sisterfields", note: "첫 만남에 편한 브런치(brunch) 후보", map: "Sisterfields Seminyak Bali" },
  { id: "naughty-nuris", day: "Sat 25", meal: "Lunch", region: "스미냑(Seminyak)", name: "Naughty Nuri's", note: "폭립(pork ribs), 쇼핑 전후 점심", map: "Naughty Nuri's Seminyak Bali" },
  { id: "braud", day: "Sat 25", meal: "Lunch", region: "스미냑(Seminyak)", name: "Braud", note: "카페(cafe), Naughty Nuri's 근처", map: "Braud Cafe Seminyak Bali" },
  { id: "motel-mexicola", day: "Sat 25", meal: "Dinner", region: "스미냑(Seminyak)", name: "Motel Mexicola", note: "활기 있는 단체 저녁(group dinner)", map: "Motel Mexicola Seminyak Bali" },
  { id: "mades-warung", day: "Sat 25", meal: "Dinner", region: "스미냑(Seminyak)", name: "Made's Warung", note: "발리 음식(Balinese food), 무난한 선택", map: "Made's Warung Seminyak Bali" },
  { id: "baked", day: "Sun 26", meal: "Breakfast", region: "스미냑/울루와뚜(Seminyak/Uluwatu)", name: "Baked", note: "울루와뚜 코스면 남부 가는 길 브런치", map: "Baked Bali Uluwatu", routes: ["uluwatu"] },
  { id: "sensorium", day: "Sun 26", meal: "Breakfast", region: "짱구(Canggu)", name: "Sensorium", note: "짱구/따나롯 코스 브런치", map: "Sensorium Bali Canggu", routes: ["tanah-lot"] },
  { id: "pison-ubud", day: "Sun 26", meal: "Breakfast", region: "우붓(Ubud)", name: "Pison Ubud", note: "우붓 코스 카페/브런치", map: "Pison Ubud Bali", routes: ["ubud"] },
  { id: "la-brisa", day: "Sun 26", meal: "Lunch", region: "짱구(Canggu)", name: "La Brisa", note: "짱구 코스면 선데이마켓/비치클럽", map: "La Brisa Bali", routes: ["tanah-lot"] },
  { id: "pennylane", day: "Sun 26", meal: "Lunch", region: "짱구(Canggu)", name: "PennyLane", note: "짱구 코스 중간 식사/카페", map: "PennyLane Canggu Bali", routes: ["tanah-lot"] },
  { id: "tukies", day: "Sun 26", meal: "Lunch", region: "우붓(Ubud)", name: "Tukies Coconut Shop", note: "우붓 디저트, 코코넛 아이스크림", map: "Tukies Coconut Shop Ubud Bali", routes: ["ubud"] },
  { id: "monsieur-spoon", day: "Sun 26", meal: "Lunch", region: "우붓/스미냑(Ubud/Seminyak)", name: "Monsieur Spoon", note: "가벼운 베이커리(bakery), 우붓/스미냑 양쪽 가능", map: "Monsieur Spoon Bali", routes: ["ubud", "tanah-lot"] },
  { id: "jimbaran", day: "Sun 26", meal: "Dinner", region: "짐바란(Jimbaran)", name: "짐바란 해산물(Jimbaran seafood)", note: "울루와뚜 후 선셋 해산물", map: "Jimbaran seafood Bali", routes: ["uluwatu"] },
  { id: "boy-n-cow", day: "Sun 26", meal: "Dinner", region: "스미냑(Seminyak)", name: "Boy'N'Cow", note: "스미냑 복귀 후 스테이크하우스(steakhouse)", map: "Boy'N'Cow Seminyak Bali", routes: ["ubud", "tanah-lot"] },
  { id: "warung-sika", day: "Sun 26", meal: "Dinner", region: "스미냑(Seminyak)", name: "Warung Sika", note: "복귀 후 캐주얼 현지식/와룽(warung)", map: "Warung Sika Seminyak Bali", routes: ["ubud", "tanah-lot"] },
  { id: "revolver", day: "Mon 27", meal: "Breakfast", region: "스미냑(Seminyak)", name: "Revolver Espresso", note: "출국 전 커피(coffee)와 아침 식사", map: "Revolver Espresso Seminyak Bali" },
  { id: "akasa", day: "Optional", meal: "Breakfast", region: "바투르산(Mount Batur)", name: "AKASA", note: "바투르산 선라이즈 투어를 넣을 때만", map: "AKASA Kintamani Bali" },
];

const checklist = [
  ["서류(Documents)", "passport", "여권 유효기간 6개월 이상 확인"],
  ["서류(Documents)", "evisa", "인도네시아 e-VOA 또는 비자 준비"],
  ["서류(Documents)", "arrival", "출발 72시간 이내 All Indonesia 입국 신고"],
  ["서류(Documents)", "levy", "발리 관광세(Bali tourist levy) 결제"],
  ["서류(Documents)", "insurance", "여행자 보험(Travel insurance) 저장"],
  ["항공권(Flights)", "perth-flight", "퍼스팀 항공권 예약/확인"],
  ["항공권(Flights)", "seoul-flight", "서울팀 항공편명과 도착 시간 공유"],
  ["교통(Transport)", "driver", "늦은 밤 공항 픽업 드라이버 예약"],
  ["환전/결제(Money)", "travel-card", "트래블월렛/해외 결제 카드 준비"],
  ["환전/결제(Money)", "rupiah-cash", "루피아 현금 소액 준비"],
  ["도착 후(On arrival)", "sim", "eSIM 또는 로밍 준비"],
  ["도착 후(On arrival)", "shower-filter", "샤워필터기와 리필 챙기기"],
  ["건강(Health)", "medicine", "지사제, 감기약, 밴드, 모기기피제"],
  ["건강(Health)", "probiotics", "프로바이오틱스/장 건강 준비"],
  ["투어(Tour)", "neck-pillow", "장거리 차량 이동용 목베개"],
  ["투어(Tour)", "light-jacket", "바투르산/우천 대비 얇은 겉옷"],
  ["짐(Packing)", "adapter", "전원 어댑터, 선크림, 수영복"],
  ["짐(Packing)", "power-bank", "보조배터리, 충전기, 이어폰"],
  ["짐(Packing)", "laundry-bag", "입은 옷 분리용 가방/비닐백"],
];

const profileKey = "bali-trip-profile-v2";
const sharedChecklistName = "__group_checklist__";
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
    document.querySelector(".top-copy").append(node);
  }
  node.dataset.tone = tone;
  node.textContent = message;
}

function travellerName() {
  return document.querySelector("#travellerName").value.trim();
}

function googleMapUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function sundayRouteMeals() {
  return restaurants.filter((restaurant) => {
    return restaurant.day === "Sun 26" && restaurant.routes?.includes(state.selectedRoute);
  });
}

function renderRoutes() {
  const container = document.querySelector("#routeCards");
  const stops = document.querySelector("#routeStops");
  const mealPlan = document.querySelector("#routeMealPlan");
  container.innerHTML = "";
  stops.innerHTML = "";
  if (mealPlan) mealPlan.innerHTML = "";

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
      renderRestaurants();
    });
    container.append(button);
  });

  const activeRoute = routes.find((route) => route.id === state.selectedRoute) || routes[0];
  activeRoute.stops.forEach((stop, index) => {
    const item = document.createElement("li");
    item.innerHTML = `<b>${index + 1}</b><span>${stop}</span>`;
    stops.append(item);
  });

  if (mealPlan) {
    const meals = sundayRouteMeals();
    mealPlan.innerHTML = `
      <div class="route-meal-note">
        <strong>선택한 일요일 코스와 맞는 식사 후보</strong>
        <span>${activeRoute.name} 기준으로 아래 식당표의 Sunday rows가 자동으로 바뀝니다.</span>
      </div>
      <div class="sheet-wrap compact-sheet">
        <table class="sheet-table">
          <thead>
            <tr>
              <th>식사(Meal)</th>
              <th>지역(Region)</th>
              <th>후보(Option)</th>
              <th>지도(Map)</th>
            </tr>
          </thead>
          <tbody>
            ${meals
              .map(
                (meal) => `
                  <tr>
                    <td data-label="식사(Meal)">${meal.meal}</td>
                    <td data-label="지역(Region)">${meal.region}</td>
                    <td data-label="후보(Option)"><strong>${meal.name}</strong><br /><span>${meal.note}</span></td>
                    <td data-label="지도(Map)"><a class="map-link" href="${googleMapUrl(meal.map || meal.name)}" target="_blank" rel="noreferrer">Google Maps</a></td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }
}

function renderRestaurants() {
  const container = document.querySelector("#restaurantGrid");
  const selectedRoute = routes.find((route) => route.id === state.selectedRoute) || routes[0];
  const visibleRestaurants = restaurants.filter((restaurant) => {
    if (restaurant.day !== "Sun 26") return true;
    return restaurant.routes?.includes(state.selectedRoute);
  });
  container.innerHTML = `
    <div class="table-caption">
      <strong>현재 일요일 코스: ${selectedRoute.name}</strong>
      <span>Sat/Mon은 고정 후보이고, Sun 후보는 위에서 고른 일요일 코스에 맞춰 바뀝니다.</span>
    </div>
    <table class="sheet-table restaurant-sheet">
      <thead>
        <tr>
          <th>날짜(Date)</th>
          <th>식사(Meal)</th>
          <th>지역(Region)</th>
          <th>식당/음식(Restaurant)</th>
          <th>메모(Note)</th>
          <th>지도(Map)</th>
          <th>투표/취소(Vote)</th>
          <th>현재 선택(Current votes)</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;

  const body = container.querySelector("tbody");
  visibleRestaurants.forEach((restaurant) => {
    const { id, day, meal, region, name, note, map, routes: routeMatches } = restaurant;
    const votes = state.votes[id] || [];
    const currentName = state.name.trim();
    const hasVoted = currentName && votes.includes(currentName);
    const row = document.createElement("tr");
    if (routeMatches?.includes(state.selectedRoute)) {
      row.classList.add("is-route-match");
    }
    row.innerHTML = `
      <td data-label="날짜(Date)">${day}${routeMatches?.includes(state.selectedRoute) ? '<span class="route-badge">Sunday course</span>' : ""}</td>
      <td data-label="식사(Meal)">${meal}</td>
      <td data-label="지역(Region)">${region}</td>
      <td data-label="식당/음식(Restaurant)"><strong>${name}</strong></td>
      <td data-label="메모(Note)">${note}</td>
      <td data-label="지도(Map)"><a class="map-link" href="${googleMapUrl(map || name)}" target="_blank" rel="noreferrer">Google Maps</a></td>
      <td data-label="투표/취소(Vote)"><button type="button" class="${hasVoted ? "cancel-vote" : ""}">${hasVoted ? "취소(Cancel)" : "투표(Vote)"}</button></td>
      <td data-label="현재 선택(Current votes)"><output>${votes.length}표${votes.length ? `: ${votes.join(", ")}` : ""}</output></td>
    `;
    row.querySelector("button").addEventListener("click", () => {
      const nameValue = travellerName();
      if (!nameValue) {
        alert("이름을 먼저 입력해주세요.");
        return;
      }
      if (hasVoted) {
        cancelRestaurantVote(id, nameValue);
      } else {
        voteForRestaurant(id, nameValue);
      }
    });
    body.append(row);
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
    container.innerHTML = `<p class="empty">아직 댓글이 없습니다. 첫 의견을 남겨주세요.</p>`;
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
      "Supabase 설정이 아직 없습니다. 페이지는 열리지만 공유 저장은 꺼져 있습니다.",
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
    state.checks = (checks || [])
      .filter((item) => item.name === sharedChecklistName)
      .reduce((grouped, item) => {
        grouped[item.item_id] = item.done;
        return grouped;
      }, {}) || {};

    renderRestaurants();
    renderChecklist();
    renderComments();
    showSyncStatus("공유 저장이 연결되었습니다. 댓글과 투표는 자동으로 갱신됩니다.", "ok");
  } catch (error) {
    showSyncStatus("Supabase 연결을 확인해주세요. config.js 또는 테이블 권한을 점검해야 합니다.", "warning");
    console.error(error);
  }
}

async function voteForRestaurant(restaurantId, name) {
  if (!hasSupabase) {
    alert("Supabase 설정이 아직 없습니다.");
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
    alert("투표를 저장하지 못했습니다. Supabase 설정을 확인해주세요.");
    console.error(error);
  }
}

async function cancelRestaurantVote(restaurantId, name) {
  if (!hasSupabase) {
    alert("Supabase 설정이 아직 없습니다.");
    return;
  }

  try {
    await supabaseFetch(
      `restaurant_votes?restaurant_id=eq.${encodeURIComponent(restaurantId)}&name=eq.${encodeURIComponent(name)}`,
      { method: "DELETE" }
    );
    await loadSharedData();
  } catch (error) {
    alert("투표 취소를 저장하지 못했습니다. Supabase 삭제 권한을 확인해주세요.");
    console.error(error);
  }
}

async function saveChecklist(itemId, done) {
  if (!hasSupabase) {
    alert("Supabase 설정이 아직 없습니다.");
    renderChecklist();
    return;
  }

  try {
    await supabaseFetch("checklist_state?on_conflict=item_id,name", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates" },
      body: JSON.stringify({
        item_id: itemId,
        name: sharedChecklistName,
        done,
        updated_at: new Date().toISOString(),
      }),
    });
    await loadSharedData();
  } catch (error) {
    alert("체크리스트를 저장하지 못했습니다. Supabase 설정을 확인해주세요.");
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
    alert("이름을 먼저 입력해주세요.");
    return;
  }

  if (!body) return;

  if (!hasSupabase) {
    alert("Supabase 설정이 아직 없습니다.");
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
      alert("댓글을 저장하지 못했습니다. Supabase 설정을 확인해주세요.");
      console.error(error);
    });
});

renderRoutes();
renderRestaurants();
renderChecklist();
renderComments();
loadSharedData();
setInterval(loadSharedData, 8000);
