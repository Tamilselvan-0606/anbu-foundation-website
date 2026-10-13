import { Initiative, SuccessStory, NewsItem, GalleryItem, FAQItem } from '../types/index.ts';

export const INSTITUTION_INFO = {
  name: "Anbu Foundation",
  universityName: "Sathyabama Institute of Science and Technology",
  universityAffiliation: "(Deemed to be University)",
  accreditation: "Accredited with 'A++' Grade by NAAC · 12B Status by UGC",
  motto: "Welcome to the Home of Love — Anbu",
  tagline: "Empowering Lives Through Education",
  address: "Directors, Anbu Foundation, Sathyabama Institute of Science and Technology (Deemed to be University), Jeppiaar Nagar, Chennai-119, Tamil Nadu",
  phone: "+91 44 24503200",
  secondaryPhone: "+91 9940058263",
  email: "anbuscholarship@gmail.com",
  universityWebsite: "https://www.sathyabama.ac.in",
  foundationWebsite: "https://www.anbufoundation.in",
  workingHours: "Monday – Saturday: 9:00 AM – 5:00 PM IST",
};

export const INITIATIVES: Initiative[] = [
  {
    id: "anbu-scholarship",
    title: "Anbu Scholarship",
    shortDescription: "Supporting deserving and meritorious students who face financial barriers to higher education.",
    fullDescription: "The Scholarship is offered for children who are meritorious and lacking financial support to continue their education. The foundation is associated with many trusts and peer foundations to offer this scholarship with higher degree of transparency and productivity: Agaram foundation, World vision, Indiavision, Ability foundation, Banyan, NAAM, Maatram and Tamilnadu Blind Association. In addition to this, scholarship is offered for Army students, destitute women children, war-widow children and to the children of drivers in our University. The screening is carried out by a well-structured mechanism that takes into account factors such as Family situation, Board examination performance and an entrance exam conducted by the Foundation.",
    category: "Higher Education Support",
    slug: "/initiatives/anbu-scholarship",
    ctaText: "Explore Scholarship",
    keyPoints: [
      "Full and partial tuition support for undergraduate & postgraduate disciplines",
      "Special consideration for meritorious students with annual household income under ₹2.5 Lakhs",
      "Continuous academic guidance and mentoring throughout the course duration",
      "Support for course materials, books, and laboratory requirements"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "inclusive-education",
    title: "Inclusive Education",
    shortDescription: "Promoting access, participation, and educational opportunities for students from diverse and underserved backgrounds.",
    fullDescription: "Education is the only aspect that is equally significant as Breath for everyone. Education need not be formal; everyday offers many learning laps for us to evolve as a better human being. Any form of education should install the sense of progress. Anbu is blessed with an excellent platform in the form of our University in offering education embedded with inclusiveness. Hundreds of disabled, underprivileged students are offered education every year. Inculcating inclusivity among students is an integrated method of our training at Sathyabama Institute of Science and Technology. Apart from this, we are also associated and have numerous collaborations with many contemporary service organizations, so that the opportunity to help becomes more divergent. Our belief is “Togetherness is the tool for better tomorrow”.",
    category: "Access & Equity",
    slug: "/initiatives/inclusive-education",
    ctaText: "Discover Inclusive Education",
    keyPoints: [
      "Barrier-free campus facilities, ramps, elevators, and sensory support suites",
      "Assistive technology provision including screen readers and audio learning aids",
      "Sensitization workshops for faculty, peers, and administrative staff",
      "Dedicated equal-opportunity facilitation cells on university premises"
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "skill-development",
    title: "Skill Development",
    shortDescription: "“Knowledge transforms into wisdom. Skill transforms into development.” — Preparing an efficient skill pool for society.",
    fullDescription: "“Knowledge transforms into wisdom. Skill transforms into development.” Our country has abundance of talent for this transformation to take place. We should offer enough motivation and assistance; Anbu is dedicated to prepare efficient skill pool for the society. SKILL HELPS TO LIVE.",
    category: "Livelihood & Capacity",
    slug: "/initiatives/skill-development",
    ctaText: "Explore Skill Development",
    keyPoints: [
      "Trained more than 2000 women in ten villages of Kanchipuram district across diverse livelihood trades",
      "Diploma courses in Cosmetology and Professional Tailoring",
      "Women Empowerment Bureau project sanctioned by the National Mission for Empowerment of Women (NMEW)",
      "Foundational motto: “Skill Helps to Live”"
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "joy-of-giving",
    title: "Joy of Giving",
    shortDescription: "“Joy of giving is the Joy of living” — Extending services across food, healthcare, and education to divergent sectors of society.",
    fullDescription: "“Joy of giving is the Joy of living”. The foundation is extending its services to divergent sectors of the society. The prime services are offering food, healthcare and education.",
    category: "Compassionate Outreach",
    slug: "/initiatives/joy-of-giving",
    ctaText: "Discover Our Outreach",
    keyPoints: [
      "Daily lunch for students of Little Hearts Residential School, St. Louis, and Banyan",
      "Periodic food support for orphanages, HIV affected communities, and elderly homes",
      "Weekly fruit and food distribution at Adyar Cancer Institute & pediatric healthcare aid",
      "Educational support for children across partner welfare trusts and relief societies"
    ],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "school-programs",
    title: "School Supporting Programs",
    shortDescription: "Supporting school development through educational resources, improved learning environments, activities, and student development.",
    fullDescription: "Anbu is active in school supporting programs. Some of them are Government schools belong to Nallambakkam, Hastinapuram, Ezhilnagar, Kannaginagar, Karappakkam and Sholinganallur areas in and around Chennai. We support these schools in the establishment of basic amenities, infrastructure pertaining to smart learning besides conducting many literary events, sports and personality development workshops.",
    category: "Grassroots Education",
    slug: "/initiatives/school-supporting-programs",
    ctaText: "Explore School Programs",
    keyPoints: [
      "Modernization of rural government school classrooms and computer labs",
      "Book banks, mobile libraries, and science experiment kits donation",
      "Clean drinking water RO facilities and sanitized sanitation blocks",
      "Student motivation seminars and foundational mathematics/science clinics"
    ],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "rural-development",
    title: "Rural Development",
    shortDescription: "“India lives in its Villages - Mahatma Gandhi” — Empowering villages and sub-urban communities through sustainable grassroots programs.",
    fullDescription: "“India lives in its Villages - Mahatma Gandhi”. The progressive wheels of development possess smooth transit into future, when villages are empowered. Anbu assimilated this fact in its genome and stepped into rural development. Nallambakkam ,Ezhilnagar, Kannaginagar are adopted besides improving the conditions of living in slums of sub-urban areas such as Perumbakkam.",
    category: "Community Transformation",
    slug: "/initiatives/rural-development",
    ctaText: "Learn More",
    keyPoints: [
      "Setting up an organic vegetable farm inside the school premises to help the people of Nallambakkam for their everyday living",
      "Women empowerment programs in 10 villages in Kanchipuram district",
      "My Saturday University – A Unique program to uplift the spirit of learning among students of sub-urban areas in Chennai city"
    ],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
  }
];

export const FOUNDERS_DATA = {
  quote: "Welcome to the Home of Love — Anbu.",
  leadMessage: "At Sathyabama Institute of Science and Technology, education has never been merely about conferring academic degrees; it is about kindling the spark of humanity, empathy, and social stewardship in every individual. Anbu Foundation was born from this deep conviction: that no deserving mind should ever be denied the wings of knowledge simply because of financial hardship.",
  detailedMessage: [
    "From its inception, our university has been anchored in the vision of our respected Founder Chancellor Col. Dr. Jeppiaar, whose life was dedicated to social justice, mass education, and uplifting the underprivileged. He believed that when you educate an individual with compassion, you lift an entire generation out of poverty.",
    "Through Anbu Foundation, we carry forward this sacred responsibility. We are dedicated to ensuring that quality education, state-of-the-art laboratories, supportive mentorship, and dignified opportunities reach children from remote villages, single-parent families, and marginalized sectors.",
    "We invite every student, educator, alumnus, and socially conscious citizen to join hands with Anbu Foundation. When we invest in humanity, our collective future shines with unyielding hope and resilience."
  ],
  founders: [
    {
      name: "Dr. Marie Johnson",
      credentials: "B.E., M.B.A., Ph.D.",
      role: "Chancellor",
      institution: "Sathyabama Institute of Science and Technology",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      description: "Visionary academician and administrator committed to technological innovation, global research excellence, and institutional philanthropy for inclusive societal welfare."
    },
    {
      name: "Dr. Mariazeena Johnson",
      credentials: "B.E., M.B.A., M.Phil., Ph.D.",
      role: "President",
      institution: "Sathyabama Institute of Science and Technology",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
      description: "Eminent educationist and philanthropist championing women empowerment, inclusive education for diverse abilities, and transformative rural youth development."
    }
  ]
};

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    name: "K. Vigneshwaran",
    course: "B.Tech. Computer Science & Engineering",
    batch: "Class of 2024",
    hometown: "Tiruvannamalai District",
    quote: "Coming from a rural agricultural household, a world-class engineering degree seemed unattainable. Anbu Foundation not only paid my full tuition but gave me a family that believed in my dreams.",
    story: "Vigneshwaran was the first in his extended village family to finish secondary school with top marks. When family illness jeopardized his college plans, the Anbu Scholarship committee stepped in with complete financial and residential assistance. He recently graduated with high honors and secured placement as an Associate Cloud Engineer at a tier-1 multinational technology firm.",
    achievement: "Secured placement at global IT leader with distinction",
    avatarPlaceholder: "KV"
  },
  {
    id: "story-2",
    name: "S. Divya Bharathi",
    course: "B.E. Biomedical Engineering",
    batch: "Class of 2023",
    hometown: "Madurai District",
    quote: "The Inclusive Education cell and the Anbu Scholarship eliminated every barrier. They proved to me that physical limitations can never limit a determined mind.",
    story: "Faced with locomotive challenges and high medical expenses, Divya dreamed of developing affordable healthcare instrumentation for rural clinics. Through Anbu Foundation's specialized accessibility support, motorized campus transport, and full scholarship, she completed her biomedical engineering degree and now works in medical diagnostic R&D.",
    achievement: "Leading research technician in medical device innovations",
    avatarPlaceholder: "DB"
  },
  {
    id: "story-3",
    name: "R. Manikandan",
    course: "B.Tech. Mechanical Engineering",
    batch: "Class of 2024",
    hometown: "Kanchipuram District",
    quote: "My mother worked day and night as an artisan. When Anbu Foundation granted me the scholarship, tears filled her eyes. Today, I am proud to support my entire household.",
    story: "Manikandan demonstrated exceptional aptitude for mechanics and automated robotics during school, but financial constraints threatened to cut short his aspirations. Selected under the Anbu Foundation rural talent outreach, he participated in national vehicle design competitions and is now employed in automotive manufacturing.",
    achievement: "National robotics design finalist, automotive design engineer",
    avatarPlaceholder: "RM"
  },
  {
    id: "story-4",
    name: "M. Priyadarshini",
    course: "B.Sc. Visual Communication",
    batch: "Class of 2023",
    hometown: "Cuddalore District",
    quote: "Anbu gave me creative freedom and self-respect. They taught us that giving back to society is the highest achievement in life.",
    story: "Hailing from a coastal hamlet affected by recurring monsoonal distress, Priyadarshini utilized her scholarship to study media, design, and digital communications. Today she directs documentary narratives focused on rural women's Self-Help Groups and educational access across southern Tamil Nadu.",
    achievement: "Documentary maker & social media mentor for community SHGs",
    avatarPlaceholder: "MP"
  }
];

export const IMPACT_HIGHLIGHTS = [
  {
    title: "Deserving Scholars Supported",
    description: "Meritorious students across undergraduate and postgraduate programs enabled through direct institutional tuition assistance.",
    qualitativeTag: "Sustained Academic Fellowship"
  },
  {
    title: "Grassroots Schools Reached",
    description: "Village and semi-urban government schools equipped with science labs, libraries, smart learning tools, and clean water units.",
    qualitativeTag: "Infrastructure & Learning Aids"
  },
  {
    title: "Women in Skill Initiatives",
    description: "Rural women and youth trained in vocational trades, digital fluency, tailoring, and micro-entrepreneurship cooperatives.",
    qualitativeTag: "Self-Reliance & Livelihood"
  },
  {
    title: "Compassionate Health Outreach",
    description: "Regular diagnostic screening camps, eye care sessions, blood donation drives, and vital disaster response interventions.",
    qualitativeTag: "Community Health & Welfare"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Scholarship Award Ceremony",
    category: "Scholarships",
    caption: "Honoring deserving undergraduate scholars during the annual Anbu Foundation scholarship conferment session at Sathyabama campus.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-2",
    title: "Assistive Learning Center",
    category: "Inclusive Education",
    caption: "Students utilizing high-tech assistive audio tools and specialized computers in the university's equal opportunities center.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-3",
    title: "Women Vocational Workshop",
    category: "Skill Development",
    caption: "Hands-on garment designing and artisanal crafts workshop conducted for village self-help groups in Kanchipuram district.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-4",
    title: "Rural Health & Diagnostic Camp",
    category: "Joy of Giving",
    caption: "Medical and dental specialists from Sathyabama Medical College providing free consultations and medicine to rural elders.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-5",
    title: "School Science Lab Modernization",
    category: "School Programs",
    caption: "Equipping young minds in government higher secondary schools with modern physics and chemistry demonstrator kits.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-6",
    title: "Campus Tree Plantation Drive",
    category: "Environment & Rural Welfare",
    caption: "Foundation volunteers and university scholars planting indigenous saplings to champion green sustainability.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    date: "October 2024",
    category: "Scholarship Announcement",
    title: "Anbu Scholarship Applications Open for Upcoming Academic Cycle",
    summary: "Deserving candidates seeking admission to undergraduate engineering, science, and humanities programs may submit applications along with necessary certificates.",
    fullText: "Sathyabama Institute of Science and Technology invites applications for the prestigious Anbu Scholarship scheme. The program extends tuition fee waivers and academic mentoring to economically disadvantaged, first-generation, and differently-abled students. Eligible candidates are advised to verify criteria and submit authentic income and mark sheet verifications through the official foundation portal.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-2",
    date: "September 2024",
    category: "Community Outreach",
    title: "Comprehensive Health & Eye Care Camp Conducted in Rural Chengalpattu",
    summary: "Over 450 rural residents benefited from free medical screenings, specialized ophthalmology checkups, and prescription spectacles distribution.",
    fullText: "As part of the 'Joy of Giving' initiative, Anbu Foundation organized a multi-specialty medical health camp in Chengalpattu district. Doctors from Sathyabama Medical College and Hospital conducted cardiovascular screenings, blood sugar evaluations, and pediatric checks. Over 180 free corrective spectacles were distributed to senior citizens and students.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-3",
    date: "August 2024",
    category: "Inclusive Learning",
    title: "Assistive Technology Lab Upgraded for Differently-Abled Scholars",
    summary: "New screen-reading workstations, refreshable braille displays, and ergonomic assistive seating installed on the university campus.",
    fullText: "Reaffirming its commitment to equitable access, the foundation completed the modernization of the university's central assistive tech laboratory. The facility offers speech-to-text software, specialized tactile materials, and assistive keyboards to support students pursuing higher degrees without technological impediments.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  }
];

export const SCHOLARSHIP_CRITERIA = {
  generalEligibility: [
    "Must have secured 80% or above in both the 10th Standard (SSLC) and 12th Standard (HSC/Equivalent) examinations.",
    "Must have completed schooling in a Government or Government-Aided School.",
    "Preference will be given to students from economically weaker sections with a genuine need for financial assistance.",
    "Annual family income should be within the limit prescribed by the Foundation (supporting income certificate may be required).",
    "The applicant should demonstrate good moral character, discipline, and commitment to academic excellence.",
    "Preference may be given to first-generation learners pursuing higher education.",
    "Orphaned students, children of single parents, or students from socially disadvantaged backgrounds may receive special consideration, subject to verification.",
    "Applicants must submit all required documents, including academic records, Income certificate, community certificate (if applicable), and any other documents specified by the Foundation.",
    "The scholarship is awarded based on merit-cum-means, subject to verification of documents and approval by the Scholarship Selection Committee.",
    "Recipients are expected to maintain satisfactory academic performance, good conduct, and regular attendance throughout the duration of the scholarship.",
    "The decision of the ANBU Scholarship Committee regarding selection and continuation of the scholarship shall be final."
  ],
  requiredDocuments: [
    "Recent passport-size photograph of the student",
    "Self-attested mark sheets of Class 10th and Class 12th (or Diploma / Degree for PG applicants)",
    "Official Income Certificate issued by Revenue Authority (Tahsildar / Village Administrative Officer) within the current financial year",
    "Community / Caste Certificate (if applicable)",
    "First-Generation Graduate Certificate issued by competent government authority (if claiming concession)",
    "Disability Certificate issued by Medical Board (for differently-abled applicants)",
    "Bonafide Student Certificate / Admission Confirmation receipt from Sathyabama Institute of Science and Technology",
    "Aadhaar Card copy of student and parent/guardian"
  ],
  selectionProcess: [
    {
      step: "01",
      title: "Online / Physical Application Submission",
      description: "Complete the verified Anbu Scholarship application form with authentic demographic, academic, and economic documentation."
    },
    {
      step: "02",
      title: "Document Verification & Scrutiny",
      description: "The scholarship advisory committee verifies income credentials, mark sheets, and special category certificates."
    },
    {
      step: "03",
      title: "Personal / Family Interaction",
      description: "Shortlisted candidates and guardians participate in a supportive counseling and verification dialogue with foundation trustees."
    },
    {
      step: "04",
      title: "Award & Mentorship Onboarding",
      description: "Sanction letters are issued, tuition assistance is credited, and an academic mentor is assigned for lifelong progress tracking."
    }
  ]
};

export const FAQS: FAQItem[] = [
  {
    category: "about",
    question: "1. What is Anbu Foundation?",
    answer: "Anbu Foundation is a social welfare initiative dedicated to creating positive change in society through community development, education, healthcare awareness, and various social service activities."
  },
  {
    category: "activities",
    question: "2. What are the main activities of Anbu Foundation?",
    answer: "Anbu Foundation conducts various initiatives, including educational support, community outreach programs, awareness campaigns, social welfare activities, and volunteering opportunities."
  },
  {
    category: "volunteering",
    question: "3. How can I volunteer with Anbu Foundation?",
    answer: "Students and individuals who are interested in contributing to social welfare can participate in foundation activities by registering through the website or contacting the foundation team."
  },
  {
    category: "participation",
    question: "4. Who can participate in Anbu Foundation activities?",
    answer: "Students, faculty members, volunteers, and individuals who are passionate about community service and social development can participate in eligible foundation programs."
  },
  {
    category: "registration",
    question: "5. How can I register for events and programs conducted by Anbu Foundation?",
    answer: "You can explore the events and programs listed on the Anbu Foundation website and follow the provided registration instructions or contact the foundation team for further details."
  }
];
