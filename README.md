# 노원, 지금 뭐하지?

노원구의 축제, 공연, 전시, 가족 체험 일정을 모아 보여주는 정적 웹사이트입니다. 별도의 서버나 빌드 과정 없이 GitHub Pages에 배포할 수 있습니다.

## GitHub Pages에 게시하기

1. 이 저장소의 **Settings → Pages**를 엽니다.
2. **Build and deployment**에서 `Deploy from a branch`를 선택합니다.
3. 게시할 브랜치(예: `main`)와 폴더 `/ (root)`를 선택하고 저장합니다.
4. 잠시 후 Pages 화면에 표시되는 주소로 사이트를 확인합니다.

`.github/workflows/pages.yml`을 사용하는 GitHub Actions 배포를 원한다면 Pages 설정의 Source를 `GitHub Actions`로 선택하세요.

## 일정 수정

`app.js`의 `events` 배열에서 일정을 추가하거나 고치면 됩니다. 시작일과 종료일은 `YYYY-MM-DD` 형식으로 적고, 반드시 주최 기관의 최신 공지 링크를 함께 넣어 주세요. 현재 목록은 **2026년 10월 19일** 확인 자료를 바탕으로 구성했습니다. 지난 행사는 자동으로 제거하지 않으므로 새 일정 확인 때 목록을 정리해 주세요.

이 사이트는 노원구청·노원문화재단·노원수학문화관의 공식 정보를 바탕으로 만든 비공식 안내 페이지입니다. 운영 시간이나 접수 상태가 바뀔 수 있으니 방문 전에 원문을 확인해 주세요.

## 참고한 공식 정보

- [노원구청](https://www.nowon.kr/www/index.do) — 온라인 접수와 생활 행사
- [노원문화재단](https://www.nowonarts.kr/) — 공연·전시 및 노원달빛산책
- [노원구청 반려동물 축제 공지](https://www.nowon.kr/www/user/bbs/BD_selectBbs.do?q_bbsCode=1027&q_bbscttSn=20261019090933354)
- [노원구청 동 마을축제 변경 공지](https://www.nowon.kr/www/user/bbs/BD_selectBbs.do?q_bbsCode=1001&q_bbscttSn=20261018103000277&q_estnColumn1=11)
- [노원수학문화관](https://nowon.kr/math/main)

행사 정보는 원문으로 연결하며, 해당 기관의 일정·접수 규칙이 우선합니다.
