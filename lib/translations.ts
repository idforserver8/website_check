export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Expert Mobile Repair Services",
      subtitle: "Your trusted mobile repair center with 19+ years of experience",
      cta: "Get Started",
      contactUs: "Contact Us"
    },
    services: {
      title: "Our Services",
      subtitle: "Professional mobile repair solutions for all your needs",
      inquire: "Inquire Now",
      viewDetails: "View Details"
    },
    about: {
      title: "Meet Our Expert",
      experienceLabel: "Years of Experience",
      description: "Professional mobile repair services with expert technicians and quality assurance"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with us for any inquiries",
      phone: "Phone",
      email: "Email",
      location: "Location",
      openHours: "Open Hours",
      mondayToFriday: "Monday - Friday: 10:00 AM - 7:00 PM",
      saturday: "Saturday: 10:00 AM - 6:00 PM",
      sunday: "Sunday: Closed",
      sendMessage: "Send Message"
    },
    footer: {
      about: "About Us",
      aboutText: "Professional mobile repair services with 19+ years of experience. We provide quality repairs and customer satisfaction.",
      services: "Services",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      followUs: "Follow Us",
      updates: "Latest Updates",
      copyright: "All rights reserved."
    },
    liveUpdates: {
      title: "Latest Updates",
      new: "NEW"
    },
    common: {
      learnMore: "Learn More",
      readMore: "Read More",
      backToTop: "Back to Top"
    }
  },
  np: {
    nav: {
      home: "गृहपृष्ठ",
      services: "सेवाहरू",
      about: "हाम्रो बारेमा",
      contact: "सम्पर्क"
    },
    hero: {
      title: "विशेषज्ञ मोबाइल मर्मत सेवाहरू",
      subtitle: "१९+ वर्षको अनुभवसहित तपाईंको विश्वसनीय मोबाइल मर्मत केन्द्र",
      cta: "सुरु गर्नुहोस्",
      contactUs: "सम्पर्क गर्नुहोस्"
    },
    services: {
      title: "हाम्रा सेवाहरू",
      subtitle: "तपाईंका सबै आवश्यकताहरूको लागि व्यावसायिक मोबाइल मर्मत समाधानहरू",
      inquire: "सोधपुछ गर्नुहोस्",
      viewDetails: "विवरण हेर्नुहोस्"
    },
    about: {
      title: "हाम्रा विशेषज्ञलाई भेट्नुहोस्",
      experienceLabel: "वर्षको अनुभव",
      description: "विशेषज्ञ प्राविधिक र गुणस्तर आश्वासनसहित व्यावसायिक मोबाइल मर्मत सेवाहरू"
    },
    contact: {
      title: "सम्पर्क गर्नुहोस्",
      subtitle: "कुनै पनि सोधपुछको लागि हामीलाई सम्पर्क गर्नुहोस्",
      phone: "फोन",
      email: "इमेल",
      location: "स्थान",
      openHours: "खुला समय",
      mondayToFriday: "सोमबार - शुक्रबार: १०:०० बिहान - ७:०० बेलुका",
      saturday: "शनिबार: १०:०० बिहान - ६:०० बेलुका",
      sunday: "आइतबार: बन्द",
      sendMessage: "सन्देश पठाउनुहोस्"
    },
    footer: {
      about: "हाम्रो बारेमा",
      aboutText: "१९+ वर्षको अनुभवसहित व्यावसायिक मोबाइल मर्मत सेवाहरू। हामी गुणस्तरीय मर्मत र ग्राहक सन्तुष्टि प्रदान गर्छौं।",
      services: "सेवाहरू",
      quickLinks: "द्रुत लिङ्कहरू",
      contactInfo: "सम्पर्क जानकारी",
      followUs: "हामीलाई फलो गर्नुहोस्",
      updates: "नवीनतम अपडेटहरू",
      copyright: "सर्वाधिकार सुरक्षित।"
    },
    liveUpdates: {
      title: "नवीनतम अपडेटहरू",
      new: "नयाँ"
    },
    common: {
      learnMore: "थप जान्नुहोस्",
      readMore: "थप पढ्नुहोस्",
      backToTop: "माथि फर्कनुहोस्"
    }
  }
};

export type Language = 'en' | 'np';
export type TranslationKey = keyof typeof translations.en;
