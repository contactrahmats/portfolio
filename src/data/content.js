// All site copy lives here so components stay presentational.
// Replace photo: null placeholders with real image imports once photos are ready.

import img_personal from './img_personal.webp'



export const hero = {
  greeting: "Hi, I'm",
  name: 'Rahmat Syawaludin',
  hook: 'The training people actually finish. And remember.',
  roleLine: 'Learning & Development Specialist · Instructional Designer · Trainer — 3+ years, Indonesia',
  ctas: [
    { label: 'View Work', href: '#case-studies', style: 'primary' },
    { label: 'Résumé', href: 'https://drive.google.com/file/d/1num2E_NvG-rUbmPGooF1DOMQSQTTUdEn/view', style: 'amber', external: true },
    { label: 'Contact', href: '#contact', style: 'ghost' },
  ],
  credentials: ['MEd Digital Learning · Monash University', 'LPDP Scholar', 'AR Patent Holder'],
}

export const about = {
  photo: img_personal, // TODO: replace with real photo import
  narrative: [
    "I didn't start in learning design. I started in a classroom in a small city in Central Java, curious about why some students thrived and others quietly disappeared. That question followed me through an Informatics Engineering degree, into rural schools in Maluku where electricity ran six hours a day, and eventually to Monash University in Australia, where I spent two years studying exactly why learning breaks down and how to fix it.",
    'As an LPDP scholar, I came back to Indonesia because this is where the hardest, most important learning problems live, and I wanted to work on them.',
  ],
  credibilityPoints: [
    'MEd Digital Learning, Monash University, LPDP Scholar',
    '300 to 500 students reached through field-deployed training',
    '3 peer-reviewed publications, 1 registered patent',
    'Frameworks: ADDIE, Kirkpatrick, Backward Design',
  ],
  closing: 'Good training should survive contact with reality. That\u2019s the only bar I design to.',
}

// Featured / flagship case studies. Each renders as a horizontal preview card
// that opens into a full scrolling-story modal with a sticky stage timeline.
export const caseStudies = [
  {
    slug: 'babar-kalesang',
    title: 'Babar Kalesang',
    org: 'Desamind Indonesia \u00d7 Pertamina & PLN',
    timeframe: '2022\u20132023',
    hook: 'Designed a fully offline learning lab for a village with 12 hours of power a day.',
    badges: ['300\u2013500 Students', 'Still Active'],
    photo: null, // TODO: single hero photo for this case study
    externalLink: 'https://www.instagram.com/babarkalesang.desamind/',
    tags: ['ADDIE', 'AR Development', 'Offline-First', 'Teacher Training', 'Needs Analysis', 'CSR Alignment'],
    stages: [
      {
        label: 'Needs Analysis',
        body: 'Desa Tepa sits in the Pulau-Pulau Babar islands of Maluku Barat Daya, one of Indonesia\u2019s outermost frontier regions. The village runs on 12 hours of electricity a day from a diesel generator, and the internet, where it exists at all, is limited to an unstable GPRS signal. Any training solution had to work without assuming either would be reliably available.',
      },
      {
        label: 'Field Deployment',
        body: 'Over two visits, I led training for more than 100 students and teachers across SMA Negeri 5 and SMK Negeri 3 Maluku Barat Daya. Sessions covered digital literacy, computational thinking, and CS Unplugged, paired with hands on STEM projects like solar powered power banks and visual programming in Scratch, giving students tools they could keep using long after the workshop ended.',
      },
      {
        label: 'Offline Design',
        body: 'I designed a Low-Tech Environment Laboratory built entirely around the constraint, not around ideal conditions. Learning ran on offline Android apps, augmented and virtual reality modules installed directly onto devices, and AR-integrated books that worked without any connection at all. Where the moment called for something more immersive, we still found room for it, including VR sessions that gave students their first experience with technology like Meta Quest.',
      },
      {
        label: 'Evaluation',
        body: 'The program reached 300 to 500 students, evaluated using Kirkpatrick\u2019s model. What mattered more than the number was what happened after we left. Materials are still in active use, a local Desamind chapter formed to carry the work forward, and the visit even surfaced a broken satellite internet connection that, once reported, was fixed, quietly improving connectivity for the whole village going forward.',
      },
    ],
  },
  {
    slug: 'monash-capstone',
    title: 'Community-Based Offline Learning Companion App',
    org: 'Monash University \u00b7 Shaping Digital Futures',
    timeframe: '2025',
    hook: 'A gamified offline literacy app, designed with a rural community instead of for one.',
    badges: ['HD \u00b7 83/100'],
    photo: null,
    externalLink: 'https://pewter-washer-791.notion.site/Community-Based-Offline-Learning-Companion-App-28c46416af218007b7aedb724117a71d',
    tags: ['Stanford D.school', 'Double Diamond', 'Co-design', 'Offline-First', 'Gamification', 'Community Engagement'],
    stages: [
      {
        label: 'Discover',
        body: 'Indonesia spends nearly a fifth of its national budget on education. In rural villages, that money still isn\u2019t reaching kids in a way that sticks. I sat with families to find out why, and the answer wasn\u2019t what I expected. Parents didn\u2019t need a better app. They needed to stop feeling afraid of getting it wrong.',
      },
      {
        label: 'Define',
        body: 'So I stopped asking how to get technology into more hands. I started asking how to get confidence into more homes.',
      },
      {
        label: 'Develop',
        body: 'The result was StoryQuest, a game kids actually want to open, built with the people who\u2019d use it, not for them. Parents get a voice guiding them, not a manual to read. Teachers get one simple toolkit instead of another system to learn. And the stories themselves are told the way these communities already tell stories, in local folktales, narrated in Javanese, so the app feels like it belongs there instead of arriving from somewhere else.',
      },
      {
        label: 'Deliver',
        body: 'It scored a High Distinction, 83 out of 100. But grades fade. What doesn\u2019t is a facilitator guide and a sustainability plan built so the program keeps running long after I\u2019m gone, because a solution designed with a community outlives one just designed for it.',
      },
    ],
  },
  {
    slug: 'ar-manner',
    title: 'AR-Manner 1.0',
    org: 'Universitas Muhammadiyah Surakarta',
    timeframe: '2020\u20132022',
    hook: 'A patented AR app that makes the moment a student\u2019s mistake becomes visible.',
    badges: ['Registered Patent', 'Published'],
    photo: null,
    externalLink: 'https://doi.org/10.1063/5.0141416',
    tags: ['AR Development', 'Research Design', 'Scenario-Based Learning', 'Peer Review'],
    stages: [
      {
        label: 'Research',
        body: 'Students were calling lecturers at midnight, using casual language meant for friends, and not understanding why the relationship kept breaking down. A poster about polite emails wasn\u2019t going to fix that. So as part of a research team, I helped investigate what students would actually engage with instead of ignore.',
      },
      {
        label: 'Build',
        body: 'I co-developed AR-Manner 1.0 in Unity, an app that turns a printed card into a doorway. Point a phone at it, and a video plays showing the exact mistakes students make when contacting lecturers, and what good communication actually looks like. No lecture, no poster, just a moment where the mistake becomes visible.',
      },
      {
        label: 'Test',
        body: 'Every one of the app\u2019s core functions passed testing with a 100 percent success rate. More importantly, it ran without a single error across six different Android phones, from a Redmi budget model to a Realme and a Samsung, on OS versions years apart. It didn\u2019t need a flagship device. It needed to work on the phone a student already owned.',
      },
      {
        label: 'Publish',
        body: 'The research was co-published in the ICOLAE 2021 proceedings, and AR-Manner 1.0 was registered as a patent. A classroom prototype became something citable, protected, and real.',
      },
    ],
  },
]

// Standard project grid: split into Professional Work and Self-Initiated,
// each its own horizontally scrolling row.
export const professionalWork = [
  {
    title: 'Computational Thinking Curriculum',
    org: 'UMS \u00d7 Bebras Indonesia \u00b7 Feb\u2013Jun 2022',
    photo: null,
    description: 'Designed and delivered a Computational Thinking curriculum across 5 to 10 schools in the Solo Raya region through weekly school visits, aligned to Bebras Indonesia\u2019s national CT framework.',
    tags: ['Curriculum Design', 'Inquiry-Based Learning', 'Facilitation'],
    impact: '5\u201310 Schools \u00b7 National CT Framework Alignment',
    link: 'https://desamind.id/2022/05/11/desamind-indonesia-bersama-biro-bebras-universitas-muhammadiyah-surakarta-sukses-mengadakan-kelas-lilin-inspirasi/',
  },
  {
    title: 'Ministry of Education \u2014 Kampus Mengajar',
    org: 'Kemendikbudristek Indonesia \u00b7 Aug\u2013Dec 2021',
    photo: null,
    description: 'Team Lead of Teacher Assistants and PIC for Grade 1 students. Taught ICT to Grades 4 to 6, designing differentiated lesson plans for learners across varied socio-economic and literacy backgrounds.',
    tags: ['Differentiated Instruction', 'Team Leadership', 'ICT Teaching'],
    impact: 'Ministry Programme \u00b7 Team Lead',
    link: null,
  },
]

export const selfInitiated = [
  {
    title: 'EquiLearn',
    org: 'Personal Project \u00b7 Data Analytics',
    photo: null,
    description: 'An educational equity analytics dashboard that turns raw student data into insight, helping education teams spot learning patterns while respecting data privacy.',
    builtWith: ['Python', 'Streamlit', 'Pandas'],
    link: 'https://rahmatsyawaludin-equilearn.streamlit.app/',
  },
  {
    title: 'PM Dashboard',
    org: 'Personal Project',
    photo: null,
    description: 'A project management dashboard that turns spreadsheet data into a clear progress view for a community-based offline learning app idea.',
    builtWith: ['Streamlit', 'Python', 'Data Visualization'],
    link: 'https://rahmatsyawaludin-pm-dashboard.streamlit.app/',
  },
  {
    title: 'EduPulse',
    org: 'Personal Project',
    photo: null,
    description: 'An LMS-inspired prototype built to improve learner engagement through progress tracking, quizzes, feedback loops, and simple motivation features.',
    builtWith: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rahmatsyawaludin.github.io/edupulse/',
  },
  {
    title: 'Human Firewall',
    org: 'Case Study Project',
    photo: null,
    description: 'A case study exploring a game-based learning solution for cybersecurity training, combining behavioral design and microlearning to build stronger workplace security habits.',
    builtWith: ['Behavioral Design', 'Game-based Learning'],
    link: 'https://rahmatsyawaludin.github.io/case-study-human-firewall/',
  },
]

// category: 'ld' | 'edu' | 'org' | 'tech' — drives the timeline dot color
export const experience = [
  { period: 'Jul 2026 \u2013 Present', role: 'Trainer and Learning Development', org: 'PT Ocean Media Indonesia', oneLiner: 'Training new talent weekly using a standardized training module.', category: 'edu' },
  { period: 'Jun \u2013 Dec 2025', role: 'Campus Ambassador', org: 'Monash University', oneLiner: 'Supported 10+ university events for international visitors.', category: 'edu' },
  { period: 'Mar \u2013 Jun 2025', role: 'Learning Designer', org: 'Monash Capstone', oneLiner: 'Designed an offline learning app achieving High Distinction.', category: 'ld', linkTo: 'monash-capstone' },
  { period: 'Jun 2022 \u2013 Nov 2023', role: 'Lead Instructional Designer', org: 'Babar Kalesang', oneLiner: 'Designed offline AR learning reaching 300 to 500 students.', category: 'ld', linkTo: 'babar-kalesang' },
  { period: 'Oct 2022 \u2013 Aug 2023', role: 'Web Content Writer', org: 'Universitas Muhammadiyah Surakarta', oneLiner: 'Maintained digital academic content for the university website.', category: 'org' },
  { period: 'Feb \u2013 Jun 2022', role: 'Curriculum Designer & Tutor', org: 'CT Curriculum', oneLiner: 'Delivered Computational Thinking curriculum across 5 to 10 schools.', category: 'ld' },
  { period: 'Aug \u2013 Dec 2021', role: 'Team Lead & ICT Teacher', org: 'Ministry of Education', oneLiner: 'Led differentiated ICT instruction for Grades 4 to 6.', category: 'edu' },
  { period: 'Feb \u2013 Jul 2021', role: 'Cloud Computing Capstone', org: 'Bangkit Academy', oneLiner: 'Built cloud infrastructure for an emergency response app.', category: 'tech' },
  { period: 'Mar 2020 \u2013 Dec 2024', role: 'Director of Secretariat & Finance', org: 'Desamind Indonesia', oneLiner: 'Led operations and finance across 6 divisions, budget exceeding IDR 600 million.', category: 'org' },
  { period: 'Mar 2020 \u2013 Dec 2021', role: 'Research Assistant', org: 'AR-Manner', oneLiner: 'Co-developed a patented AR ethics education tool.', category: 'ld', linkTo: 'ar-manner' },
  { period: 'Sep 2019 \u2013 Aug 2021', role: 'English Tutor', org: 'Universitas Muhammadiyah Surakarta', oneLiner: 'Designed scaffolded English lessons for new university students.', category: 'edu' },
]

export const education = [
  {
    degree: 'Master of Education (Digital Learning)',
    school: 'Monash University, Australia',
    flag: 'LPDP Scholar',
    year: 'Feb 2024 \u2013 Dec 2025',
    transcript: [
      { grade: 'HD \u00b7 89', subject: 'Educational Organisations, Culture & Change' },
      { grade: 'HD \u00b7 85', subject: 'Leading Educational Technology Change' },
      { grade: 'HD \u00b7 83', subject: 'Shaping Digital Futures' },
      { grade: 'HD \u00b7 80', subject: 'Educational Leadership in International Contexts' },
    ],
  },
  {
    degree: 'Bachelor of Informatics Engineering Education',
    school: 'Universitas Muhammadiyah Surakarta',
    flag: 'PPA Scholar',
    year: 'Aug 2018 \u2013 Oct 2022',
    highlights: [
      '1st Place, National 21st Century Learning Innovation Competition (2021)',
      'Bangkit Academy (Google, Goto, Traveloka) \u2014 Cloud Computing specialisation',
    ],
  },
]

export const skills = {
  core: [
    'ADDIE & Backward Design',
    'Training Needs Analysis',
    'Kirkpatrick Evaluation',
    'AR Development & Offline-First Design',
    'Stanford D.school / Double Diamond',
    'Python & Streamlit',
  ],
  familiar: [
    'SAM (Successive Approximation)',
    'Gamification',
    'Canvas LMS',
    'Google Classroom',
    'HTML/CSS/JS',
    'Figma',
    'Canva',
    'GitHub',
    'Google Cloud',
    'Google Workspace (Admin)',
    'Microsoft Office',
    'Project & Stakeholder Management',
    'Agile Facilitation',
    'Public Speaking',
  ],
}

export const publications = {
  publications: [
    'Development of AR-Manner 1.0 as a Learning Media for Communication Ethics to Contact Lecturers in Higher Education Using Augmented Reality Technology',
    "Implementing STAD Learning Model to Improve Children's Spelling Ability",
    'Penyusunan Peta Konsep Mempermudah Belajar Siswa Selama Masa Pandemi Covid-19',
  ],
  patents: [
    'AR-Manner 1.0 \u2014 Augmented Reality Application for Communication Ethics Education in Higher Education',
  ],
  awards: [
    'LPDP Full Scholarship Awardee \u2014 Indonesia Endowment Fund for Education',
    '1st Place, National 21st Century Learning Innovation Competition (2021)',
  ],
}

export const contact = {
  message: "I'm currently open to roles in learning design, instructional design, L&D, HR-learning, education staff, and related positions across Indonesia. If you're looking for someone who designs with rigour, empathy, and evidence, let's talk.",
  email: 'rahmatsywldn@gmail.com',
  linkedin: 'https://linkedin.com/in/rahmat-syawaludin',
  secondary: [
    { label: 'R\u00e9sum\u00e9', href: 'https://drive.google.com/file/d/1num2E_NvG-rUbmPGooF1DOMQSQTTUdEn/view' },
    { label: 'GitHub', href: 'https://github.com/rahmatsyawaludin' },
  ],
  openTo: ['Learning Designer', 'Instructional Designer', 'L&D Specialist', 'People Development', 'Training Specialist', 'HR Learning', 'Curriculum Designer'],
  phone: '+62 858 8223 4015',
  location: 'Jakarta, Indonesia',
}
