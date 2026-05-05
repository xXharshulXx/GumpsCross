import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Tag } from "@/components/Tag";
import { TENANTS, type TenantCategory } from "@/data/tenants";
import { Dropdown } from "@/components/Dropdown";

type FloorFilter = "All" | "G" | "1" | "2";
type CategoryFilter = "All" | TenantCategory;
type SortMode = "A–Z" | "Z–A";

export function Directory() {
  const [floor, setFloor] = useState<FloorFilter>("All");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [sort, setSort] = useState<SortMode>("A–Z");

  const filtered = useMemo(() => {
    let list = [...TENANTS];

    if (floor !== "All") list = list.filter((t) => t.floor === floor);
    if (category !== "All") list = list.filter((t) => t.category === category);

    list.sort((a, b) =>
      sort === "A–Z"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return list;
  }, [floor, category, sort]);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 cursor-default">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Directory"
          title="Explore the curated mix."
          description="Filter by floor and category, or browse alphabetically."
        />

        {/* Filters */}
        <div className="grid gap-4 rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm md:grid-cols-3">
          
          {/* FLOOR */}
          <label className="space-y-2">


            <div className="relative">
              <Dropdown
                label="By Floor"
                value={floor}
                onChange={(v) => setFloor(v as FloorFilter)}
                options={[
                  { label: "All", value: "All" },
                  { label: "Mezzanine (M)", value: "M" },
                  { label: "Floor 1", value: "1" },
                  { label: "Floor 2", value: "2" },
                  { label: "Floor 3", value: "3" },
                  { label: "Floor 4", value: "4" },
                  { label: "Floor 5", value: "5" },

                ]}
              />
            </div>
          </label>

          {/* CATEGORY */}
          <label className="space-y-2">

            <div className="relative">
              <Dropdown
                label="By Category"
                value={category}
                onChange={(v) => setCategory(v as CategoryFilter)}
                options={[
                  { label: "All", value: "All" },
                  { label: "Food", value: "Food" },
                  { label: "Beverage", value: "Beverage" },
                  { label: "Café", value: "Café" },
                  { label: "Other", value: "Other" },
                ]}
              />


            </div>
          </label>

          {/* SORT */}
          <label className="space-y-2">


            <div className="relative">
              <Dropdown
                label="Alphabetical"
                value={sort}
                onChange={(v) => setSort(v as SortMode)}
                options={[
                  { label: "A–Z", value: "A–Z" },
                  { label: "Z–A", value: "Z–A" },
                ]}
              />


            </div>
          </label>

        </div>

        {/* Tenant Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <Link
              key={t.slug}
              to={`/directory/${t.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-[rgba(251,248,243,.72)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg tracking-tight text-(--gc-charcoal)">
                    {t.name}
                  </div>
                  <Tag>Floor {t.floor}</Tag>
                </div>

                <div className="mt-3 text-sm text-(--gc-taupe)">
                  {t.category}
                </div>

                {/* Media */}
                <div className="relative mt-6">
                  <div className="transition group-hover:opacity-0">
                    {t.logoImage ? (
                      <img
                        src={t.logoImage}
                        alt={`${t.name} logo`}
                        className="aspect-video w-full rounded-xl object-cover"
                      />
                    ) : (
                      <PlaceholderMedia
                        label="[PLACEHOLDER: TENANT LOGO]"
                        className="aspect-video"
                        tone="sand"
                      />
                    )}
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    {t.interiorImage ? (
                      <img
                        src={t.interiorImage}
                        alt={`${t.name} interior`}
                        className="aspect-video w-full rounded-xl object-cover"
                      />
                    ) : (
                      <PlaceholderMedia
                        label="[PLACEHOLDER: TENANT INTERIOR IMAGE]"
                        className="aspect-video"
                        tone="blue"
                      />
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
