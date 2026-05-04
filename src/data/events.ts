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

    startDateIso: "2026-03-07",
    endDateIso: "2026-03-15",

    timeLabel: "10:00–22:00",
    locationLabel: "Atrium, Ground Floor",

    excerpt:
      "Stop by and recharge with art, let design gradually happen around you at GUMP'S Cross X Bangkok Design Week 2026 💡",

    description:
      "🎨 Bangkok Design Week is about to begin! A wide range of activities are spread across Bangkok. GUMP'S CROSS is opening its space for everyone to walk, see, listen, and explore new designs from diverse artists and creators. Let's spark your creativity together! 💡",

    notes:
      "Free entry. Some workshops require prior registration. Seating is limited for selected sessions.",

    heroImage:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200",

    eventImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",

    galleryImages: [
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
    ],
  },

  {
    slug: "architectural-lighting-talk",
    title: "Architectural Lighting: Warmth & Shadow",
    type: "Talk",

    startDateIso: "2026-04-02",

    timeLabel: "19:00–20:30",
    locationLabel: "Level 2 Studio",

    excerpt:
      "A design talk on how lighting shapes mood—plus a Q&A with local designers.",

    description:
      "An intimate evening talk exploring lighting as architecture—how softness, shadow, and texture make a space feel human. Includes a short Q&A and post-talk mingle.",

    notes:
      "RSVP required. Limited to 40 attendees. Doors close 10 minutes after start time.",

    heroImage:
      "https://detaillighting.co.uk/wp-content/uploads/2023/09/Architectural-lighting-design-for-modern-buildings.jpg",

    eventImage:
      "https://illustrarch.com/wp-content/uploads/2025/05/Shadow_and_Illumination_in_Design-5.jpg",
  },

  {
    slug: "matcha-and-ceramics-pop-up",
    title: "Matcha & Ceramics Pop-up",
    type: "Pop-up",

    startDateIso: "2026-02-22",

    timeLabel: "11:00–17:00",
    locationLabel: "Promenade, Level 1",

    excerpt:
      "A one-day collaboration featuring small-batch matcha and handmade ceramic cups.",

    description:
      "A calm, tactile collaboration: taste small-batch matcha while browsing hand-thrown ceramic cups. Limited quantities—arrive early for the full selection.",

    notes:
      "Walk-in event. Products available while stocks last.",

    heroImage:
      "https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=1600",

    galleryImages: [
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200",
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200",
    ],
  },

  {
    slug: "bread-butter-workshop",
    title: "Bread & Butter Workshop",
    type: "Workshop",

    startDateIso: "2026-11-12",

    timeLabel: "14:00–16:00",
    locationLabel: "Kitchen Lab, Ground Floor",

    excerpt:
      "Learn the basics of fermentation and finish with a community tasting table.",

    description:
      "A hands-on workshop covering simple fermentation principles, shaping, and baking. Ends with a shared tasting table and take-home notes.",

    notes:
      "Ticketed event. Includes ingredients and printed recipe guide.",
  },
];
