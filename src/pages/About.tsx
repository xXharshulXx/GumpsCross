import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Card } from "@/components/Card";

const values = [
  {
    title: "Community",
    description:
      "Programming and spaces designed for real people—slow moments, conversations, and repeat visits.",
  },
  {
    title: "Design",
    description:
      "Editorial, architectural, breathable. Materials and details that feel warm and intentional.",
  },
  {
    title: "Adaptive Reuse",
    description:
      "A thoughtful approach to place-making—keeping what matters and evolving what’s possible.",
  },
  {
    title: "Lifestyle",
    description:
      "A curated blend of café and F&B concepts that fits naturally into everyday routines.",
  },
];

export function About() {
  return (
    <div>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[rgba(242,232,221,.35)] cursor-default">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="About Us"
            title="Get to Know Us"
            description="Discover the story, approach, and vision that shape our space." 
          />

          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="space-y-10 text-[15px] leading-7 text-(--gc-taupe) md:text-base">
              <p className="pt-12">
                Gump’s Cross was imagined as a place shaped by rhythm rather than rush — a space where everyday moments are given room to unfold. Building on the spirit of Gump’s Ari, this second community space continues an exploration of how design, culture, and community can quietly coexist.
              </p>
              <p>
                Located along Charoen Nakhon Road, the project brings together cafés, shops, art, and lifestyle spaces within a series of connected shophouses. Rather than imposing a singular identity, the space was designed as a framework — open, adaptable, and led by the people and ideas that move through it.
              </p>
              <p>
                A conscious decision was made to work with what already existed. The transformation focused on light, movement, and flow, allowing the architecture to guide experience and create moments of pause, gathering, and exchange throughout the space.
              </p>
              <p>
                Today, Gump’s Cross lives through everyday rituals and shared experiences. From quiet mornings to lively evenings, it continues to evolve — a calm, curated crossroad shaped by those who visit, stay, and return.
              </p>
            </div>
            <div className="space-y-4">
              <PlaceholderMedia
                label="Architectural Detail"
                className="aspect-4/3"
                tone="stone"
                src="https://lh3.googleusercontent.com/p/AF1QipNsHDzX3tTxfKfrucI305RrXQITiWz5FhA6JxhK=s1360-w1360-h1020-rw"
              />
              <PlaceholderMedia
                label="Light & Shadow"
                className="aspect-16/10"
                tone="blue"
                src="https://lh3.googleusercontent.com/p/AF1QipPVIanaq9KcCK8lcjhwVx9vFCX7L6woxLmSRsE1=s1360-w1360-h1020-rw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 cursor-default">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Values"
            title="What guides the space"
            description="The principles that quietly shape how we design, curate, and create space for community." 
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="bg-[rgba(251,248,243,.7)]">
                <div className="space-y-3">
                  <div className="text-lg tracking-tight text-(--gc-charcoal)">{v.title}</div>
                  <p className="text-sm leading-6 text-(--gc-taupe)">{v.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      
      <section className="bg-[rgba(242,232,221,.35)] py-16 md:py-24 cursor-default">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Architecture"
            title="Spaces that hold atmosphere"
            description="Architecture designed to shape light, movement, and feeling." 
          />
          <div className="grid gap-4 md:grid-cols-3">
            <PlaceholderMedia label="[PLACEHOLDER: ARCHITECTURE IMAGES]" src="https://lh3.googleusercontent.com/p/AF1QipPtgZe_NKwKwYyW_InI1MlnVcq_e3WUF8ZyNhjD=s1360-w1360-h1020-rw" className="aspect-4/5" tone="stone" />
            <PlaceholderMedia label="[PLACEHOLDER: ARCHITECTURE IMAGES]" src="https://lh3.googleusercontent.com/p/AF1QipM96ySMGfHTkK7xjuV3MmZO4phEpY5Q-iU5QbdB=s1360-w1360-h1020-rw" className="aspect-4/5" tone="blue" />
            <PlaceholderMedia label="[PLACEHOLDER: ARCHITECTURE IMAGES]" src="https://lh3.googleusercontent.com/p/AF1QipNf4EmfgDX3iWDKbZH7V2hDtR893_z0w6Dpq5pC=s1360-w1360-h1020-rw" className="aspect-4/5" tone="sand" />
          </div>
        </Container>
      </section>
    </div>
  );
}
