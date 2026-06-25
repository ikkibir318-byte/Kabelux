import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { CategoryGrid, Features, FeaturedProducts, ContactCTA } from "@/components/sections";
import { CONTACT } from "@/lib/products";
import { ArrowRight, Phone } from "lucide-react";
import hero from "@/assets/hero-cables.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KABELUX — Kabel mahsulotlari Toshkentda · Кабель в Ташкенте" },
      { name: "description", content: "Silovoy kabellar VVG, KG, SIP, optoволокно. Ulgurji narxlar, ombordan yetkazib berish. ВВГ, КГ, СИП, оптика — оптом и в розницу." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <>
      <Hero />
      <Features />
      <CategoryGrid />
      <FeaturedProducts />
      <ContactCTA />
    </>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0">
        <img src={hero} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-sm border border-copper/30 bg-copper/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
            <span className="h-1.5 w-1.5 rounded-full bg-copper shadow-glow" />
            {t("hero.eyebrow")}
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-sm bg-copper-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:-translate-y-0.5 transition-transform"
            >
              {t("cta.viewCatalog")} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-background/40 px-6 py-3.5 text-sm font-medium hover:border-copper hover:text-copper transition-colors backdrop-blur-sm"
            >
              <Phone className="h-4 w-4" /> {t("cta.call")}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-1 lg:self-end">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex flex-col gap-1 bg-card/80 p-5 backdrop-blur-sm">
              <div className="font-display text-3xl font-bold text-copper sm:text-4xl">{t(`hero.stat${n}.value`)}</div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {t(`hero.stat${n}.label`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
