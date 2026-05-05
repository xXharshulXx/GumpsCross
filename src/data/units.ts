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
    slug: "1-01",
    label: "Unit 1-01",
    floor: "1",
    sizeSqm: 42,
    frontage: "Promenade",

    summary:
      "High-visibility ground-floor corner near the promenade—ideal for café counter concepts or grab-and-go formats.",

    notes:
      "Suitable for beverage-led concepts. Subject to landlord approval.",

    heroImage:
      "/images/units/pacamara/frontimage.webp",

    interiorImage:
      "/images/units/pacamara/frontimage.webp",

    floorPlanImage:
      "/images/units/pacamara/frontimage.webp",

    galleryImages: [
      "/images/units/pacamara/Outdoors.webp",
      "/images/units/pacamara/frontimage.webp",
      
    ],

    availability: "Available",
  },
];
