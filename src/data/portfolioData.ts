export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  role: string;
  features: string[];
  period?: string;
  isFeatured?: boolean;
};

export const projects: Project[] = [
  {
    id: "hmg-pay",
    title: "HmgPay 해외 PSP 시스템 운영 개발",
    subtitle: "배치 공통 구조 신규 구축 및 운영 개발",
    description: "운영 업무로 투입되었으나 단순 운영보다는 신규 및 추가 개발 업무를 주로 수행했습니다. 특히 프로젝트 내 배치 처리 기반이 없는 상태에서 배치 공통 구조를 신규로 구축하여 배치 실행 로그와 처리 이력을 DB에 적재할 수 있도록 공통화했습니다.",
    period: "2025.04 ~ 2026.03",
    tags: ["Java", "Spring", "Batch", "API Integration"],
    role: "Backend Developer",
    features: [
      "배치 처리 기반이 없는 상태에서 배치 공통 구조 신규 구축",
      "배치 실행 로그 및 배치 처리 이력 DB 적재 공통화",
      "외부 엑셀 파일 다운로드, 데이터 검증 및 DB 적재 배치 개발",
      "반복적인 운영 업무 자동화 및 배치 실행 결과 추적 구조 마련"
    ]
  },
  {
    id: "kia-ew",
    title: "기아 보증연장서비스 운영",
    subtitle: "서비스 운영 및 홈페이지/백오피스 개선 개발",
    description: "기아 보증연장 서비스 운영과 블루월넛 홈페이지 및 백오피스 관리 업무를 담당했습니다. 고객 VOC를 바탕으로 기존 시스템의 개선사항을 개발하고 발생 이슈에 빠르게 대응했습니다.",
    period: "2024.08 ~ 2025.03",
    tags: ["Java", "JSP", "Oracle"],
    role: "Fullstack Developer",
    features: [
      "기아 보증연장 서비스 운영 및 블루월넛 홈페이지/백오피스 관리",
      "고객 VOC 기반 기존 시스템 개선사항 개발 및 이슈 신속 대응",
      "사용자 불편 해소를 위한 서비스 흐름 개선 개발"
    ]
  },
  {
    id: "lotte-itsm",
    title: "롯데이노베이트 ITSM 프로젝트",
    subtitle: "ITSM 메인 페이지 CSR 상세 기능 개발",
    description: "ITSM 메인 페이지의 CSR 상세 기능 개발을 담당하여 React 컴포넌트 기반으로 CSR 상세 화면을 개발하고, 백엔드 API와 연동하여 프론트엔드와 백엔드가 유기적으로 동작하도록 구현했습니다.",
    period: "2024.02 ~ 2024.05",
    tags: ["Java", "React", "TypeScript", "JPA", "MariaDB"],
    role: "Fullstack Developer",
    features: [
      "React 컴포넌트 기반 CSR 상세 화면 개발",
      "백엔드 API 연동을 통한 프론트엔드-백엔드 유기적 동작 구현",
      "화면과 API 흐름을 통합적으로 고려한 기능 구현"
    ]
  },
  {
    id: "everland",
    title: "에버랜드 통합 멤버십 시스템",
    subtitle: "회원 통합 시스템 및 간편가입 API 연동",
    description: "회원 통합 시스템 개발, API 개발, 배치 처리 업무를 수행했습니다. 기존 회원과 신규 회원 정보를 통합하는 API를 개발하고, 카카오페이 및 삼성카드 연동 API 개발에 참여했습니다. 회원 업무 영역의 리더 역할을 맡아 오픈 안정화에도 기여했습니다.",
    period: "2023.02 ~ 2023.12",
    tags: ["Java", "Oracle", "API Integration", "Batch"],
    role: "Backend Developer (회원 영역 리더)",
    features: [
      "기존 및 신규 회원 정보 통합 API 개발",
      "외부 시스템 연동 API 개발 (카카오페이, 삼성카드 PLCC)",
      "대량 데이터 처리를 위한 배치 처리 시스템 개발",
      "회원 업무 영역 리더로서 오픈 안정화 기여"
    ]
  },
  {
    id: "post-office",
    title: "우체국 차세대 종합금융시스템",
    subtitle: "카드 발급 업무 화면 및 API 개발",
    description: "카드 발급 업무 전반의 화면 및 API 개발을 수행했습니다. 체크카드 발급 화면과 API를 개발했으며, 카드 발급 기기와의 연동을 위한 핵심 함수 개발을 담당했습니다.",
    period: "2022.02 ~ 2022.12",
    tags: ["Java", "JavaScript", "Oracle", "WebSquare"],
    role: "Fullstack Developer",
    features: [
      "체크카드 발급 화면 및 API 개발",
      "실물 카드 발급 기기(단말기) 연동을 위한 핵심 함수 개발",
      "금융 서비스 특성을 고려한 정확하고 안정적인 업무 로직 분석 및 구현"
    ]
  },
  {
    id: "novusmay",
    title: "노버스메이 타임키퍼",
    subtitle: "근태관리 솔루션 기능 개발",
    description: "근태관리 솔루션 타임키퍼의 서비스 기능 개발을 담당하며, 핵심 로직 개발 및 고객사 요구사항에 맞춘 커스터마이징을 수행했습니다.",
    period: "약 1년",
    tags: ["Java", "JSP", "JavaScript", "MSSQL"],
    role: "Fullstack Developer",
    features: [
      "근태 솔루션 핵심 로직 및 서비스 기능 개발",
      "고객사 요구사항 기반 커스터마이징 대응"
    ]
  }
];

export const skills = [
  { name: "Java", level: 95, category: "Backend" },
  { name: "Spring", level: 90, category: "Backend" },
  { name: "SQL", level: 90, category: "Database" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" }
];
