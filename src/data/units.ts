export type UnitFrontage = "Atrium" | "Promenade" | "Corner" | "Studio";

export type Unit = {
  slug: string;
  label: string;
  floor: "G" | "1" | "2";
  sizeSqm: number;
  frontage: UnitFrontage;

  summary: string;
  notes?: string;

  heroImage?: string;
  interiorImage?: string;
  floorPlanImage?: string;
  galleryImages?: string[];

  availability: "Available" | "Reserved" | "Leased";
};

export const UNITS: Unit[] = [
  {
    slug: "g-01",
    label: "Unit G-01",
    floor: "G",
    sizeSqm: 42,
    frontage: "Atrium",

    summary:
      "High-visibility ground-floor corner near the atrium—ideal for café counter concepts or grab-and-go formats.",

    notes:
      "Grease trap ready. Water supply and drainage installed. Suitable for beverage-led concepts. Subject to landlord approval.",

    heroImage:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600",

    interiorImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600",

    floorPlanImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600",

    galleryImages: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600",
    ],

    availability: "Available",
  },

  {
    slug: "1-07",
    label: "Unit 1-07",
    floor: "1",
    sizeSqm: 68,
    frontage: "Promenade",

    summary:
      "Long promenade frontage with soft daylight—suited to food & beverage brands with dine-in seating.",

    notes:
      "High ceiling clearance. Shared exhaust shaft accessible. Outdoor seating possible upon approval.",

    heroImage:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600",

    interiorImage:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1600",

    floorPlanImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600",

    galleryImages: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1600",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600",
    ],

    availability: "Available",
  },

  {
    slug: "2-03",
    label: "Unit 2-03",
    floor: "2",
    sizeSqm: 55,
    frontage: "Studio",

    summary:
      "A quieter studio-adjacent unit—great for workshops, tasting rooms, wellness concepts, or appointment-based retail.",

    notes:
      "Best suited for low-noise operations. Ideal for creative studios, consultations, or experiential retail.",

    heroImage:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600",

    interiorImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600",

    floorPlanImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600",

    galleryImages: [
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600",
    ],

    availability: "Reserved",
  },
];
