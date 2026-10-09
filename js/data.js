/* ============================================================
   포트폴리오 내용은 이 파일만 수정하면 됩니다.
   [TODO] 표시된 부분을 본인 정보로 바꿔 주세요.
   ============================================================ */

const DATA = {
  /* ---------- 기본 정보 ---------- */
  profile: {
    name: "전민영",
    nameEn: "Minyeong Jeon",
    tagline: "AI와 사람, 두 영역을 잇다",                    // 1줄 소개
    intro: [                              // 1~2줄 소개 (임시 문구, 자유롭게 수정)
      "논문을 쓰며 배운 '끝까지 파고드는 힘'과, 팀 프로젝트에서 배운 '함께 만드는 힘'을 모두 가진 사람입니다.",
      "모델의 성능 숫자보다, 그 숫자가 사람에게 어떤 의미인지 설명할 수 있는 연구자가 되고 싶습니다."
    ],
    email: "mym0314@knu.ac.kr",
    github: "",                                // 사용 안 함 (연구실 링크로 대체)
    lab: { name: "KNU AIR Lab", url: "https://sites.google.com/view/knuairlab/air" },  // 연구실 홈페이지
    linkedin: "",                              // 없으면 빈 문자열
    resume: "",                                // 예: "assets/files/resume.pdf"
    birth: "2002.03.14",                       // 생년월일
    photo: "",                                 // 예: "assets/img/profile.jpg" (없으면 이니셜 표시)
    roles: ["AI Researcher", "Problem Solver", "Team Player"] // 히어로에서 돌아가는 문구
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
      items: ["Python", "C", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      group: "AI / ML",
      color: "pink",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "NumPy", "Pandas", "OpenCV"]
    },
    {
      group: "Frameworks / Tools",
      color: "mint",
      items: ["React", "Vite", "FastAPI", "Git", "GitHub", "Docker", "Linux", "LaTeX", "Jupyter", "Figma"]
    },
    {
      group: "Collaboration",
      color: "peach",
      items: ["Notion", "Slack", "Jira", "발표 · 문서화", "코드 리뷰"]
    }
  ],

  /* ---------- Projects ----------
     id: 상세 페이지 주소에 쓰이는 고유 이름 (영문, 중복 금지) → project.html?id=...
     type: "paper" (논문) | "project" (프로젝트)
     featured: true 이면 상단 큰 카드로 표시
     color: sky | peach | orange | pink | mint | olive | taupe | cream
     summary: 상세 페이지 그림 아래 본문. 문자열 하나 또는 문단별 문자열 배열
     highlights: 카드에 ✦ 로 표시되는 핵심 성과
     images: 상세 페이지 상단에 보여줄 이미지. 첫 번째가 아키텍처 그림.
             { src: "assets/img/파일명.png", caption: "설명" } 형식
     stats: 상세 페이지의 큰 숫자 타일. { value, label, sub } 형식
     sections: 상세 페이지 하단 섹션. { heading, text } 또는 { heading, items: [...] } 형식
  ---------------------------------- */
  projects: [
    {
      id: "rpm",
      type: "paper",
      featured: true,
      color: "sky",
      title: "RPM: Robust PAN-Sharpening With Multispectral Misalignment Correction",
      subtitle: "정합 오차에 강건한 PAN-Sharpening",
      venue: "IEEE Geoscience and Remote Sensing Letters, vol. 23, 2026 · SCIE 상위 9%",
      role: "공동 제1저자",
      period: "2026.02",
      summary: [
        "기존 PAN-Sharpening은 고해상 PAN 영상과 저해상 다중분광(MS) 밴드가 완벽히 정합됐다고 가정합니다. 하지만 실제 위성 EO 센서는 시차 · 진동 · 센서 오프셋 때문에 PAN–MS는 물론 MS 밴드 간(interband) 위치 오차가 생겨 색 번짐과 이중 윤곽이 발생하고, 완벽히 정합된 정답(GT) 영상은 확보할 수 없습니다.",
        "RPM은 학습 중 각 MS 밴드를 독립적으로 {−1, 0, +1} px 무작위 이동시키고(이동 확률을 선형으로 올리는 커리큘럼), 이동하지 않은 원본 MS로 지도하는 Shift-to-Align(S2A) 자기지도 전략을 제안합니다. 별도의 정합 모듈이나 정합된 GT 없이 PAN에 정렬된 '정합 불변' 융합을 학습하며, 이동으로 깨진 경계 픽셀은 유효 영역 마스킹으로 제외하고 PAN 경계 정보를 쓰는 Edge 일관성 손실로 안정적으로 수렴합니다.",
        "Space-to-Depth → Conv ResBlock + Self-Attention → Depth-to-Space의 경량 피드포워드 구조(C = 128, 0.021 TFLOPs)로, WorldView-3에서 ERGAS 2.007 · SAM 2.712 · PSNR 37.948 · HQNR 0.956을 기록해 TMDiff, CANConv, U-Know-DiffPAN, PAN-Crafter 대비 4개 지표 모두 최고였습니다. 256×256 패치를 0.003s에 처리해 반복 샘플링이 필요한 확산 모델(TMDiff 7.68s) 대비 1,000배 빠릅니다. S2A를 제거하면 HQNR이 0.958 → 0.901(GF2)로 급락하고, S2A를 PAN-Crafter에 적용해도 일관되게 향상돼 학습 전략의 범용성을 확인했습니다. WV3로 학습한 모델의 Pavia(초분광) 교차 검증에서도 최고 성능을 보였습니다."
      ],      highlights: [
        "WorldView-3 ERGAS · SAM · PSNR · HQNR 4개 지표 모두 최고",
        "256×256 패치 0.003s 추론 — 확산 모델(TMDiff 7.68s) 대비 1,000배 빠름",
        "S2A 제거 시 HQNR 0.958 → 0.901 급락, PAN-Crafter에 적용해도 일관 향상",
        "KARI 연구과제 연계 · 코드 공개 (AIRlab-KNU/RPM)"
      ],
      tags: ["PAN-Sharpening", "Self-Supervised", "Remote Sensing", "PyTorch"],
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/11393620" }
      ],
      images: [
        { src: "assets/img/rpm-architecture.png", caption: "RPM 구조 — LR MS + PAN → Space-to-Depth → Conv ResBlock + Self-Attention → Depth-to-Space → HR MS (C = 128)" }
      ],
      stats: [
        { value: "0.003 s", label: "256×256 패치 추론 시간", sub: "RTX 4090 · 0.021 TFLOPs" },
        { value: "1,000×", label: "확산 모델 대비 속도", sub: "TMDiff 7.68s → RPM 0.003s" },
        { value: "0.956", label: "WV3 HQNR 최고", sub: "ERGAS · SAM · PSNR도 모두 최고" }
      ],
      sections: [
        {
          heading: "AI와 사람 사이에서",
          text: "3ms 추론과 0.021 TFLOPs라는 숫자는 '탑재 연산 · 전력 · 다운링크 자원이 제한된 초소형 군집위성에서도 실제로 돌아간다'는 뜻입니다. 저복잡도라는 KARI의 요구를 제약이 아닌 설계 조건으로 받아들였고, 정합된 정답 영상이 없는 현실의 데이터 조건을 그대로 학습 전략에 녹였습니다. 좋은 모델은 벤치마크 위에서만이 아니라 실제 센서와 운영 환경의 조건 안에서 작동해야 한다고 생각합니다."
        },
        {
          heading: "주요 수행 업무",
          items: [
            "Shift-to-Align 학습 전략 설계 및 PyTorch 구현",
            "유효 영역 마스킹 · Edge 일관성 손실 설계",
            "WorldView-3 · GaoFen-2 · QuickBird 3개 벤치마크 및 Pavia 교차 데이터셋 실험",
            "Ablation 실험 — S2A 제거 · Edge 손실 제거 · 이동 범위(±1/±2/±3) · 확률 스케줄(선형/코사인/지수/계단) 비교",
            "논문 작성(공동 제1저자) · 코드 공개(AIRlab-KNU/RPM)"
          ]
        }
      ]
    },
    {
      id: "u-set",
      type: "paper",
      featured: true,
      color: "pink",
      title: "U-SET: Uncertainty-aware SAR-to-EO Translation",
      subtitle: "불확실성 인식 SAR → 광학(EO) 영상 변환",
      venue: "IEEE Signal Processing Letters, vol. 32, 2025 · 한국항공우주연구원(KARI) 공동연구",
      role: "공동 제1저자",
      period: "2025",
      summary: [
        "SAR(레이다) 영상은 speckle과 기하 왜곡 때문에 비전문가가 판독하기 어렵습니다. 학습에 쓰는 SAR–EO 쌍도 촬영 시점 · 기하 차이로 국부 정합 오차를 가지므로, 모든 픽셀을 똑같은 비중으로 학습(L1)하면 경계가 흐려지고 구조가 사라집니다.",
        "U-SET은 픽셀별 예측값 μ와 확신도 σ를 함께 추정하는 NLL 기반 Certainty Mask 손실로 불확실성을 명시적으로 모델링합니다. 확신도가 낮은 모호 영역에 학습 용량을 동적으로 배분해 구조를 보존하고 아티팩트를 줄입니다. SAR→NIR 네트워크(SND)가 뽑은 문맥 특징을 SAR→RGB 네트워크(SCD)에 전달하고, 두 분기가 공유하는 Sharpening 모듈이 세부를 정제합니다.",
        "KOMPSAT-5(SAR) / KOMPSAT-3(EO) 실위성 영상 20쌍(최대 9,682×8,746 px, 5개국)을 정합 · 전처리해 512×512 학습 패치 300만 장을 구축했고, 공개 QXS(Sentinel-1/2) 데이터셋으로 일반화를 검증했습니다. KOMPSAT에서 PSNR 22.06 → 22.81, FID 71.90 → 67.50, LPIPS 0.21 → 0.19로 이전 SOTA(CFCA-SET)를 넘어 9종 방법 · 6개 지표 비교에서 모두 최고였고, QXS에서도 PSNR 20.47 → 21.20, FID 78.01 → 72.07로 향상됐습니다. Certainty Mask를 제거하면 FID가 67.5 → 94.1로 급락해 불확실성 모델링이 성능의 핵심임을 확인했습니다. 256×256 변환은 0.01–0.02s입니다."
      ],      highlights: [
        "KOMPSAT PSNR +0.75 dB, FID 71.90 → 67.50 (이전 SOTA 대비)",
        "Certainty Mask 제거 시 FID 67.5 → 94.1 급락 — 불확실성 모델링이 성능의 핵심",
        "KOMPSAT-5/3 실위성 영상 20쌍 → 512×512 학습 패치 300만 장 구축",
        "결과와 함께 '어디를 못 믿을지'를 내보내는 확신도 맵 — 검수 우선순위 등 운영 신호로 활용 가능"
      ],
      tags: ["SAR-to-EO", "Uncertainty", "GAN", "Remote Sensing", "PyTorch"],
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/11222869" }
      ],
      images: [
        { src: "assets/img/u-set-architecture.png", caption: "U-SET 구조 — SCD(SAR→RGB) · SND(SAR→NIR) 네트워크 + 공유 Sharpening 모듈, Certainty Mask + 적대 손실로 학습" }
      ],
      stats: [
        { value: "+0.75 dB", label: "PSNR 향상", sub: "KOMPSAT · 이전 SOTA 대비" },
        { value: "−6.1%", label: "FID 감소", sub: "KOMPSAT · 71.90 → 67.50" },
        { value: "94.1", label: "FID · 확신도 손실 제거 시", sub: "67.5 → 94.1로 급락" }
      ],
      sections: [
        {
          heading: "AI와 사람 사이에서",
          text: "결과와 함께 '어디를 못 믿을지'를 내보내는 AI입니다. 확신도 맵은 검수 우선순위, 재촬영 · 재처리 판단, 자동 처리 여부 결정 같은 운영 신호로 바로 쓸 수 있습니다. 사람이 AI의 결과를 믿고 쓰려면 성능 수치만이 아니라 모델이 스스로 어디서 어려워하는지를 함께 보여줘야 한다고 생각합니다."
        },
        {
          heading: "주요 수행 업무",
          items: [
            "KOMPSAT-5(SAR) · KOMPSAT-3(EO) 16/14-bit 원본 정합 · 패치 추출 등 대규모 전처리 파이프라인 구축 (512×512 패치 300만 장)",
            "Certainty Mask 손실과 SCD / SND 네트워크 설계 · PyTorch 구현",
            "9종 기존 방법 재구현 벤치마크 — 코드가 공개되지 않은 5종은 논문을 보고 직접 구현",
            "Ablation 실험 — Certainty Mask 제거 · SND 네트워크 제거",
            "논문 작성(공동 제1저자) · KARI 연구진과 정기 회의로 데이터 요구사항과 결과 조율"
          ]
        }
      ]
    },
    {
      id: "la-inr",
      type: "paper",
      featured: true,
      color: "mint",
      title: "LA-INR: Variance-Guided Locally Adaptive Implicit Super-Resolution for Aerial Surveillance",
      subtitle: "분산을 '복원 난이도'로 읽는 항공 영상 초해상화",
      venue: "IEEE AVSS 2026 · BK21 인정 국제학술대회",
      role: "제1저자",
      period: "2026",
      summary: [
        "INR 기반 초해상화(LIIF · HIIF)는 ℓ1/ℓ2 고정 손실로 모든 픽셀을 동일하게 취급해 경계 · 텍스처 · 소형 객체 윤곽이 과평활됩니다. 항공 감시 영상은 원거리 · 대역폭 제약으로 저해상 관측이 잦고, 그때 사라지는 것이 바로 탐지에 필요한 소형 객체 정보입니다.",
        "LA-INR은 디코더 마지막 층을 3 → 6채널로 확장해 RGB 평균 μ와 로그분산 s를 동시에 예측하고, 픽셀별 NLL로 공간 가변 잔차 스케일을 학습해 '복원 난이도 맵'을 얻습니다(PVM). 이어서 stop-gradient된 분산을 난이도 점수로 삼아 온도 softmax(T = 0.5)와 균등 블렌딩(α = 0.1)으로 어려운 픽셀을 재가중합니다(PVR). 분산 맵을 '보정된 불확실성'으로 주장하지 않고 학습 신호로만 쓴 것이 설계의 핵심이며, 좌표 재샘플링 없이 기존 INR에 최소 수정으로 적용됩니다(LA-LIIF · LA-HIIF).",
        "DOTA · UC Merced의 모든 백본(EDSR/RDN/SwinIR)과 배율(×2/×3/×4)에서 LA-변형이 기존 INR 대비 PSNR/SSIM을 일관되게 끌어올렸고(예: RDN ×4 DOTA 27.659/0.837 → 27.797/0.852), 확대 영상에서 숫자 '40 · 30' 같은 얇은 구조의 판독성이 회복됐습니다. HR로 학습한 검출기를 고정(frozen)한 채 초해상 결과만 바꿔 넣는 평가 프로토콜을 직접 설계했고, 4종 검출기 모두에서 향상되어 RetinaNet mAP50이 58.87 → 63.25로 HR 상한(63.30)에 근접했습니다. PVM만 쓰면 일부 배율에서 PSNR이 소폭 하락하지만 PVR과 결합하면 일관되게 향상돼 두 구성요소의 상호 보완성도 확인했습니다."
      ],      highlights: [
        "PVM(픽셀별 분산 모델링) + PVR(분산 유도 재가중) — 기존 INR에 최소 수정으로 적용",
        "DOTA · UC Merced ×2/×3/×4, EDSR/RDN/SwinIR 전 조합에서 PSNR/SSIM 일관 향상",
        "고정 검출기 평가 프로토콜 직접 설계 — RetinaNet mAP50 58.87 → 63.25 (HR 상한 63.30)",
        "단독 1저자: 문제 정의 · 설계 · 구현 · 벤치마크 · 논문 작성"
      ],
      tags: ["Super-Resolution", "INR", "Aerial Imagery", "Object Detection", "PyTorch"],
      links: [],
      images: [
        { src: "assets/img/la-inr-architecture.png", caption: "LA-INR 개요 — (a) 백본 + INR 디코더가 RGB와 분산 맵을 동시 예측 (b) PVM (c) PVR: 고분산 영역 우선 학습" }
      ],
      stats: [
        { value: "58.87 → 63.25", label: "RetinaNet mAP50", sub: "DOTA ×4 · HR 상한 63.30에 근접" },
        { value: "4종", label: "검출기 모두 향상", sub: "RetinaNet · FCOS · H2RBox-v2 · ABBSPO" },
        { value: "3 → 6ch", label: "디코더 마지막 층 확장", sub: "RGB 평균 μ + 로그분산 s 동시 예측" }
      ],
      sections: [
        {
          heading: "AI와 사람 사이에서",
          text: "검출기 재학습 없이(frozen) 성능이 회복되므로 기존 시스템 앞단에 전처리 모듈로 붙일 수 있습니다. '모델 지표(PSNR)가 아니라 업무 지표(탐지율)로 평가한다'는 원칙을 논문 실험 설계에 그대로 넣었습니다. AI의 성과는 결국 그것을 쓰는 사람의 일이 얼마나 나아졌는지로 측정돼야 한다고 생각합니다."
        },
        {
          heading: "주요 수행 업무",
          items: [
            "문제 정의 — INR의 균일 손실 한계 분석",
            "PVM / PVR 설계 및 PyTorch 구현",
            "3종 백본(EDSR/RDN/SwinIR) × 2종 INR 디코더(LIIF/HIIF) × 3배율 벤치마크",
            "고정 검출기 4종(RetinaNet · FCOS · H2RBox-v2 · ABBSPO)을 이용한 다운스트림 평가 프로토콜 설계",
            "논문 작성(제1저자) · 지도교수와 1:1 논의로 연구 방향 설정"
          ]
        }
      ]
    },

    /* ---- 아래 프로젝트들은 임시 내용입니다. 다음 단계에서 LawBot · 보잉코리아 · Safety Net 등으로 교체 ---- */
    {
      id: "capstone",
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
      links: [],
      images: [],
      stats: [],
      sections: []
    },
    {
      id: "web-service",
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
      links: [],
      images: [],
      stats: [],
      sections: []
    },
    {
      id: "data-contest",
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
      links: [],
      images: [],
      stats: [],
      sections: []
    }
  ]
};
