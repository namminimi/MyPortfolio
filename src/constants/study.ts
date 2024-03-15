type STUDYS_TYPE = {
  Done: string;
  origin?: string;
  link?: string;
  term: string;
};

const STUDYS: STUDYS_TYPE[] = [
  {
    Done: '코드잇 스프린트 부트캠프(프론트엔드) 1기',
    term: '2023.09.05 ~ 2024.03.04',
  },
  {
    Done: '자바스크립트 스터디그룹',
    link: 'https://github.com/CodeSprint01-TeamSix',
    term: '2023.10.04 ~ 2024.01.17',
  },
  {
    Done: '웹에이전시(인턴 - 웹퍼블리싱)',
    term: '2023.06.01 ~ 2023.07.09',
  },
  {
    Done: '정보처리기능사',
    origin: '자격증 | 한국산업인력공단',
    term: '2023.04',
  },
  {
    Done: '그린아카데미-IoT융합 자바스크립트 기반 소프트웨어 엔지니어 개발자(프론트엔드)',
    term: '2022.10.04 ~ 2023.03.23',
  },
  {
    Done: '그린아카데미-자바(JAVA) 프로그래밍 기초(개발자 입문)',
    term: '2022.08.08 ~ 2022.08.30',
  },
];

export default STUDYS;
