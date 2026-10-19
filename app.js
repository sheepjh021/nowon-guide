const events = [
  { title: "2026 노원 달빛산책", category: "축제", start: "2026-10-16", end: "2026-11-08", place: "당현천 당현마루 일원", description: "당현천을 따라 걷는 공공미술 빛조각 축제. 저녁 산책길에 가을밤의 작품들을 만나보세요.", tag: "진행 중", link: "https://www.nowonarts.kr/channels/festival/programs/1068", source: "노원문화재단", tone: "lavender", icon: "☾" },
  { title: "월계3동 · 중계1동 마을축제", category: "축제", start: "2026-10-25", end: "2026-10-25", time: "월계3동 15:00–18:00 · 중계1동 14:00–17:30", place: "월계3동 · 중계1동", description: "10월 18일 우천으로 연기된 동 마을축제예요. 변경된 날짜와 시간을 확인하고 방문하세요.", tag: "일정 변경", link: "https://www.nowon.kr/www/user/bbs/BD_selectBbs.do?q_bbsCode=1001&q_bbscttSn=20261018103000277&q_estnColumn1=11", source: "노원구청 공지", tone: "orange", icon: "↗" },
  { title: "노원 가족 문화예술축제 ‘꿈을 그리는 정원’", category: "가족·체험", start: "2026-10-31", end: "2026-10-31", place: "노원문화예술회관 대공연장", description: "가족과 함께 즐기는 문화예술축제. 세부 프로그램과 관람 정보를 공식 페이지에서 확인하세요.", tag: "다가오는 일정", link: "https://www.nowonarts.kr/search", source: "노원문화재단", tone: "pink", icon: "✿" },
  { title: "제9회 반려동물 문화축제 ‘노원반함’", category: "축제", start: "2026-10-31", end: "2026-10-31", time: "10:00부터", place: "마들스포츠타운 축구장", description: "반려견 올림픽, 펫티켓 골든벨, 설채현 수의사 토크콘서트와 가족 체험 부스가 열려요.", tag: "무료 참여", link: "https://www.nowon.kr/www/user/bbs/BD_selectBbs.do?q_bbsCode=1027&q_bbscttSn=20261019090933354", source: "노원구청 보도자료", tone: "green", icon: "♡" },
  { title: "SeMA Collection: 시선의 결", category: "전시", start: "2026-10-15", end: "2026-11-29", place: "노원문화예술회관 4층 노원아트뮤지엄", description: "서울시립미술관과 노원문화재단이 함께 선보이는 협력 전시예요.", tag: "전시 중", link: "https://www.nowonarts.kr/search", source: "노원문화재단", tone: "blue", icon: "▧" },
  { title: "2026 노원 NEXT: 민하형 개인전 《피-빼기》", category: "전시", start: "2026-10-13", end: "2026-11-04", place: "경춘선숲길 갤러리", description: "경춘선숲길 갤러리에서 만나는 노원 NEXT 개인전입니다.", tag: "전시 중", link: "https://www.nowonarts.kr/search", source: "노원문화재단", tone: "yellow", icon: "▤" },
  { title: "서울시립교향악단 ‘우리동네 관현악’", category: "공연", start: "2026-11-05", end: "2026-11-05", place: "노원문화예술회관 대공연장", description: "서울시립교향악단의 우리동네 공연. 예매와 관람 연령은 재단 안내를 확인하세요.", tag: "예매 확인", link: "https://www.nowonarts.kr/search", source: "노원문화재단", tone: "blue", icon: "♫" },
  { title: "노원구립청춘실버합창단 정기연주회", category: "공연", start: "2026-11-10", end: "2026-11-10", place: "노원문화예술회관 대공연장", description: "‘꽃길이 따로 있나 내 삶이 꽃인것을’을 주제로 하는 정기연주회입니다.", tag: "공연 예정", link: "https://www.nowonarts.kr/search", source: "노원문화재단", tone: "pink", icon: "♫" },
  { title: "노원수학축전 프로그램 신청", category: "가족·체험", start: "2026-10-01", end: "2026-10-31", place: "노원수학문화관", description: "수학문화관에서 진행하는 축전 프로그램. 신청 가능 여부와 운영 시간은 공식 홈페이지에서 확인하세요.", tag: "접수 확인", link: "https://nowon.kr/math/main", source: "노원수학문화관", tone: "yellow", icon: "π" },
  { title: "11월 초등 창의체험 프로그램", category: "가족·체험", start: "2026-10-27", end: "2026-11-14", time: "접수 및 회차별 운영 확인", place: "노원수학문화관", description: "초등 1~3학년 대상 창의체험 프로그램. 신청 대상과 잔여 좌석을 확인해 주세요.", tag: "10.27 시작", link: "https://nowon.kr/math/main", source: "노원수학문화관", tone: "green", icon: "✳" }
];

const grid = document.querySelector("#event-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search");
let activeFilter = "all";

function dateLabel(start, end) {
  const a = new Date(`${start}T12:00:00`);
  const b = new Date(`${end}T12:00:00`);
  const fmt = new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "short" });
  return start === end ? fmt.format(a) : `${fmt.format(a)} — ${fmt.format(b)}`;
}

function renderEvents() {
  const query = searchInput.value.trim().toLocaleLowerCase("ko-KR");
  const visible = events.filter((event) => {
    const matchesCategory = activeFilter === "all" || event.category === activeFilter;
    const haystack = `${event.title} ${event.place} ${event.description} ${event.source}`.toLocaleLowerCase("ko-KR");
    return matchesCategory && haystack.includes(query);
  }).sort((a, b) => a.start.localeCompare(b.start));

  grid.innerHTML = visible.map((event) => `
    <article class="event-card">
      <div class="card-top"><span class="category ${event.tone}">${event.category}</span><span class="event-icon ${event.tone}" aria-hidden="true">${event.icon}</span></div>
      <span class="event-date">${dateLabel(event.start, event.end)}${event.time ? ` <small>${event.time}</small>` : ""}</span>
      <h3>${event.title}</h3>
      <p class="event-place"><span>⌖</span> ${event.place}</p>
      <p class="event-description">${event.description}</p>
      <div class="card-bottom"><span class="event-tag">${event.tag}</span><a href="${event.link}" target="_blank" rel="noreferrer">${event.source} <span>↗</span></a></div>
    </article>`).join("");

  emptyState.hidden = visible.length > 0;
  document.querySelector("#event-count").textContent = `총 ${visible.length}개 일정`;
}

document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".filter.active")?.classList.remove("active");
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  renderEvents();
}));
searchInput.addEventListener("input", renderEvents);
document.querySelector("#today-label").textContent = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long" }).format(new Date());
renderEvents();
