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
  ["crumb-coaster", "Crumb & Coaster", "꾸따(Kuta)", "브런치(brunch), 도착 다음날 가볍게 시작"],
  ["naughty-nuris", "Naughty Nuri's", "스미냑(Seminyak)", "폭립(pork ribs), 점심 후보"],
  ["braud", "Braud", "스미냑(Seminyak)", "카페(cafe), Naughty Nuri's 근처"],
  ["baked", "Baked", "스미냑/울루와뚜(Seminyak/Uluwatu)", "브런치와 커피, 여러 지점 활용 가능"],
  ["la-brisa", "La Brisa", "짱구(Canggu)", "비치클럽(beach club), 선셋/선데이마켓"],
  ["sensorium", "Sensorium", "짱구(Canggu)", "브런치 맛집, 카페 후보"],
  ["warung-sika", "Warung Sika", "스미냑(Seminyak)", "현지식/와룽(warung), 캐주얼 식사"],
  ["pennylane", "PennyLane", "짱구(Canggu)", "분위기 좋은 식사/카페"],
  ["akasa", "AKASA", "바투르산(Mount Batur)", "바투르산 뷰 카페"],
  ["pison-ubud", "Pison Ubud", "우붓(Ubud)", "우붓 카페/점심 후보"],
  ["tukies", "Tukies Coconut Shop", "우붓(Ubud)", "코코넛 아이스크림"],
  ["monsieur-spoon", "Monsieur Spoon", "우붓/스미냑(Ubud/Seminyak)", "베이커리(bakery), 가벼운 식사"],
  ["sisterfields", "Sisterfields", "스미냑(Seminyak)", "브런치(brunch), 카페, 첫 만남에 편한 곳"],
  ["motel-mexicola", "Motel Mexicola", "스미냑(Seminyak)", "활기 있는 단체 저녁(group dinner)"],
  ["mades-warung", "Made's Warung", "스미냑(Seminyak)", "발리 음식(Balinese food), 무난한 선택"],
  ["jimbaran", "짐바란 해산물(Jimbaran seafood)", "짐바란(Jimbaran)", "울루와뚜 후 선셋 해산물"],
  ["revolver", "Revolver Espresso", "스미냑(Seminyak)", "커피(coffee)와 아침 식사"],
  ["boy-n-cow", "Boy'N'Cow", "스미냑(Seminyak)", "스테이크하우스(steakhouse) 저녁"],
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
      <button type="button">투표(Vote)</button>
      <output>${votes.length}표${votes.length ? `: ${votes.join(", ")}` : ""}</output>
    `;
    card.querySelector("button").addEventListener("click", () => {
      const nameValue = travellerName();
      if (!nameValue) {
        alert("이름을 먼저 입력해주세요.");
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
