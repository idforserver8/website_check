export const COMPANY_NAME = "Best Mobile Care";

export const TECHNICIAN_PHOTO = "/technician.jpg";

export const CONTACT_INFO = {
  phone: "+977-9851234567",
  email: "info@bestmobilecare.com",
  facebook: "https://facebook.com/bestmobilecare",
  whatsapp: "+977-9851234567",
  location: "Jadibuti, Narephat Road, Near Pani Padhero, Near NIC ASIA Bank, Kathmandu, Nepal",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.83810513428804!2d85.3504315681815!3d27.67373005670005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb3f4f413addb5%3A0xe31c339d99caa2b6!2sQuick%20Mobile%20Pasal!5e0!3m2!1sen!2snp!4v1768101688980!5m2!1sen!2snp"
};

export const TECHNICIAN_INFO = {
  name: "Raju Yadav",
  experience: "19+",
  photo: TECHNICIAN_PHOTO,
  description: "Expert mobile technician with extensive experience in all types of mobile repairs and advanced chip-level solutions."
};

export const SERVICES = [
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

export const LIVE_UPDATES = [
  {
    id: 1,
    message: "Special Diwali Offer: 25% OFF on all screen repairs! Limited time only.",
    date: "2024-01-10"
  },
  {
    id: 2,
    message: "New: We now offer same-day service for most repairs!",
    date: "2024-01-08"
  },
  {
    id: 3,
    message: "Extended hours: Now open on Saturdays from 10 AM to 6 PM",
    date: "2024-01-05"
  }
];

export const FOOTER_LINKS = {
  services: [
    { name: "Screen Repair", href: "#services" },
    { name: "Battery Replacement", href: "#services" },
    { name: "Water Damage", href: "#services" },
    { name: "Chip Programming", href: "#services" }
  ],
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" }
  ],
  social: [
    { name: "Facebook", href: CONTACT_INFO.facebook, icon: "facebook" },
    { name: "WhatsApp", href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`, icon: "message-circle" },
    { name: "Email", href: `mailto:${CONTACT_INFO.email}`, icon: "mail" }
  ]
};
