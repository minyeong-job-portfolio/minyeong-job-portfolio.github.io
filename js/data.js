/* ============================================================
   포트폴리오 내용은 이 파일만 수정하면 됩니다.
   [TODO] 표시된 부분을 본인 정보로 바꿔 주세요.
   ============================================================ */

const DATA = {
  /* ---------- 기본 정보 ---------- */
  profile: {
    name: "전민영",
    nameEn: "Minyeong Jeon",
    tagline: "데이터 속에서 질문을 찾고, 연구로 답하는 AI 연구자",   // 1줄 소개 (임시)
    intro: [                              // 1~2줄 소개 (임시 문구, 자유롭게 수정)
      "논문을 쓰며 배운 '끝까지 파고드는 힘'과, 팀 프로젝트에서 배운 '함께 만드는 힘'을 모두 가진 사람입니다.",
      "모델의 성능 숫자보다, 그 숫자가 사람에게 어떤 의미인지 설명할 수 있는 연구자가 되고 싶습니다."
    ],
    email: "mym0314@knu.ac.kr",
    github: "https://github.com/minyeong-job-portfolio",
    linkedin: "",                              // 없으면 빈 문자열
    resume: "",                                // 예: "assets/files/resume.pdf"
    location: "Daegu, Korea",
    photo: "",                                 // 예: "assets/img/profile.jpg" (없으면 이니셜 표시)
    roles: ["AI Researcher", "Paper Author", "Problem Solver", "Team Player"] // 히어로에서 돌아가는 문구
  },

  /* ---------- 히어로 영역의 작은 스티커들 ---------- */
  stickers: [
    { emoji: "📄", text: "논문 게재", color: "sky" },
    { emoji: "🤝", text: "협업 프로젝트", color: "mint" },
    { emoji: "💬", text: "커뮤니케이션", color: "peach" },
    { emoji: "🧠", text: "Deep Learning", color: "pink" }
  ],

  /* ---------- About ---------- */
  education: [
    {
      school: "경북대학교",
      major: "컴퓨터학부 심화컴퓨터전공",
      period: "",                               // 예: "2021.03 – 2026.02" (비워두면 표시 안 함)
      note: ""                                  // 예: "GPA 4.0 / 4.5" (비워두면 표시 안 함)
    }
  ],
  certificates: [
    { name: "ADsP", org: "데이터분석 준전문가 · 한국데이터산업진흥원", date: "2025.03" }
  ],
  languages: [
    { name: "OPIc", score: "IM2", date: "" }                         // date 는 비워도 됨
  ],
  awards: [
    // 예: { name: "교내 AI 경진대회 최우수상", org: "경북대학교", date: "2024.11" }
  ],

  /* ---------- Skills ---------- */
  skills: [
    {
      group: "Languages",
      color: "sky",
      items: ["Python", "C", "TypeScript", "JavaScript", "SQL"]
    },
    {
      group: "AI / ML",
      color: "pink",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "NumPy", "Pandas", "OpenCV"]
    },
    {
      group: "Tools",
      color: "mint",
      items: ["Git", "GitHub", "Docker", "Linux", "LaTeX", "Jupyter", "Figma"]
    },
    {
      group: "Collaboration",
      color: "peach",
      items: ["Notion", "Slack", "Jira", "발표 · 문서화", "코드 리뷰"]
    }
  ],

  /* ---------- Projects ----------
     type: "paper" (논문) | "project" (프로젝트)
     featured: true 이면 상단 큰 카드로 표시
     color: sky | peach | orange | pink | mint | olive | taupe | cream
  ---------------------------------- */
  projects: [
    {
      type: "paper",
      featured: true,
      color: "sky",
      title: "논문 제목을 여기에 적어 주세요",                    // [TODO]
      venue: "학회/저널 이름 2025",                             // [TODO] 예: KCC 2025, IEEE Access
      role: "1저자",                                          // [TODO]
      period: "2024.09 – 2025.03",
      summary: "어떤 문제를, 어떤 방법으로, 어떤 결과를 얻었는지 2~3문장으로 요약합니다. 성능 수치가 있으면 함께 적어 주세요.",
      highlights: [
        "기존 대비 정확도 00%p 향상",
        "실험 설계 · 데이터 구축 · 논문 작성 주도",
        "학회 구두 발표"
      ],
      tags: ["PyTorch", "Computer Vision", "Research"],
      links: [
        { label: "Paper", url: "#" },
        { label: "GitHub", url: "#" }
      ]
    },
    {
      type: "paper",
      featured: true,
      color: "pink",
      title: "두 번째 논문 제목",                                // [TODO]
      venue: "학회 이름 2024",
      role: "공동 저자",
      period: "2024.03 – 2024.08",
      summary: "논문 요약을 적어 주세요.",
      highlights: ["담당한 역할 1", "담당한 역할 2"],
      tags: ["NLP", "Transformer"],
      links: [{ label: "Paper", url: "#" }]
    },
    {
      type: "project",
      featured: false,
      color: "mint",
      title: "교내 캡스톤 프로젝트",                              // [TODO]
      venue: "4인 팀 프로젝트",
      role: "팀장 · AI 파트",
      period: "2024.03 – 2024.06",
      summary: "팀원 간 역할 조율, 주간 회의 진행, 발표 담당. 기술적으로는 모델 학습 파이프라인을 설계했습니다.",
      highlights: ["주간 스프린트 운영 및 회의록 관리", "최종 발표 담당"],
      tags: ["협업", "커뮤니케이션", "Python"],
      links: [{ label: "GitHub", url: "#" }]
    },
    {
      type: "project",
      featured: false,
      color: "peach",
      title: "웹 서비스 프로젝트",                               // [TODO]
      venue: "동아리 프로젝트",
      role: "프론트엔드",
      period: "2023.09 – 2023.12",
      summary: "TypeScript와 React로 사용자 화면을 구현하고, 백엔드 팀과 API 명세를 함께 설계했습니다.",
      highlights: ["API 명세 문서화", "디자이너와 협업해 UI 개선"],
      tags: ["TypeScript", "React", "협업"],
      links: [{ label: "GitHub", url: "#" }, { label: "Demo", url: "#" }]
    },
    {
      type: "project",
      featured: false,
      color: "orange",
      title: "데이터 분석 공모전",                               // [TODO]
      venue: "외부 공모전",
      role: "데이터 분석",
      period: "2023.06 – 2023.08",
      summary: "공공 데이터를 분석하고 인사이트를 시각화해 발표했습니다.",
      highlights: ["EDA 및 시각화 리포트 작성"],
      tags: ["Pandas", "시각화", "발표"],
      links: []
    }
  ]
};
