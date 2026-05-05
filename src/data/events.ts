export type EventType = "Workshop" | "Pop-up" | "Talk" | "Community";

export type Event = {
  slug: string;
  title: string;
  type: EventType;

  startDateIso: string;
  endDateIso?: string;

  timeLabel: string;
  locationLabel: string;

  excerpt: string;
  description: string;

  // NEW
  notes?: string;

  heroImage?: string;
  eventImage?: string;
  galleryImages?: string[];
};

export const EVENTS: Event[] = [
  {
    slug: "bangkok-design-week",
    title: "Bangkok Design Week",
    type: "Workshop",

    startDateIso: "2026-01-29",
    endDateIso: "2027-02-08",

    timeLabel: "10:00–22:00",
    locationLabel: "Atrium, Ground Floor",

    excerpt:
      "Stop by and recharge with art, let design gradually happen around you at GUMP'S Cross X Bangkok Design Week 2026 💡",

    description:
      "🎨 Bangkok Design Week is about to begin! A wide range of activities are spread across Bangkok. GUMP'S CROSS is opening its space for everyone to walk, see, listen, and explore new designs from diverse artists and creators. Let's spark your creativity together! 💡",

    notes:
      "Free entry. Some workshops require prior registration. Seating is limited for selected sessions.",

    heroImage:
      "public/images/events/BkkDesignWeek/entrance.jpg",

    eventImage:
      "public/images/events/BkkDesignWeek/hero.jpg",

    galleryImages: [
      "public/images/events/BkkDesignWeek/gallery1.jpg",
      "public/images/events/BkkDesignWeek/gallery2.jpg",
    ],
  },

];
