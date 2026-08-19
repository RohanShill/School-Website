export type NoticeCategory = 'Academics' | 'Events' | 'Examinations' | 'Administrative';

export type NoticeItem = {
  id: number;
  title: string;
  category: NoticeCategory;
  date: string;
  description: string;
  pdfUrl: string;
};

export type StatItem = {
  label: string;
  value: string;
  suffix?: string;
};

export type FacilityItem = {
  title: string;
  description: string;
  image: string;
  accent: string;
};

export type AcademicWing = {
  title: string;
  ageGroup: string;
  focus: string;
  description: string;
};

export type Stream = {
  name: string;
  description: string;
};

export type FacultyMember = {
  name: string;
  nameHindi: string;
  role: string;
  roleHindi: string;
  qualification: string;
  qualificationHindi: string;
  subject: string;
  subjectHindi: string;
  experience: string;
  experienceHindi: string;
  image: string;
  bio: string;
  bioHindi: string;
};

export type MealDay = {
  day: string;
  dayHindi: string;
  menu: string;
  category: string;
};

export type BalSansadRole = {
  title: string;
  titleHindi: string;
  responsibilities: string;
};

export type WelfareScheme = {
  title: string;
  description: string;
};

export type ICTCurriculum = {
  classLevel: string;
  topics: string;
};

export const schoolData = {
  school: {
    name: 'PM SHRI Middle School Hiranpur (Boys)',
    nameHindi: 'पीएम श्री मध्य विद्यालय हिरणपुर (बालक)',
    shortName: 'PM SHRI MS Hiranpur (Boys)',
    tagline: 'Excellence in Education',
    category: 'राजकीय उत्क्रमित मध्य विद्यालय (कक्षा 1 से 8)',
    department: 'स्कूली शिक्षा एवं साक्षरता विभाग, झारखंड सरकार (DoSEL, Govt. of Jharkhand)',
    curriculum: 'JCERT (झारखंड शैक्षिक अनुसंधान एवं प्रशिक्षण परिषद) एवं NEP 2020',
    udiseCode: '20120104801',
    medium: 'हिंदी माध्यम (Hindi Medium) — अंग्रेजी भाषा संवर्धन सहित',
    flagshipScheme: 'PM SHRI (Prime Minister Schools for Rising India)',
    schoolType: 'बालक / सह-शिक्षा प्राथमिक व उच्च प्राथमिक विद्यालय',
    email: 'pmshri.mshiranpur.boys@gmail.com',
    phone: '+91 XXXXXXXXXX',
    address: 'मुख्य मार्ग, हिरणपुर, प्रखंड: हिरणपुर, जिला: पाकुड़, झारखंड — 816104',
    addressEnglish: 'Main Road, Hiranpur, Block: Hiranpur, District: Pakur, Jharkhand — 816104',
    established: '1912',
    principal: 'Mr. Vijay Kumar Singh',
    affiliation: 'झारखंड सरकार द्वारा मान्यता प्राप्त एवं संचालित',
    schoolHours: 'Monday to Saturday — 9:00 AM to 3:30 PM',
    summerHours: 'Monday to Saturday — 6:30 AM to 11:30 AM',
    timings: {
      regular: 'सोमवार से शनिवार — प्रातः 09:00 बजे से अपराह्न 03:30 बजे तक',
      regularEnglish: 'Monday to Saturday — 9:00 AM to 3:30 PM',
      summer: 'सोमवार से शनिवार — प्रातः 06:30 बजे से पूर्वाह्न 11:30 बजे तक',
      summerEnglish: 'Monday to Saturday — 6:30 AM to 11:30 AM',
      holiday: 'रविवार: साप्ताहिक अवकाश (Sunday: Weekly Holiday)',
    },
  },

  stats: [
    { label: 'Total Students', value: '1,034', suffix: '+' },
    { label: 'Qualified Teachers', value: '12', suffix: '' },
    { label: 'ICT & Science Lab', value: '2', suffix: ' Labs' },
    { label: 'Library Books', value: '1,500', suffix: '+' },
  ] as StatItem[],

  notices: [
    {
      id: 1,
      title: 'सत्र 2026-27 नामांकन सूचना',
      category: 'Academics' as NoticeCategory,
      date: 'Session 2026-27',
      description: 'कक्षा 1 से 8 में सभी वर्गों के लिए शत-प्रतिशत निःशुल्क नवीन नामांकन प्रारंभ। Admission open for Classes 1 to 8 — completely free for all categories.',
      pdfUrl: '#',
    },
    {
      id: 2,
      title: 'ICT Assessment Exam — Classes 6, 7 & 8',
      category: 'Examinations' as NoticeCategory,
      date: 'Announced Soon',
      description: 'कक्षा 6, 7 एवं 8 के छात्रों के लिए द्वितीय त्रैमासिक कंप्यूटर प्रायोगिक परीक्षा सूचना। Second quarterly computer practical exam notification.',
      pdfUrl: '#',
    },
    {
      id: 3,
      title: 'विद्यालय प्रबंधन समिति (SMC) बैठक',
      category: 'Administrative' as NoticeCategory,
      date: 'Monthly',
      description: 'विद्यालय विकास योजना एवं शैक्षणिक गुणवत्ता पर मासिक बैठक। Monthly meeting on school development plan and academic quality.',
      pdfUrl: '#',
    },
    {
      id: 4,
      title: 'DBT आधार सीडिंग सूचना',
      category: 'Administrative' as NoticeCategory,
      date: 'Ongoing',
      description: 'छात्रवृत्ति एवं पोशाक राशि प्राप्ति हेतु बैंक खाते से आधार लिंक कराने संबंधी सूचना। Link Aadhaar with bank account for scholarship and uniform allowance.',
      pdfUrl: '#',
    },
  ] as NoticeItem[],

  facilities: [
    {
      title: 'मुख्य भवन एवं हरित परिसर',
      description: 'PM SHRI हरित विद्यालय मानक — सुरक्षित पक्की चारदीवारी, BaLA पेंटिंग्स, और पर्यावरण-अनुकूल खुला मैदान। A green campus with safe boundary walls, BaLA paintings, and eco-friendly open grounds.',
      image: '/images/school-building.jpg',
      accent: 'bg-emerald-100 text-emerald-700',
    },
    {
      title: 'स्मार्ट क्लासरूम',
      description: 'डिजिटल ऑडियो-विजुअल लर्निंग, हवादार कमरे, छात्र अनुकूल डेस्क-बेंच व्यवस्था। Digital audio-visual learning with ventilated rooms and student-friendly furniture.',
      image: '/images/classroom.jpg',
      accent: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'ICT कंप्यूटर एवं विज्ञान लैब',
      description: '10+ कंप्यूटर वर्कस्टेशन, माइक्रोस्कोप, और बेसिक भौतिकी/रसायन/जीव विज्ञान एक्टिविटी किट्स। Computer workstations with science activity kits for hands-on learning.',
      image: '/images/lab.jpg',
      accent: 'bg-amber-100 text-amber-700',
    },
    {
      title: 'विद्यालय पुस्तकालय',
      description: "'पढ़े भारत बढ़े भारत' कॉर्नर, 1500+ हिंदी कहानियां, जीवनी, विज्ञान कॉमिक्स व शब्दकोश। Library with 1500+ books including stories, biographies, science comics, and dictionaries.",
      image: '/images/library.jpg',
      accent: 'bg-indigo-100 text-indigo-700',
    },
    {
      title: 'खेलकूद मैदान',
      description: 'फुटबॉल, वॉलीबॉल, खो-खो, कबड्डी, बैडमिंटन, कैरम, शतरंज एवं दैनिक योग सत्र। Sports ground for football, volleyball, kho-kho, kabaddi, badminton, and daily yoga sessions.',
      image: '/images/school-building.jpg',
      accent: 'bg-orange-100 text-orange-700',
    },
    {
      title: 'स्वच्छता एवं पेयजल',
      description: 'रनिंग वाटर युक्त शौचालय, ग्रुप हैंडवॉश स्टेशन एवं वाटर प्यूरीफायर। Running water toilets, group handwash stations, and water purifiers for clean drinking water.',
      image: '/images/school-building.jpg',
      accent: 'bg-cyan-100 text-cyan-700',
    },
  ] as FacilityItem[],

  academicWings: [
    {
      title: 'प्राथमिक विंग (Primary Wing)',
      ageGroup: 'कक्षा 1 से 5 (Classes I–V)',
      focus: 'निपुण भारत — बुनियादी साक्षरता एवं संख्याज्ञान (NIPUN Bharat / FLN)',
      description: 'खेल-आधारित एवं गतिविधि-आधारित शिक्षा (Activity-Based Learning)। मातृभाषा हिंदी में प्रारंभिक भाषा व गणितीय दक्षता। Play-based and activity-based foundational learning in Hindi medium.',
    },
    {
      title: 'उच्च प्राथमिक विंग (Upper Primary Wing)',
      ageGroup: 'कक्षा 6 से 8 (Classes VI–VIII)',
      focus: 'विषयवार विशेषज्ञता एवं ICT प्रशिक्षण',
      description: 'हिंदी, अंग्रेजी, गणित, विज्ञान, सामाजिक विज्ञान एवं संस्कृत। अनिवार्य ICT कंप्यूटर प्रैक्टिकल, विज्ञान प्रयोगशाला प्रयोग एवं प्रोजेक्ट आधारित शिक्षण। Subject-wise specialization with mandatory computer practicals and lab experiments.',
    },
  ] as AcademicWing[],

  streams: [
    {
      name: 'Primary Education (प्राथमिक शिक्षा)',
      description: 'NIPUN Bharat aligned foundational literacy and numeracy, activity-based learning in Hindi medium with English language enrichment for Classes 1–5.',
    },
    {
      name: 'Upper Primary Curriculum (उच्च प्राथमिक पाठ्यक्रम)',
      description: 'Structured teaching in Hindi, English, Mathematics, Science, Social Science, and Sanskrit with mandatory ICT practicals and project-based assessments for Classes 6–8.',
    },
  ] as Stream[],

  faculty: [
    {
      name: 'Mr. Rohan Shill',
      nameHindi: 'श्री रोहन शील',
      role: 'ICT Instructor / School Coordinator',
      roleHindi: 'ICT अनुदेशक एवं विद्यालय समन्वयक',
      qualification: 'Graduate (B.Tech)',
      qualificationHindi: 'स्नातक (B.Tech)',
      subject: 'ICT, Computer Education & Smart Lab',
      subjectHindi: 'कंप्यूटर शिक्षा एवं स्मार्ट लैब',
      experience: 'School Coordinator',
      experienceHindi: 'विद्यालय समन्वयक',
      image: '/images/logo.png',
      bio: 'Coordinates smart classroom operations, ICT computer practicals, and digital school administration.',
      bioHindi: 'स्मार्ट क्लास संचालन, आईसीटी कंप्यूटर लैब और डिजिटल प्रशासनिक कार्यों का समन्वय करते हैं।',
    },
    {
      name: 'Mrs. Doly Das Shill',
      nameHindi: 'श्रीमती डॉली दास शील',
      role: 'Teacher (Regular)',
      roleHindi: 'नियमित शिक्षिका (Regular Teacher)',
      qualification: 'Post Graduate (M.A.)',
      qualificationHindi: 'स्नातकोत्तर (M.A.)',
      subject: 'Language & Social Studies',
      subjectHindi: 'भाषा एवं सामाजिक विज्ञान',
      experience: 'Senior Regular Teacher',
      experienceHindi: 'वरिष्ठ नियमित शिक्षिका',
      image: '/images/logo.png',
      bio: 'Dedicated regular faculty guiding upper primary students with advanced curriculum pedagogy.',
      bioHindi: 'उच्च प्राथमिक छात्रों को उत्कृष्ट शिक्षण और नैतिक मूल्यों का मार्गदर्शन देती हैं।',
    },
    {
      name: 'Mrs. Elizabeth Kerketta',
      nameHindi: 'श्रीमती एलिजाबेथ केरकेट्टा',
      role: 'Teacher (Regular)',
      roleHindi: 'नियमित शिक्षिका (Trained Teacher)',
      qualification: 'Graduate (B.A.), 2-Yr Teachers’ Training',
      qualificationHindi: 'स्नातक (B.A.), द्विवर्षीय शिक्षक प्रशिक्षण',
      subject: 'General Pedagogy & Primary Education',
      subjectHindi: 'प्राथमिक शिक्षण एवं बाल विकास',
      experience: 'Trained Educator',
      experienceHindi: 'प्रशिक्षित शिक्षिका',
      image: '/images/logo.png',
      bio: 'Expert in certified primary teacher pedagogy, foundational learning, and classroom activities.',
      bioHindi: 'प्राथमिक कक्षा शिक्षण, बुनियादी साक्षरता और बाल केंद्रित गतिविधियों में निपुण।',
    },
    {
      name: 'Mr. Sahir Ali',
      nameHindi: 'श्री साहिर अली',
      role: 'Teacher (Regular)',
      roleHindi: 'नियमित शिक्षक (Regular Teacher - Science)',
      qualification: 'Graduate (B.Sc.)',
      qualificationHindi: 'स्नातक (B.Sc.)',
      subject: 'Science & Mathematics',
      subjectHindi: 'विज्ञान एवं गणित',
      experience: 'Regular Faculty',
      experienceHindi: 'नियमित शिक्षक',
      image: '/images/logo.png',
      bio: 'Teaches science and arithmetic concepts with hands-on learning and practical experimentation.',
      bioHindi: 'छात्रों को विज्ञान प्रयोगों एवं गणितीय गणनाओं को सरल व रुचिकर तरीके से सिखाते हैं।',
    },
    {
      name: 'Mr. Amir Ali',
      nameHindi: 'श्री आमिर अली',
      role: 'Para Teacher',
      roleHindi: 'सहायक अध्यापक (Para Teacher)',
      qualification: 'Graduate (B.Sc.)',
      qualificationHindi: 'स्नातक (B.Sc.)',
      subject: 'Science & Mathematics Support',
      subjectHindi: 'विज्ञान एवं गणित शिक्षण',
      experience: 'Dedicated Educator',
      experienceHindi: 'समर्पित शिक्षक',
      image: '/images/logo.png',
      bio: 'Provides academic support in science subjects and encourages student curiosity and logic.',
      bioHindi: 'विज्ञान एवं गणित विषयों में विद्यार्थियों को विशेष शैक्षणिक सहायता प्रदान करते हैं।',
    },
    {
      name: 'Mrs. Punam Rani',
      nameHindi: 'श्रीमती पूनम रानी',
      role: 'Teacher (Contract)',
      roleHindi: 'अनुबंधित शिक्षिका (Contract Teacher)',
      qualification: 'Graduate (B.A.)',
      qualificationHindi: 'स्नातक (B.A.)',
      subject: 'Social Science & Language',
      subjectHindi: 'सामाजिक विज्ञान एवं भाषा',
      experience: 'Contract Faculty',
      experienceHindi: 'अनुबंधित शिक्षिका',
      image: '/images/logo.png',
      bio: 'Guides elementary classes with structured lesson plans and joyful learning activities.',
      bioHindi: 'प्रारंभिक कक्षाओं के छात्रों को रोचक पाठ्य-योजनाओं और गतिविधियों द्वारा पढ़ाती हैं।',
    },
    {
      name: 'Mrs. Bina Kumari',
      nameHindi: 'श्रीमती बीना कुमारी',
      role: 'Para Teacher',
      roleHindi: 'सहायक अध्यापिका (Para Teacher)',
      qualification: 'Graduate (B.A.)',
      qualificationHindi: 'स्नातक (B.A.)',
      subject: 'Language & Foundational Learning',
      subjectHindi: 'भाषा एवं बुनियादी शिक्षा',
      experience: 'Dedicated Faculty',
      experienceHindi: 'समर्पित शिक्षिका',
      image: '/images/logo.png',
      bio: 'Nurtures reading, writing, and moral education for primary and middle school students.',
      bioHindi: 'प्राथमिक स्तर के बच्चों में पठन-पाठन और सुलेख कौशल का विकास करती हैं।',
    },
    {
      name: 'Mrs. Munni Devi',
      nameHindi: 'श्रीमती मुन्नी देवी',
      role: 'Para Teacher',
      roleHindi: 'सहायक अध्यापिका (Para Teacher)',
      qualification: 'Graduate (B.A.)',
      qualificationHindi: 'स्नातक (B.A.)',
      subject: 'Primary Education & Activity Learning',
      subjectHindi: 'प्राथमिक शिक्षा एवं गतिविधियां',
      experience: 'Experienced Educator',
      experienceHindi: 'अनुभवी शिक्षिका',
      image: '/images/logo.png',
      bio: 'Specializes in primary grade classroom engagement and child-friendly teaching methodologies.',
      bioHindi: 'खेल-खेल में शिक्षा और बाल-सुलभ शिक्षण पद्धति के माध्यम से बच्चों को प्रेरित करती हैं।',
    },
    {
      name: 'Mrs. Rema Shill',
      nameHindi: 'श्रीमती रीमा शील',
      role: 'Para Teacher',
      roleHindi: 'सहायक अध्यापिका (Para Teacher)',
      qualification: 'Graduate (B.A.)',
      qualificationHindi: 'स्नातक (B.A.)',
      subject: 'Hindi, Environmental Studies & Arts',
      subjectHindi: 'हिंदी, पर्यावरण अध्ययन एवं कला',
      experience: 'Dedicated Educator',
      experienceHindi: 'समर्पित शिक्षिका',
      image: '/images/logo.png',
      bio: 'Encourages creative arts, environmental consciousness, and daily student attendance.',
      bioHindi: 'कला, पर्यावरण जागरूकता और नियमित उपस्थिति के प्रति बच्चों को जागरूक करती हैं।',
    },
    {
      name: 'Mrs. Rinku Kumari',
      nameHindi: 'श्रीमती रिंकू कुमारी',
      role: 'Para Teacher',
      roleHindi: 'सहायक अध्यापिका (Para Teacher)',
      qualification: 'Graduate (B.A.)',
      qualificationHindi: 'स्नातक (B.A.)',
      subject: 'Foundational Literacy & Numeracy (FLN)',
      subjectHindi: 'बुनियादी साक्षरता व संख्या ज्ञान (FLN)',
      experience: 'Dedicated Educator',
      experienceHindi: 'समर्पित शिक्षिका',
      image: '/images/logo.png',
      bio: 'Focuses on FLN benchmarks under NIPUN Bharat and student wellbeing.',
      bioHindi: 'निपुण भारत मिशन के तहत बुनियादी भाषा और गणितीय दक्षताओं को मजबूत बनाती हैं।',
    },
    {
      name: 'Mrs. Sumita Kumari',
      nameHindi: 'श्रीमती सुमिता कुमारी',
      role: 'Para Teacher',
      roleHindi: 'सहायक अध्यापिका (Para Teacher)',
      qualification: 'Graduate (B.A.)',
      qualificationHindi: 'स्नातक (B.A.)',
      subject: 'Early Childhood Care & Primary Support',
      subjectHindi: 'प्रारंभिक बाल देखभाल एवं प्राथमिक शिक्षण',
      experience: 'Dedicated Educator',
      experienceHindi: 'समर्पित शिक्षिका',
      image: '/images/logo.png',
      bio: 'Engages early learners with rhymes, stories, and caring classroom mentorship.',
      bioHindi: 'छोटे बच्चों को कहानियों और कविताओं के माध्यम से विद्यालयी वातावरण में सहज करती हैं।',
    },
    {
      name: 'Mrs. Sushma Chand',
      nameHindi: 'श्रीमती सुषमा चंद',
      role: 'Para Teacher',
      roleHindi: 'सहायक अध्यापिका (Para Teacher)',
      qualification: 'Graduate (B.A.)',
      qualificationHindi: 'स्नातक (B.A.)',
      subject: 'General Studies & Cultural Activities',
      subjectHindi: 'सामान्य ज्ञान एवं सांस्कृतिक गतिविधियां',
      experience: 'Dedicated Educator',
      experienceHindi: 'समर्पित शिक्षिका',
      image: '/images/logo.png',
      bio: 'Coordinates morning assembly cultural programs, discipline, and remedial learning sessions.',
      bioHindi: 'प्रातःकालीन सभा, सांस्कृतिक कार्यक्रमों और छात्रों के अनुशासन का प्रबंधन करती हैं।',
    },
  ] as FacultyMember[],

  pmPoshanMenu: [
    { day: 'Monday', dayHindi: 'सोमवार', menu: 'चावल, दाल, हरी ताजी सब्जी एवं उबला अंडा / मौसमी फल', category: 'प्रोटीन एवं विटामिन' },
    { day: 'Tuesday', dayHindi: 'मंगलवार', menu: 'चावल, चना दाल एवं मौसमी हरी सब्जी', category: 'फाइबर एवं मिनरल्स' },
    { day: 'Wednesday', dayHindi: 'बुधवार', menu: 'पौष्टिक वेज खिचड़ी (हरी सब्जी व सोयाबीन बड़ी युक्त) एवं आलू चोखा', category: 'संतुलित कार्बोहाइड्रेट' },
    { day: 'Thursday', dayHindi: 'गुरुवार', menu: 'चावल, दाल एवं मौसमी हरी सब्जी', category: 'दैनिक संतुलित आहार' },
    { day: 'Friday', dayHindi: 'शुक्रवार', menu: 'चावल, दाल, हरी सब्जी एवं उबला अंडा / मौसमी फल', category: 'प्रोटीन एवं ऊर्जा' },
    { day: 'Saturday', dayHindi: 'शनिवार', menu: 'खिचड़ी (सब्जी युक्त), चोखा एवं आचार', category: 'सुपाच्य पौष्टिक आहार' },
  ] as MealDay[],

  ictCurriculum: [
    { classLevel: 'कक्षा 6 (Class 6)', topics: 'कंप्यूटर के मूल सिद्धांत, हार्डवेयर घटक, ऑपरेटिंग सिस्टम नेविगेशन, MS Paint एवं बेसिक टाइपिंग। Fundamentals of computers, hardware components, OS navigation, MS Paint & basic typing.' },
    { classLevel: 'कक्षा 7 (Class 7)', topics: 'वर्ड प्रोसेसिंग (दस्तावेज़ निर्माण, फॉर्मेटिंग), हिंदी टाइपिंग (यूनिकोड/कुर्तिदेव), सुरक्षित इंटरनेट सर्च। Word processing, Hindi typing (Unicode/Kruti Dev), safe internet browsing.' },
    { classLevel: 'कक्षा 8 (Class 8)', topics: 'स्प्रेडशीट बेसिक्स (डेटा एंट्री, बुनियादी फॉर्मूले), डिजिटल प्रेजेंटेशन, साइबर सुरक्षा व ई-मेल शिष्टाचार। Spreadsheet basics, digital presentations, cyber security & email etiquette.' },
  ] as ICTCurriculum[],

  balSansad: [
    { title: 'Prime Minister (प्रधानमंत्री)', titleHindi: 'प्रधानमंत्री', responsibilities: 'संपूर्ण विद्यालय अनुशासन, चेतना सत्र (प्रार्थना सभा) संचालन एवं छात्र समन्वय। Overall school discipline, morning assembly management, and student coordination.' },
    { title: 'Education Minister (शिक्षा मंत्री)', titleHindi: 'शिक्षा मंत्री', responsibilities: 'कक्षा पठन-पाठन, नियमित उपस्थिति निगरानी, पुस्तकालय पुस्तक वितरण सहयोग। Classroom learning support, attendance monitoring, and library book distribution.' },
    { title: 'Health Minister (स्वास्थ्य मंत्री)', titleHindi: 'स्वास्थ्य एवं स्वच्छता मंत्री', responsibilities: 'MDM से पूर्व हैंडवॉश निगरानी, व्यक्तिगत स्वच्छता जांच, प्राथमिक चिकित्सा किट देखरेख। Pre-meal handwash supervision, personal hygiene checks, and first-aid kit maintenance.' },
    { title: 'Eco & Water Minister (जल एवं पर्यावरण मंत्री)', titleHindi: 'जल एवं पर्यावरण मंत्री', responsibilities: 'पेयजल स्वच्छता, विद्यालय वाटिका (Herbal Garden), पौधरोपण एवं जल संरक्षण। Drinking water cleanliness, school garden, tree planting, and water conservation.' },
    { title: 'Sports & Culture Minister (खेल एवं संस्कृति मंत्री)', titleHindi: 'खेल एवं संस्कृति मंत्री', responsibilities: 'खेल सामग्री वितरण, खेलकूद प्रतियोगिताएं, राष्ट्रगान एवं सांस्कृतिक कार्यक्रम। Sports equipment distribution, competitions, national anthem, and cultural programs.' },
  ] as BalSansadRole[],

  welfareSchemes: [
    { title: 'निःशुल्क पाठ्यपुस्तकें (Free Textbooks)', description: 'सत्र प्रारंभ होते ही कक्षा 1 से 8 के सभी छात्रों को JCERT अनुमोदित पुस्तकें एवं कार्यपुस्तिकाएं। JCERT-approved textbooks and workbooks distributed to all students at session start.' },
    { title: 'निःशुल्क स्कूल पोशाक (Free Uniforms)', description: 'वार्षिक 2 सेट स्कूल ड्रेस, जूता-मोजा एवं स्वेटर हेतु राशि/यूनिफॉर्म का वितरण। Annual 2 sets of school dress, shoes-socks, and sweater allowance distribution.' },
    { title: 'ई-कल्याण छात्रवृत्ति (e-Kalyan Pre-Matric Scholarship)', description: 'पात्र SC, ST, OBC एवं अल्पसंख्यक छात्रों को डायरेक्ट बैंक ट्रांसफर (DBT)। Direct bank transfer scholarship for eligible SC, ST, OBC, and minority students.' },
    { title: 'स्वास्थ्य परीक्षण (RBSK Scheme)', description: 'राष्ट्रीय बाल स्वास्थ्य कार्यक्रम दल द्वारा नियमित नेत्र, दंत व सामान्य स्वास्थ्य जांच। Regular eye, dental, and general health checkups by RBSK team.' },
    { title: 'पूरक पोषण (IFA & Deworming)', description: 'साप्ताहिक आयरन-फॉलिक एसिड (IFA) गोलियां एवं राष्ट्रीय कृमि मुक्ति दिवस पर एल्बेंडाजोल खुराक। Weekly IFA tablets and Albendazole doses on National Deworming Day.' },
  ] as WelfareScheme[],

  feeStructure: [
    { grade: 'कक्षा 1–5 (Class I–V)', tuition: 'निःशुल्क (Free)', lab: 'N/A', total: 'सरकारी विद्यालय — कोई शुल्क नहीं (Government School — No Fee)' },
    { grade: 'कक्षा 6–8 (Class VI–VIII)', tuition: 'निःशुल्क (Free)', lab: 'N/A', total: 'सरकारी विद्यालय — कोई शुल्क नहीं (Government School — No Fee)' },
  ],

  contact: {
    phone: '+91 XXXXXXXXXX',
    phoneAlt: '',
    email: 'pmshri.mshiranpur.boys@gmail.com',
    officeEmail: 'pmshri.mshiranpur.boys@gmail.com',
    address: 'मुख्य मार्ग, हिरणपुर, प्रखंड: हिरणपुर, जिला: पाकुड़, झारखंड — 816104',
    addressEnglish: 'Main Road, Hiranpur, Block: Hiranpur, District: Pakur, Jharkhand — 816104',
    hours: 'Mon–Sat: 9:00 AM – 3:30 PM (Winter) | 6:30 AM – 11:30 AM (Summer)',
  },
};
