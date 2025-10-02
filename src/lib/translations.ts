export type Language = 'en' | 'hi' | 'te' | 'ta';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    completeGuide: string;
    quiz: string;
    dbtStatus: string;
    helpline: string;
    appName: string;
  };
  // Hero Section
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    takeQuiz: string;
    checkStatus: string;
  };
  // Common
  common: {
    checkEligibility: string;
    startQuiz: string;
    videoTutorials: string;
    backToLearning: string;
    learnMore: string;
    download: string;
    submit: string;
    next: string;
    previous: string;
  };
  // Comparison Section
  comparison: {
    title: string;
    subtitle: string;
    normalAccount: string;
    dbtAccount: string;
    normalFeature1: string;
    normalFeature2: string;
    normalFeature3: string;
    normalFeature4: string;
    dbtFeature1: string;
    dbtFeature2: string;
    dbtFeature3: string;
    dbtFeature4: string;
  };
  // Scholarships
  scholarships: {
    title: string;
    subtitle: string;
    schoolStudents: string;
    collegeStudents: string;
    researchStudents: string;
    schoolEligibility: string;
    collegeEligibility: string;
    researchEligibility: string;
  };
  // Benefits
  benefits: {
    title: string;
    subtitle: string;
    scholarships: string;
    scholarshipsDesc: string;
    lpgSubsidies: string;
    lpgSubsidiesDesc: string;
    mgnrega: string;
    mgnregaDesc: string;
    pensions: string;
    pensionsDesc: string;
  };
  // Guide
  guide: {
    title: string;
    subtitle: string;
    bankBranch: string;
    onlineBanking: string;
    mobileBanking: string;
    viewCompleteGuide: string;
  };
  // Success Stories
  successStories: {
    title: string;
    subtitle: string;
  };
  // CTA
  cta: {
    title: string;
    subtitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      completeGuide: "Complete Guide",
      quiz: "Quiz",
      dbtStatus: "DBT Status",
      helpline: "Helpline",
      appName: "Aadhaar Awareness"
    },
    hero: {
      title: "Unlock Your",
      titleHighlight: "Government Benefits",
      subtitle: "Learn the difference between Aadhaar-linked and DBT-enabled accounts. Get direct access to scholarships, subsidies, and more!",
      takeQuiz: "Take the Quiz",
      checkStatus: "Check DBT Status"
    },
    common: {
      checkEligibility: "Check Eligibility",
      startQuiz: "Start Quiz",
      videoTutorials: "Video Tutorials",
      backToLearning: "Back to Learning Center",
      learnMore: "Learn More",
      download: "Download",
      submit: "Submit",
      next: "Next",
      previous: "Previous"
    },
    comparison: {
      title: "Normal vs DBT-Enabled Accounts",
      subtitle: "Understanding the key differences",
      normalAccount: "Normal Aadhaar-Linked Account",
      dbtAccount: "DBT-Enabled Account",
      normalFeature1: "Just identity verification",
      normalFeature2: "Manual benefit processing",
      normalFeature3: "Longer waiting times",
      normalFeature4: "Risk of intermediaries",
      dbtFeature1: "Direct benefit transfers",
      dbtFeature2: "Instant processing",
      dbtFeature3: "No middleman involved",
      dbtFeature4: "Complete transparency"
    },
    scholarships: {
      title: "Available Scholarships Through DBT",
      subtitle: "Find scholarships matching your profile",
      schoolStudents: "School Students",
      collegeStudents: "College Students",
      researchStudents: "Research Students",
      schoolEligibility: "Class 9-12 students with good academic record",
      collegeEligibility: "Undergraduate and postgraduate students",
      researchEligibility: "PhD and research scholars with NET/GATE"
    },
    benefits: {
      title: "All Benefits You Can Receive Through DBT",
      subtitle: "Complete list of government schemes and subsidies",
      scholarships: "Scholarships",
      scholarshipsDesc: "Educational support directly to your account",
      lpgSubsidies: "LPG Subsidies",
      lpgSubsidiesDesc: "Cooking gas subsidies automatically credited",
      mgnrega: "MGNREGA",
      mgnregaDesc: "Employment guarantee scheme payments",
      pensions: "Pensions",
      pensionsDesc: "Social security and pension benefits"
    },
    guide: {
      title: "Quick Guide: Enable DBT in 3 Easy Ways",
      subtitle: "Choose the method that works best for you",
      bankBranch: "Visit Bank Branch",
      onlineBanking: "Online Banking",
      mobileBanking: "Mobile Banking",
      viewCompleteGuide: "View Complete Step-by-Step Guide"
    },
    successStories: {
      title: "Success Stories",
      subtitle: "Real people, real benefits"
    },
    cta: {
      title: "Ready to Enable DBT?",
      subtitle: "Start your journey to hassle-free benefits today!"
    }
  },
  hi: {
    nav: {
      home: "होम",
      completeGuide: "पूर्ण गाइड",
      quiz: "प्रश्नोत्तरी",
      dbtStatus: "DBT स्थिति",
      helpline: "हेल्पलाइन",
      appName: "आधार जागरूकता"
    },
    hero: {
      title: "अपने",
      titleHighlight: "सरकारी लाभ अनलॉक करें",
      subtitle: "आधार-लिंक्ड और DBT-सक्षम खातों के बीच अंतर जानें। छात्रवृत्ति, सब्सिडी और अधिक तक सीधी पहुंच प्राप्त करें!",
      takeQuiz: "प्रश्नोत्तरी लें",
      checkStatus: "DBT स्थिति जांचें"
    },
    common: {
      checkEligibility: "पात्रता जांचें",
      startQuiz: "प्रश्नोत्तरी शुरू करें",
      videoTutorials: "वीडियो ट्यूटोरियल",
      backToLearning: "सीखने के केंद्र पर वापस जाएं",
      learnMore: "और जानें",
      download: "डाउनलोड",
      submit: "जमा करें",
      next: "अगला",
      previous: "पिछला"
    },
    comparison: {
      title: "सामान्य बनाम DBT-सक्षम खाते",
      subtitle: "मुख्य अंतर को समझना",
      normalAccount: "सामान्य आधार-लिंक्ड खाता",
      dbtAccount: "DBT-सक्षम खाता",
      normalFeature1: "केवल पहचान सत्यापन",
      normalFeature2: "मैनुअल लाभ प्रसंस्करण",
      normalFeature3: "लंबा प्रतीक्षा समय",
      normalFeature4: "बिचौलियों का जोखिम",
      dbtFeature1: "सीधा लाभ हस्तांतरण",
      dbtFeature2: "तत्काल प्रसंस्करण",
      dbtFeature3: "कोई बिचौलिया नहीं",
      dbtFeature4: "पूर्ण पारदर्शिता"
    },
    scholarships: {
      title: "DBT के माध्यम से उपलब्ध छात्रवृत्तियां",
      subtitle: "अपनी प्रोफ़ाइल से मेल खाने वाली छात्रवृत्तियां खोजें",
      schoolStudents: "स्कूली छात्र",
      collegeStudents: "कॉलेज के छात्र",
      researchStudents: "शोध छात्र",
      schoolEligibility: "कक्षा 9-12 के छात्र अच्छे शैक्षणिक रिकॉर्ड के साथ",
      collegeEligibility: "स्नातक और स्नातकोत्तर छात्र",
      researchEligibility: "NET/GATE के साथ पीएचडी और शोध विद्वान"
    },
    benefits: {
      title: "DBT के माध्यम से मिलने वाले सभी लाभ",
      subtitle: "सरकारी योजनाओं और सब्सिडी की पूरी सूची",
      scholarships: "छात्रवृत्तियां",
      scholarshipsDesc: "आपके खाते में सीधे शैक्षिक सहायता",
      lpgSubsidies: "LPG सब्सिडी",
      lpgSubsidiesDesc: "खाना पकाने की गैस सब्सिडी स्वचालित रूप से जमा",
      mgnrega: "मनरेगा",
      mgnregaDesc: "रोजगार गारंटी योजना भुगतान",
      pensions: "पेंशन",
      pensionsDesc: "सामाजिक सुरक्षा और पेंशन लाभ"
    },
    guide: {
      title: "त्वरित गाइड: 3 आसान तरीकों से DBT सक्षम करें",
      subtitle: "अपने लिए सबसे अच्छा तरीका चुनें",
      bankBranch: "बैंक शाखा में जाएं",
      onlineBanking: "ऑनलाइन बैंकिंग",
      mobileBanking: "मोबाइल बैंकिंग",
      viewCompleteGuide: "पूर्ण चरण-दर-चरण गाइड देखें"
    },
    successStories: {
      title: "सफलता की कहानियां",
      subtitle: "वास्तविक लोग, वास्तविक लाभ"
    },
    cta: {
      title: "DBT सक्षम करने के लिए तैयार हैं?",
      subtitle: "आज ही परेशानी मुक्त लाभों की यात्रा शुरू करें!"
    }
  },
  te: {
    nav: {
      home: "హోమ్",
      completeGuide: "పూర్తి గైడ్",
      quiz: "క్విజ్",
      dbtStatus: "DBT స్థితి",
      helpline: "హెల్ప్‌లైన్",
      appName: "ఆధార్ అవగాహన"
    },
    hero: {
      title: "మీ",
      titleHighlight: "ప్రభుత్వ ప్రయోజనాలను అన్‌లాక్ చేయండి",
      subtitle: "ఆధార్-లింక్డ్ మరియు DBT-ఎనేబుల్డ్ ఖాతాల మధ్య తేడాను తెలుసుకోండి. స్కాలర్‌షిప్‌లు, సబ్సిడీలు మరియు మరిన్నింటికి ప్రత్యక్ష ప్రవేశం పొందండి!",
      takeQuiz: "క్విజ్ తీసుకోండి",
      checkStatus: "DBT స్థితిని తనిఖీ చేయండి"
    },
    common: {
      checkEligibility: "అర్హతను తనిఖీ చేయండి",
      startQuiz: "క్విజ్ ప్రారంభించండి",
      videoTutorials: "వీడియో ట్యుటోరియల్స్",
      backToLearning: "లెర్నింగ్ సెంటర్‌కు తిరిగి వెళ్ళండి",
      learnMore: "ఇంకా తెలుసుకోండి",
      download: "డౌన్‌లోడ్",
      submit: "సమర్పించు",
      next: "తదుపరి",
      previous: "మునుపటి"
    },
    comparison: {
      title: "సాధారణ vs DBT-ఎనేబుల్డ్ ఖాతాలు",
      subtitle: "ముఖ్య తేడాలను అర్థం చేసుకోవడం",
      normalAccount: "సాధారణ ఆధార్-లింక్డ్ ఖాతా",
      dbtAccount: "DBT-ఎనేబుల్డ్ ఖాతా",
      normalFeature1: "కేవలం గుర్తింపు ధృవీకరణ",
      normalFeature2: "మాన్యువల్ ప్రయోజన ప్రాసెసింగ్",
      normalFeature3: "ఎక్కువ నిరీక్షణ సమయం",
      normalFeature4: "మధ్యవర్తుల ప్రమాదం",
      dbtFeature1: "ప్రత్యక్ష ప్రయోజన బదిలీలు",
      dbtFeature2: "తక్షణ ప్రాసెసింగ్",
      dbtFeature3: "మధ్యవర్తి లేదు",
      dbtFeature4: "పూర్తి పారదర్శకత"
    },
    scholarships: {
      title: "DBT ద్వారా అందుబాటులో ఉన్న స్కాలర్‌షిప్‌లు",
      subtitle: "మీ ప్రొఫైల్‌కు సరిపోలే స్కాలర్‌షిప్‌లను కనుగొనండి",
      schoolStudents: "పాఠశాల విద్యార్థులు",
      collegeStudents: "కళాశాల విద్యార్థులు",
      researchStudents: "పరిశోధన విద్యార్థులు",
      schoolEligibility: "మంచి విద్యా రికార్డుతో తరగతి 9-12 విద్యార్థులు",
      collegeEligibility: "అండర్‌గ్రాడ్యుయేట్ మరియు పోస్ట్‌గ్రాడ్యుయేట్ విద్యార్థులు",
      researchEligibility: "NET/GATE తో PhD మరియు పరిశోధన పండితులు"
    },
    benefits: {
      title: "DBT ద్వారా మీరు పొందగల అన్ని ప్రయోజనాలు",
      subtitle: "ప్రభుత్వ పథకాలు మరియు సబ్సిడీల పూర్తి జాబితా",
      scholarships: "స్కాలర్‌షిప్‌లు",
      scholarshipsDesc: "మీ ఖాతాకు నేరుగా విద్యా మద్దతు",
      lpgSubsidies: "LPG సబ్సిడీలు",
      lpgSubsidiesDesc: "వంట గ్యాస్ సబ్సిడీలు స్వయంచాలకంగా జమ",
      mgnrega: "మగ్నేరగా",
      mgnregaDesc: "ఉపాధి హామీ పథకం చెల్లింపులు",
      pensions: "పెన్షన్లు",
      pensionsDesc: "సామాజిక భద్రత మరియు పెన్షన్ ప్రయోజనాలు"
    },
    guide: {
      title: "త్వరిత గైడ్: 3 సులభ మార్గాల్లో DBT ఎనేబుల్ చేయండి",
      subtitle: "మీకు ఉత్తమంగా పనిచేసే పద్ధతిని ఎంచుకోండి",
      bankBranch: "బ్యాంక్ శాఖను సందర్శించండి",
      onlineBanking: "ఆన్‌లైన్ బ్యాంకింగ్",
      mobileBanking: "మొబైల్ బ్యాంకింగ్",
      viewCompleteGuide: "పూర్తి దశల-వారీ గైడ్‌ను చూడండి"
    },
    successStories: {
      title: "విజయ కథలు",
      subtitle: "నిజమైన ప్రజలు, నిజమైన ప్రయోజనాలు"
    },
    cta: {
      title: "DBT ఎనేబుల్ చేయడానికి సిద్ధంగా ఉన్నారా?",
      subtitle: "ఈరోజే ఇబ్బంది లేని ప్రయోజనాల ప్రయాణాన్ని ప్రారంభించండి!"
    }
  },
  ta: {
    nav: {
      home: "முகப்பு",
      completeGuide: "முழுமையான வழிகாட்டி",
      quiz: "வினாடி வினா",
      dbtStatus: "DBT நிலை",
      helpline: "உதவி எண்",
      appName: "ஆதார் விழிப்புணர்வு"
    },
    hero: {
      title: "உங்கள்",
      titleHighlight: "அரசு பலன்களை திறக்கவும்",
      subtitle: "ஆதார்-இணைக்கப்பட்ட மற்றும் DBT-இயக்கப்பட்ட கணக்குகளுக்கு இடையிலான வேறுபாட்டை அறியுங்கள். உதவித்தொகை, மானியங்கள் மற்றும் பலவற்றிற்கு நேரடி அணுகலைப் பெறுங்கள்!",
      takeQuiz: "வினாடி வினாவை எடுக்கவும்",
      checkStatus: "DBT நிலையை சரிபார்க்கவும்"
    },
    common: {
      checkEligibility: "தகுதியை சரிபார்க்கவும்",
      startQuiz: "வினாடி வினாவைத் தொடங்கவும்",
      videoTutorials: "வீடியோ பயிற்சிகள்",
      backToLearning: "கற்றல் மையத்திற்குத் திரும்பவும்",
      learnMore: "மேலும் அறிய",
      download: "பதிவிறக்கம்",
      submit: "சமர்ப்பிக்கவும்",
      next: "அடுத்தது",
      previous: "முந்தைய"
    },
    comparison: {
      title: "சாதாரண vs DBT-இயக்கப்பட்ட கணக்குகள்",
      subtitle: "முக்கிய வேறுபாடுகளைப் புரிந்துகொள்வது",
      normalAccount: "சாதாரண ஆதார்-இணைக்கப்பட்ட கணக்கு",
      dbtAccount: "DBT-இயக்கப்பட்ட கணக்கு",
      normalFeature1: "வெறும் அடையாள சரிபார்ப்பு",
      normalFeature2: "கையேடு நன்மை செயலாக்கம்",
      normalFeature3: "நீண்ட காத்திருப்பு நேரம்",
      normalFeature4: "இடைத்தரகர்களின் ஆபத்து",
      dbtFeature1: "நேரடி நன்மை பரிமாற்றங்கள்",
      dbtFeature2: "உடனடி செயலாக்கம்",
      dbtFeature3: "இடைத்தரகர் இல்லை",
      dbtFeature4: "முழுமையான வெளிப்படைத்தன்மை"
    },
    scholarships: {
      title: "DBT மூலம் கிடைக்கும் உதவித்தொகைகள்",
      subtitle: "உங்கள் சுயவிவரத்துடன் பொருந்தும் உதவித்தொகைகளைக் கண்டறியவும்",
      schoolStudents: "பள்ளி மாணவர்கள்",
      collegeStudents: "கல்லூரி மாணவர்கள்",
      researchStudents: "ஆராய்ச்சி மாணவர்கள்",
      schoolEligibility: "நல்ல கல்வி பதிவுடன் வகுப்பு 9-12 மாணவர்கள்",
      collegeEligibility: "இளங்கலை மற்றும் முதுகலை மாணவர்கள்",
      researchEligibility: "NET/GATE உடன் பிஎச்டி மற்றும் ஆராய்ச்சி அறிஞர்கள்"
    },
    benefits: {
      title: "DBT மூலம் நீங்கள் பெறக்கூடிய அனைத்து பலன்கள்",
      subtitle: "அரசு திட்டங்கள் மற்றும் மானியங்களின் முழுமையான பட்டியல்",
      scholarships: "உதவித்தொகைகள்",
      scholarshipsDesc: "உங்கள் கணக்கில் நேரடியாக கல்வி ஆதரவு",
      lpgSubsidies: "எல்பிஜி மானியங்கள்",
      lpgSubsidiesDesc: "சமையல் எரிவாயு மானியங்கள் தானாக வரவு வைக்கப்படும்",
      mgnrega: "மக்னரேகா",
      mgnregaDesc: "வேலைவாய்ப்பு உத்தரவாத திட்ட செலுத்துதல்கள்",
      pensions: "ஓய்வூதியங்கள்",
      pensionsDesc: "சமூக பாதுகாப்பு மற்றும் ஓய்வூதிய பலன்கள்"
    },
    guide: {
      title: "விரைவு வழிகாட்டி: 3 எளிய வழிகளில் DBT ஐ இயக்கவும்",
      subtitle: "உங்களுக்கு சிறந்த முறையைத் தேர்ந்தெடுக்கவும்",
      bankBranch: "வங்கி கிளையைப் பார்வையிடவும்",
      onlineBanking: "ஆன்லைன் வங்கி",
      mobileBanking: "மொபைல் வங்கி",
      viewCompleteGuide: "முழுமையான படிப்படியான வழிகாட்டியைப் பார்க்கவும்"
    },
    successStories: {
      title: "வெற்றிக் கதைகள்",
      subtitle: "உண்மையான மக்கள், உண்மையான பலன்கள்"
    },
    cta: {
      title: "DBT ஐ இயக்க தயாரா?",
      subtitle: "இன்றே தொந்தரவு இல்லாத பலன்களின் பயணத்தைத் தொடங்குங்கள்!"
    }
  }
};

export const languageNames: Record<Language, string> = {
  en: "English",
  hi: "हिन्दी",
  te: "తెలుగు",
  ta: "தமிழ்"
};