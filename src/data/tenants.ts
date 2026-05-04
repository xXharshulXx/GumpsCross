export type TenantCategory = "Food" | "Beverage" | "Café";

export type Tenant = {
  slug: string;
  name: string;
  category: TenantCategory;
  floor: "G" | "1" | "2";
  blurb: string;
  logoImage?: string;
  interiorImage?: string;
  heroImage?: string;
  galleryImages?: string[];
  hours: string;
  socialLabel: string;
  phone: string;
  socialUrl: string;
  map: string;
};

export const TENANTS: Tenant[] = [
  {
    slug: "rainforest-cafe",
    name: "Rainforest Café Bangkok",
    category: "Café",
    floor: "G",
    blurb:
      "Originally located in the misty forests at Kanchanaburi, Rainforest Cafe has now brought its enchanting Rainy Season concept to Bangkok. Embracing the romance and melancholy of the rainy season with the soothing sound from raindrops.",
    logoImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IhzFXDxNTAoQbFw2Mcsm4QRZerET3zDhMA&s",
    interiorImage: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqy0KXps0qzL-XR7_R-scmjjgpVwKCPs1-VjEyGNw3QbtB6taNyL7DHgSRakBaBHmCvtk0dOB6GdV1w2xYSGLx1MdttY2eTolavqN5J18WKIP3xnqIB3hKOUfkLJ8DVtuUIZKVH=s1360-w1360-h1020-rw",
    heroImage: "https://lh3.googleusercontent.com/p/AF1QipNyOd7JyYDJtgfR0Q2kRZZG5OkDvoLl5wsKT4G2=s1360-w1360-h1020-rw",
    galleryImages: ["https://lh3.googleusercontent.com/gps-cs-s/AHVAweoJVkElMyeFGl3bgrLUAIU-4n1mNa7vfP8anm9wd77YFNRy_5jhIJWvU4wlETHYa4SMSM94s6_Pk1pQzAV8A-NrOXrldnkZLyHJbh58SXlJ0Qb__u8SD46UKMw-P6JBnuEES09brA=s1360-w1360-h1020-rw",
                    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwervIrOFfbO8y6isBc4hfQapWATpVXhWrRY6GtbwKM-eX56S_5WFWe7yOJVTU13pplhfucypVea-C1EmIv1X1AZlomC8MFsOq8RIQ0EPULV-lrizjalEcdpzFhOytYFoXuQdW5gb4dtmerpd=s1360-w1360-h1020-rw",
                    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoTBOts5_kGZB-oBHHhrGy06aC6YGj9LI0Gb3diyIpgO6MuEsdTaoqtXjXPn5NUKZzMgltlrKgE5fi3FJCtvpPJZ5KsJ0V3Gzjr6xFJdB_F2AakllXHK9JD-E5iAOTHhuPs2WDVGlg1Go7a=s1360-w1360-h1020-rw"
                    ],
    hours: "Daily 08:00–18:00",
    socialLabel: "@rainforestcafe.bkk",
    phone: "02-861-8080",
    socialUrl: "https://www.instagram.com/rainforestcafe.bkk/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.039809170156!2d100.50420497485526!3d13.71603878667213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299fe295f42fd%3A0x3de39e5d1a3c04c9!2sRainforest%20Cafe%20Bangkok!5e0!3m2!1sen!2sth!4v1770724243200!5m2!1sen!2sth",
  },
];
