export type TenantCategory = "Food" | "Beverage" | "Café" | "Other";

export type Tenant = {
  slug: string;
  name: string;
  category: TenantCategory;
  floor: "M" | "1" | "2" | "3" | "4" | "5";
  blurb: string;
  logoImage?: string;
  interiorImage?: string;
  heroImage?: string;
  galleryImages?: string[];
  hours: string;
  socialLabel: string;
  phone: string;
  socialUrl: string;
};

export const TENANTS: Tenant[] = [
  {
    slug: "jian-cha",
    name: "Jian Cha",
    category: "Beverage",
    floor: "2",
    blurb:
      "JIAN CHA (见茶山) is a premium Thai-Chinese tea brand blending traditional tea methods with modern, fresh fruit tea innovations. Known for its signature creamy grape smoothie, high-quality ingredients, and elegant branding, it offers a luxurious yet health-conscious tea experience.",
    logoImage: "/images/Tenants/JianCha/Logo.png",
    interiorImage: "/images/Tenants/JianCha/Interior.webp",
    heroImage: "/images/Tenants/JianCha/Hero.jpg",
    galleryImages: ["/images/Tenants/JianCha/Gallery1.webp", 
                    "/images/Tenants/JianCha/Gallery2.webp",
                    ],
    hours: "Daily 09:00–22:00",
    socialLabel: "@jiancha.official",
    phone: "081-692-9529",
    socialUrl: "https://www.instagram.com/jiancha.official/",
  },
  {
    slug: "rainforest",
    name: "Rainforest Café",
    category: "Café",
    floor: "2",
    blurb:
      "Originally located in the misty forests at Kanchanaburi, Rainforest Cafe has now brought its enchanting Rainy Season concept to Bangkok. Embracing the romance and melancholy of the rainy season with the soothing sound from raindrops.",
    logoImage: "/images/Tenants/Rainforest/Logo.png",
    interiorImage: "/images/Tenants/Rainforest/Interior.webp",
    heroImage: "/images/Tenants/Rainforest/Hero.webp",
    galleryImages: ["/images/Tenants/Rainforest/Gallery1.webp", 
                    "/images/Tenants/Rainforest/Gallery2.webp",
                    "/images/Tenants/Rainforest/Gallery3.webp",
                    "/images/Tenants/Rainforest/Gallery5.webp",
                    ],
    hours: "Daily 10:00–21:00",
    socialLabel: "@rainforestcafe.bkk",
    phone: "082-283-2025",
    socialUrl: "https://www.instagram.com/rainforestcafe.bkk/",
  },
  {
    slug: "gohan-gyudon",
    name: "Gohan Gyudon",
    category: "Food",
    floor: "2",
    blurb:
      "GOHAN Gyudon (ごはん) is a popular Japanese rice bowl franchise in Thailand, starting from 89 THB. Known for quality beef imported from the USA and Australia, they offer signature gyudon, curry, and pork dishes featuring soft-boiled duck eggs.",
    logoImage: "/images/Tenants/GohanGyudon/Logo.jpg",
    interiorImage: "/images/Tenants/GohanGyudon/Interior.webp",
    heroImage: "/images/Tenants/GohanGyudon/Hero.webp",
    galleryImages: ["/images/Tenants/GohanGyudon/Gallery1.webp", 
                    "/images/Tenants/GohanGyudon/Gallery2.webp",
                    "/images/Tenants/GohanGyudon/Gallery3.webp",
                    "/images/Tenants/GohanGyudon/Gallery4.webp",
                    ],
    hours: "Daily 11:00–20:00",
    socialLabel: "@gohangyudon",
    phone: "081-652-2979",
    socialUrl: "https://www.instagram.com/gohangyudon/",
  },
  {
    slug: "chubby-boy",
    name: "Chubby Boy Slushy Bar",
    category: "Café",
    floor: "2",
    blurb:
      "Chubby Boy Slushy Bar is a trendy, pastel-themed slushy café known for its signature Thai Tea Chubby Cheese slushy, rich dark cocoa, and crispy bubble waffles.",
    logoImage: "/images/Tenants/ChubbyBoy/Logo.jpg",
    interiorImage: "/images/Tenants/ChubbyBoy/Interior.webp",
    heroImage: "/images/Tenants/ChubbyBoy/Hero.jpg",
    galleryImages: ["/images/Tenants/ChubbyBoy/Gallery1.webp", 
                    "/images/Tenants/ChubbyBoy/Gallery2.webp",
                    "/images/Tenants/ChubbyBoy/Gallery3.webp",
                    "/images/Tenants/ChubbyBoy/Gallery4.webp",
                    ],
    hours: "Daily 10:00–20:00",
    socialLabel: "@chubbyboy.ondiet",
    phone: "083-920-59149",
    socialUrl: "https://www.instagram.com/chubbyboy.ondiet/",
  },
  {
    slug: "analog-skyflow",
    name: "Analog Skyflow",
    category: "Café",
    floor: "5",
    blurb:
      "Analog Skyflow is a cafe & bar. It offers a cozy, vintage-inspired atmosphere featuring art, cassettes, and retro radio, featuring both indoor and outdoor zones",
    logoImage: "/images/Tenants/AnalogSkyflow/Logo.jpg",
    interiorImage: "/images/Tenants/AnalogSkyflow/Interior.webp",
    heroImage: "/images/Tenants/AnalogSkyflow/Hero.webp",
    galleryImages: ["/images/Tenants/AnalogSkyflow/Gallery1.webp",
                    "/images/Tenants/AnalogSkyflow/Gallery2.webp",
                    "/images/Tenants/AnalogSkyflow/Gallery3.webp",
                    "/images/Tenants/AnalogSkyflow/Gallery4.webp",
                    ],
    hours: "Daily 15:00–24:00",
    socialLabel: "@analogskyflow",
    phone: "099-249-6528",
    socialUrl: "https://www.instagram.com/analogskyflow/",
  },
  {
    slug: "voila-flowers",
    name: "Voila Flowers",
    category: "Other",
    floor: "M",
    blurb:
      "Viola Flowers is a boutique floral studio at specializing in custom-designed, personality-driven arrangements and interactive workshops, known for its concept that translates individual styles into unique floral art.",
    logoImage: "/images/Tenants/ViolaFlowers/Logo.jpg",
    interiorImage: "/images/Tenants/ViolaFlowers/Interior.webp",
    heroImage: "/images/Tenants/ViolaFlowers/Hero.webp",
    galleryImages: ["/images/Tenants/ViolaFlowers/Gallery1.webp",
                    "/images/Tenants/ViolaFlowers/Gallery2.webp",
                    "/images/Tenants/ViolaFlowers/Gallery3.webp",
                    "/images/Tenants/ViolaFlowers/Gallery4.webp",
                    ],
    hours: "Daily 10:00–22:00",
    socialLabel: "@violaflowers_bkk",
    phone: "099-283-4595",
    socialUrl: "https://www.instagram.com/violaflowers_bkk/",
  },
  {
    slug: "fatbro",
    name: "FatBro",
    category: "Food",
    floor: "2",
    blurb:
      "FATBRO (เฮียอ้วนปิ้งย่าง) is a popular Thai street food franchise specializing in premium grilled pork skewers (moo ping) and other grilled delicacies, known for operating 24 hours at some locations.",
    logoImage: "/images/Tenants/FatBro/Logo.png",
    interiorImage: "/images/Tenants/FatBro/Interior.webp",
    heroImage: "/images/Tenants/FatBro/Interior.jpg",
    galleryImages: ["/images/Tenants/FatBro/Interior.jpg"
                    ],
    hours: "Daily 07:30–22:00",
    socialLabel: "@fatbrobkk",
    phone: "080-649-1671",
    socialUrl: "https://www.instagram.com/fatbrobkk/",
  },
];


// Rainforest, Jian Cha, Gohan Gyudon, FatBro, Chubby Boy... Viola Flowers, Analog Skyflow