import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { useI18n } from "@/lib/i18n";
import { categories, products, type CategoryId } from "@/lib/products";
import { ProductCard } from "@/components/sections";
import { Search } from "lucide-react";

const searchSchema = z.object({
  cat: z.enum(["power", "flex", "sip", "optic", "control", "house"]).optional(),
});

export const Route = createFileRoute("/catalog")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Katalog · Каталог кабельной продукции — KABELUX" },
      { name: "description", content: "To'liq kabel katalogi: kuch, boshqaruv, SIP, optik, maishiy simlar. Полный каталог кабельной продукции." },
      { property: "og:title", content: "Katalog · Каталог" },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const { t, lang } = useI18n();
  const { cat } = Route.useSearch();
  const navigate = useNavigate({ from: "/catalog" });
  const [q, setQ] = useState("");

  const setCat = (next: CategoryId | undefined) => {
    navigate({ search: next ? { cat: next } : {} });
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (cat && p.category !== cat) return false;
      if (q.trim()) {
        const needle = q.toLowerCase();
        const hay = [p.brand, ...p.sections, p.spec.uz, p.spec.ru].join(" ").toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [cat, q]);

  return (
    <>
      <section className="border-b border-border/60 bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">// catalog</div>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">{t("catalog.title")}</h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">{t("catalog.subtitle")}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterChip active={!cat} onClick={() => setCat(undefined)}>{t("filter.all")}</FilterChip>
              {categories.filter(c => products.some(p => p.category === c.id)).map((c) => (
                <FilterChip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)}>
                  {c.name[lang]}
                </FilterChip>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("filter.search")}
                className="w-full rounded-sm border border-border bg-input/40 py-2.5 pl-9 pr-3 font-mono text-sm outline-none focus:border-copper"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-md border border-dashed border-border bg-card/40 p-16 text-center text-muted-foreground">
              {t("filter.empty")}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
        active
          ? "border-copper bg-copper/10 text-copper"
          : "border-border bg-secondary/40 text-muted-foreground hover:border-copper/60 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
