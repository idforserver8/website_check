export const SITE_CONFIG = {
  name: 'Best Mobile Care',
  tagline: {
    en: 'Fast & On-The-Spot Mobile Repair Services',
    ne: 'छिटो र तत्काल मोबाइल मर्मत सेवा'
  },
  description: {
    en: 'Professional mobile repair services with 19+ years of experience. We fix broken screens, charging issues, network problems, and all mobile issues on the spot.',
    ne: '१९+ वर्षको अनुभवको साथ व्यावसायिक मोबाइल मर्मत सेवा। हामी टुटेको स्क्रिन, चार्जिङ समस्या, नेटवर्क समस्या, र सबै मोबाइल समस्याहरू तत्काल ठीक गर्छौं।'
  },
  contact: {
    phone: '+977 9841234567',
    whatsapp: '+977 9841234567',
    email: 'bestmobilecare@gmail.com',
    facebook: 'https://facebook.com/bestmobilecare',
    location: {
      en: 'Jadibuti, Narephat Road, Near Pani Padhero, Near NIC ASIA Bank, Kathmandu, Nepal',
      ne: 'जडिबुटी, नारेफाट रोड, पानी पधेरो नजिक, एनआईसी एसिया बैंक नजिक, काठमाडौं, नेपाल'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2snp!4v1234567890'
  }
};

const TECHNICIAN_PHOTO= "/raju_sir.jpg"

export const TECHNICIAN_INFO2 = {
  name: "Raju Yadav",
  experience: "19+",
  photo: TECHNICIAN_PHOTO,
  description: "Expert mobile technician with extensive experience in all types of mobile repairs and advanced chip-level solutions."
};


export const CONTACT_INFO2 = {
  phone: "+977-9851234567",
  email: "info@bestmobilecare.com",
  facebook: "https://facebook.com/bestmobilecare",
  whatsapp: "+977-9851234567",
  location: "Jadibuti, Narephat Road, Near Pani Padhero, Near NIC ASIA Bank, Kathmandu, Nepal",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.83810513428804!2d85.3504315681815!3d27.67373005670005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb3f4f413addb5%3A0xe31c339d99caa2b6!2sQuick%20Mobile%20Pasal!5e0!3m2!1sen!2snp!4v1768101688980!5m2!1sen!2snp"
};
export const SERVICES = [
  {
    id: 1,
    title: {
      en: 'Broken Screen Repair',
      ne: 'टुटेको स्क्रिन मर्मत'
    },
    description: {
      en: 'Fast and professional screen replacement for all mobile brands',
      ne: 'सबै मोबाइल ब्रान्डका लागि छिटो र व्यावसायिक स्क्रिन प्रतिस्थापन'
    },
    icon: 'Smartphone'
  },
  {
    id: 2,
    title: {
      en: 'Charging Problem',
      ne: 'चार्जिङ समस्या'
    },
    description: {
      en: 'Fix charging port issues, battery problems, and power-related faults',
      ne: 'चार्जिङ पोर्ट समस्या, ब्याट्री समस्या, र पावर सम्बन्धित समस्याहरू समाधान'
    },
    icon: 'BatteryCharging'
  },
  {
    id: 3,
    title: {
      en: 'Network Problem',
      ne: 'नेटवर्क समस्या'
    },
    description: {
      en: 'Resolve signal issues, WiFi problems, and connectivity errors',
      ne: 'सिग्नल समस्या, WiFi समस्या, र कनेक्टिभिटी त्रुटिहरू समाधान'
    },
    icon: 'Signal'
  },
  {
    id: 4,
    title: {
      en: 'Mobile Dead Problems',
      ne: 'मोबाइल डेड समस्या'
    },
    description: {
      en: 'Water damage, fall damage, motherboard faults, battery issues, power IC failure',
      ne: 'पानीको क्षति, खस्ने क्षति, मदरबोर्ड समस्या, ब्याट्री समस्या, पावर IC फेलियर'
    },
    icon: 'PhoneOff'
  },
  {
    id: 5,
    title: {
      en: 'EMMC / UFS Programming',
      ne: 'EMMC / UFS प्रोग्रामिङ'
    },
    description: {
      en: 'Advanced solutions: F64, MIPI Tester, EasyJTAG, Pragmafix',
      ne: 'उन्नत समाधान: F64, MIPI Tester, EasyJTAG, Pragmafix'
    },
    icon: 'Cpu'
  },
  {
    id: 6,
    title: {
      en: 'All Other Mobile Problems',
      ne: 'अन्य सबै मोबाइल समस्या'
    },
    description: {
      en: 'Software issues, hardware repairs, and complete mobile diagnostics',
      ne: 'सफ्टवेयर समस्या, हार्डवेयर मर्मत, र पूर्ण मोबाइल निदान'
    },
    icon: 'Wrench'
  }
];


// export const SERVICES2 = [
//   {
//     id: 1,
//     title: "Broken Screen Repair",
//     description: "Professional screen replacement for all mobile brands with original quality parts",
//     icon: "smartphone",
//     offer: "20% OFF on screen replacement",
//     features: [
//       "LCD/AMOLED screen replacement",
//       "Touch screen repair",
//       "Display quality assurance",
//       "Same day service available"
//     ]
//   },
//   {
//     id: 2,
//     title: "Charging Problem",
//     description: "Complete charging port repair and battery replacement services",
//     icon: "battery-charging",
//     offer: "Free diagnosis",
//     features: [
//       "Charging port repair/replacement",
//       "Battery replacement",
//       "Charging IC repair",
//       "Fast charging issues"
//     ]
//   },
//   {
//     id: 3,
//     title: "Network Problem",
//     description: "Expert solutions for all network and connectivity issues",
//     icon: "signal",
//     offer: "15% OFF",
//     features: [
//       "No signal issues",
//       "SIM card not detecting",
//       "WiFi/Bluetooth problems",
//       "Network IC repair"
//     ]
//   },
//   {
//     id: 4,
//     title: "Mobile Dead Problems",
//     description: "Advanced chip-level repairs for all dead mobile issues",
//     icon: "power",
//     offer: "Free inspection",
//     features: [
//       "Water damage repair",
//       "Fall damage repair",
//       "Motherboard fault repair",
//       "Battery problem",
//       "Power IC failure repair"
//     ]
//   },
//   {
//     id: 5,
//     title: "EMMC/UFS Programming",
//     description: "Professional chip programming and data recovery services",
//     icon: "cpu",
//     offer: "Expert service",
//     features: [
//       "F64 programming",
//       "MIPI Tester services",
//       "EasyJTAG programming",
//       "Pragmafix solutions",
//       "Data recovery"
//     ]
//   },
//   {
//     id: 6,
//     title: "All Other Mobile Problems",
//     description: "Complete solution for any mobile issue you face",
//     icon: "wrench",
//     offer: "Best price guaranteed",
//     features: [
//       "Camera issues",
//       "Speaker/Microphone repair",
//       "Button replacement",
//       "Software problems",
//       "Any other issues"
//     ]
//   }
// ];

export const SERVICES2 = [
  {
    id: 1,
    title: {
      en: "Broken Screen Repair",
      ne: "टुटेको स्क्रिन मर्मत"
    },
    description: {
      en: "Professional screen replacement for all mobile brands with original quality parts",
      ne: "सबै मोबाइल ब्रान्डका लागि ओरिजिनल गुणस्तरका पार्ट्ससहित व्यावसायिक स्क्रिन प्रतिस्थापन"
    },
    icon: "Smartphone",
    offer: {
      en: "20% OFF on screen replacement",
      ne: "स्क्रिन प्रतिस्थापनमा २०% छुट"
    },
    features: {
      en: [
        "LCD / AMOLED screen replacement",
        "Touch screen repair",
        "Display quality assurance",
        "Same day service available"
      ],
      ne: [
        "LCD / AMOLED स्क्रिन प्रतिस्थापन",
        "टच स्क्रिन मर्मत",
        "डिस्प्ले गुणस्तरको ग्यारेन्टी",
        "एकै दिन सेवा उपलब्ध"
      ]
    }
  },
  {
    id: 2,
    title: {
      en: "Charging Problem",
      ne: "चार्जिङ समस्या"
    },
    description: {
      en: "Complete charging port repair and battery replacement services",
      ne: "चार्जिङ पोर्ट मर्मत र ब्याट्री प्रतिस्थापन सेवा"
    },
    icon: "BatteryCharging",
    offer: {
      en: "Free diagnosis",
      ne: "निःशुल्क जाँच"
    },
    features: {
      en: [
        "Charging port repair / replacement",
        "Battery replacement",
        "Charging IC repair",
        "Fast charging issues"
      ],
      ne: [
        "चार्जिङ पोर्ट मर्मत / प्रतिस्थापन",
        "ब्याट्री प्रतिस्थापन",
        "चार्जिङ IC मर्मत",
        "फास्ट चार्जिङ समस्या समाधान"
      ]
    }
  },
  {
    id: 3,
    title: {
      en: "Network Problem",
      ne: "नेटवर्क समस्या"
    },
    description: {
      en: "Expert solutions for all network and connectivity issues",
      ne: "सबै नेटवर्क र कनेक्टिभिटी समस्याका लागि विशेषज्ञ समाधान"
    },
    icon: "Signal",
    offer: {
      en: "15% OFF",
      ne: "१५% छुट"
    },
    features: {
      en: [
        "No signal issues",
        "SIM card not detecting",
        "WiFi / Bluetooth problems",
        "Network IC repair"
      ],
      ne: [
        "सिग्नल नआउने समस्या",
        "SIM कार्ड नदेखिने समस्या",
        "WiFi / Bluetooth समस्या",
        "नेटवर्क IC मर्मत"
      ]
    }
  },
  {
    id: 4,
    title: {
      en: "Mobile Dead Problems",
      ne: "मोबाइल डेड समस्या"
    },
    description: {
      en: "Advanced chip-level repairs for all dead mobile issues",
      ne: "सबै प्रकारका डेड मोबाइल समस्याका लागि चिप-लेभल मर्मत"
    },
    icon: "PhoneOff",
    offer: {
      en: "Free inspection",
      ne: "निःशुल्क जाँच"
    },
    features: {
      en: [
        "Water damage repair",
        "Fall damage repair",
        "Motherboard fault repair",
        "Battery problem",
        "Power IC failure repair"
      ],
      ne: [
        "पानीले बिग्रिएको मोबाइल मर्मत",
        "खसेर बिग्रिएको मोबाइल मर्मत",
        "मदरबोर्ड समस्या मर्मत",
        "ब्याट्री समस्या",
        "पावर IC फेलियर मर्मत"
      ]
    }
  },
  {
    id: 5,
    title: {
      en: "EMMC / UFS Programming",
      ne: "EMMC / UFS प्रोग्रामिङ"
    },
    description: {
      en: "Professional chip programming and data recovery services",
      ne: "व्यावसायिक चिप प्रोग्रामिङ र डाटा रिकभरी सेवा"
    },
    icon: "Cpu",
    offer: {
      en: "Expert service",
      ne: "विशेषज्ञ सेवा"
    },
    features: {
      en: [
        "F64 programming",
        "MIPI Tester services",
        "EasyJTAG programming",
        "Pragmafix solutions",
        "Data recovery"
      ],
      ne: [
        "F64 प्रोग्रामिङ",
        "MIPI Tester सेवा",
        "EasyJTAG प्रोग्रामिङ",
        "Pragmafix समाधान",
        "डाटा रिकभरी"
      ]
    }
  },
  {
    id: 6,
    title: {
      en: "All Other Mobile Problems",
      ne: "अन्य सबै मोबाइल समस्या"
    },
    description: {
      en: "Complete solution for any mobile issue you face",
      ne: "तपाईंले सामना गर्ने सबै मोबाइल समस्याको पूर्ण समाधान"
    },
    icon: "Wrench",
    offer: {
      en: "Best price guaranteed",
      ne: "सर्वोत्तम मूल्यको ग्यारेन्टी"
    },
    features: {
      en: [
        "Camera issues",
        "Speaker / Microphone repair",
        "Button replacement",
        "Software problems",
        "Any other issues"
      ],
      ne: [
        "क्यामेरा समस्या",
        "स्पिकर / माइक मर्मत",
        "बटन प्रतिस्थापन",
        "सफ्टवेयर समस्या",
        "अन्य सबै समस्या"
      ]
    }
  }
];

export const SERVICES3 = [
  {
    id: 1,
    title: "Broken Screen Repair",
    description: "Professional screen replacement for all mobile brands with original quality parts",
    icon: "smartphone",
    offer: "20% OFF on screen replacement",
    features: [
      "LCD/AMOLED screen replacement",
      "Touch screen repair",
      "Display quality assurance",
      "Same day service available"
    ]
  },
  {
    id: 2,
    title: "Charging Problem",
    description: "Complete charging port repair and battery replacement services",
    icon: "battery-charging",
    offer: "Free diagnosis",
    features: [
      "Charging port repair/replacement",
      "Battery replacement",
      "Charging IC repair",
      "Fast charging issues"
    ]
  },
  {
    id: 3,
    title: "Network Problem",
    description: "Expert solutions for all network and connectivity issues",
    icon: "signal",
    offer: "15% OFF",
    features: [
      "No signal issues",
      "SIM card not detecting",
      "WiFi/Bluetooth problems",
      "Network IC repair"
    ]
  },
  {
    id: 4,
    title: "Mobile Dead Problems",
    description: "Advanced chip-level repairs for all dead mobile issues",
    icon: "power",
    offer: "Free inspection",
    features: [
      "Water damage repair",
      "Fall damage repair",
      "Motherboard fault repair",
      "Battery problem",
      "Power IC failure repair"
    ]
  },
  {
    id: 5,
    title: "EMMC/UFS Programming",
    description: "Professional chip programming and data recovery services",
    icon: "cpu",
    offer: "Expert service",
    features: [
      "F64 programming",
      "MIPI Tester services",
      "EasyJTAG programming",
      "Pragmafix solutions",
      "Data recovery"
    ]
  },
  {
    id: 6,
    title: "All Other Mobile Problems",
    description: "Complete solution for any mobile issue you face",
    icon: "wrench",
    offer: "Best price guaranteed",
    features: [
      "Camera issues",
      "Speaker/Microphone repair",
      "Button replacement",
      "Software problems",
      "Any other issues"
    ]
  }
];


export const TECHNICIAN = {
  name: 'Raju Yadav',
  experience: {
    en: '19+ Years of Experience',
    ne: '१९+ वर्षको अनुभव'
  },
  expertise: {
    en: 'Expert in all types of mobile repairs with specialized training in advanced motherboard repair and programming',
    ne: 'उन्नत मदरबोर्ड मर्मत र प्रोग्रामिङमा विशेष प्रशिक्षणको साथ सबै प्रकारका मोबाइल मर्मतमा विशेषज्ञ'
  },
  photoUrl: '/raju_sir.jpg',
  certifications: {
    en: ['Certified Mobile Technician', 'Advanced Motherboard Repair', 'EMMC/UFS Programming Expert'],
    ne: ['प्रमाणित मोबाइल प्राविधिक', 'उन्नत मदरबोर्ड मर्मत', 'EMMC/UFS प्रोग्रामिङ विशेषज्ञ']
  }
};

export const REVIEWS = [
  {
    id: 1,
    name: 'Ramesh Sharma',
    rating: 5,
    comment: {
      en: 'Excellent service! They fixed my phone screen in just 30 minutes. Very professional and affordable.',
      ne: 'उत्कृष्ट सेवा! उनीहरूले मेरो फोन स्क्रिन केवल ३० मिनेटमा ठीक गरे। धेरै व्यावसायिक र सस्तो।'
    },
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Sita Devi',
    rating: 5,
    comment: {
      en: 'My phone was completely dead after water damage. They repaired it perfectly. Highly recommended!',
      ne: 'पानीको क्षति पछि मेरो फोन पूर्णतया मरेको थियो। उनीहरूले यसलाई पूर्ण रूपमा मर्मत गरे। अत्यधिक सिफारिस!'
    },
    date: '2024-01-10'
  },
  {
    id: 3,
    name: 'Anil Kumar',
    rating: 5,
    comment: {
      en: 'Best mobile repair center in Kathmandu. Fast service and genuine parts. Thank you!',
      ne: 'काठमाडौंको सबैभन्दा राम्रो मोबाइल मर्मत केन्द्र। छिटो सेवा र वास्तविक पार्टहरू। धन्यवाद!'
    },
    date: '2024-01-05'
  },
  {
    id: 4,
    name: 'Priya Thapa',
    rating: 5,
    comment: {
      en: 'Very honest and skilled technician. Fixed my charging problem instantly. Great experience!',
      ne: 'धेरै इमान्दार र दक्ष प्राविधिक। मेरो चार्जिङ समस्या तुरुन्तै ठीक गर्नुभयो। उत्कृष्ट अनुभव!'
    },
    date: '2023-12-28'
  },
  {
    id: 5,
    name: 'Bikash Shrestha',
    rating: 5,
    comment: {
      en: 'Amazing work on my motherboard repair. Phone is working like new. Fair pricing too!',
      ne: 'मेरो मदरबोर्ड मर्मतमा अद्भुत काम। फोन नयाँ जस्तै काम गरिरहेको छ। उचित मूल्य पनि!'
    },
    date: '2023-12-20'
  },
  {
    id: 6,
    name: 'Sunita Rai',
    rating: 5,
    comment: {
      en: 'Quick and reliable service. They solved my network issue which other shops couldn\'t fix.',
      ne: 'छिटो र भरपर्दो सेवा। उनीहरूले मेरो नेटवर्क समस्या समाधान गरे जुन अन्य पसलहरूले समाधान गर्न सकेनन्।'
    },
    date: '2023-12-15'
  }
];

export const OFFERS = [
  {
    id: 1,
    title: {
      en: 'Free Phone Checkup',
      ne: 'नि:शुल्क फोन जाँच'
    },
    description: {
      en: 'Get a complete free diagnostic check for your mobile phone',
      ne: 'आफ्नो मोबाइल फोनको लागि पूर्ण नि:शुल्क निदान जाँच प्राप्त गर्नुहोस्'
    },
    areas: {
      en: 'Available for all customers in Kathmandu Valley',
      ne: 'काठमाडौं उपत्यकाका सबै ग्राहकहरूको लागि उपलब्ध'
    },
    validUntil: '2024-12-31'
  },
  {
    id: 2,
    title: {
      en: '10% Off on Screen Replacement',
      ne: 'स्क्रिन प्रतिस्थापनमा १०% छुट'
    },
    description: {
      en: 'Special discount on all screen replacements with genuine parts',
      ne: 'वास्तविक पार्टहरूको साथ सबै स्क्रिन प्रतिस्थापनहरूमा विशेष छुट'
    },
    areas: {
      en: 'Valid for all phone models',
      ne: 'सबै फोन मोडेलहरूको लागि मान्य'
    },
    validUntil: '2024-03-31'
  },
  {
    id: 3,
    title: {
      en: 'Same Day Repair Service',
      ne: 'सोही दिन मर्मत सेवा'
    },
    description: {
      en: 'Most repairs completed within the same day. Fast and reliable!',
      ne: 'अधिकांश मर्मतहरू सोही दिन भित्र पूरा! छिटो र भरपर्दो!'
    },
    areas: {
      en: 'Available Monday to Saturday',
      ne: 'सोमबार देखि शनिबार उपलब्ध'
    },
    validUntil: 'Ongoing'
  }
];

export const SHOP_PHOTOS = [
  '/shop-1.jpg',
  '/shop-2.jpg',
  '/shop-3.jpg'
];

export const REPAIRED_PHONES_PHOTOS = Array.from({ length: 30 }, (_, i) => `/repaired-${i + 1}.jpg`);

export const DEVELOPER_INFO = {
  name: 'Your Name',
  developedDate: 'January 2024',
  portfolioUrl: 'https://yourportfolio.com',
  description: {
    en: 'Full Stack Web Developer specializing in modern web technologies',
    ne: 'आधुनिक वेब प्रविधिहरूमा विशेषज्ञता भएको पूर्ण स्ट्याक वेब विकासकर्ता'
  }
};

export const NAV_LINKS = [
  { id: 'home', label: { en: 'Home', ne: 'गृहपृष्ठ' }, href: '/' },
  { id: 'services', label: { en: 'Services', ne: 'सेवाहरू' }, href: '#services' },
  { id: 'technician', label: { en: 'Our Expert', ne: 'हाम्रो विशेषज्ञ' }, href: '#technician' },
  { id: 'gallery', label: { en: 'Gallery', ne: 'ग्यालरी' }, href: '#gallery' },
  { id: 'reviews', label: { en: 'Reviews', ne: 'समीक्षा' }, href: '/reviews' },
  { id: 'contact', label: { en: 'Contact', ne: 'सम्पर्क' }, href: '#contact' }
];
