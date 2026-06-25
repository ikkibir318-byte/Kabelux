import { useI18n } from "@/lib/i18n";
import { products, categories, CONTACT, type Product } from "@/lib/products";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Navigation } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { lang, t } = useI18n();
  const cat = categories.find((c) => c.id === product.category)!;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-panel transition-colors hover:border-copper/60">
      <Link to="/product" search={{ id: product.id }} className="absolute inset-0 z-10">
        <span className="sr-only">Подробнее о {product.brand}</span>
      </Link>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-sm bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
          {t("products.inStock")}
        </div>
        <div className="absolute inset-0 bg-white" />
        <img
          src={product.image || cat.image}
          alt={product.brand}
          loading="lazy"
          width={800}
          height={600}
          className="relative z-10 h-full w-full object-contain p-6"
          onError={(e) => {
            e.currentTarget.src = cat.image;
          }}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {cat.name[lang]}
        </div>
        <h3 className="mt-1 font-display text-lg font-bold tracking-tight">{product.brand}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{product.spec[lang]}</p>

        <div className="mt-3">
          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {t("products.section")}
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {product.sections.map((s) => (
              <span key={s} className="rounded-sm border border-border bg-secondary/40 px-1.5 py-0.5 font-mono text-[11px] text-foreground">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div className="text-xs text-muted-foreground">{t("products.price")}</div>
          <a
            href={`https://t.me/${CONTACT.telegram}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="relative z-20 inline-flex items-center gap-1.5 rounded-sm bg-copper-gradient px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {t("products.request")} <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function FeaturedProducts() {
  const { t } = useI18n();
  const featured = products.slice(0, 6);
  return (
    <section className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="// 03" title={t("products.title")} subtitle={t("products.subtitle")} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium hover:border-copper hover:text-copper transition-colors"
          >
            {t("cta.allProducts")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function CategoryGrid() {
  const { t, lang } = useI18n();
  return (
    <section id="categories" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="// 02" title={t("cats.title")} subtitle={t("cats.subtitle")} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              to="/catalog"
              search={{ cat: c.id }}
              className="group relative flex aspect-[4/3] overflow-hidden rounded-md border border-border bg-card shadow-panel transition-colors hover:border-copper/60"
            >
              <img
                src={c.image}
                alt={c.name[lang]}
                loading="lazy"
                width={800}
                height={600}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="relative z-10 flex w-full flex-col justify-between p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
                  {String(i + 1).padStart(2, "0")} / {categories.length}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight">{c.name[lang]}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc[lang]}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-foreground/80 group-hover:text-copper">
                    {t("cta.viewCatalog")} <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4].map((n) => ({
    title: t(`features.f${n}.title`),
    desc: t(`features.f${n}.desc`),
  }));
  return (
    <section className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="// 01" title={t("features.title")} subtitle={t("features.subtitle")} />
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <div key={i} className="flex flex-col gap-3 bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-copper-gradient text-primary-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-display text-lg font-bold leading-tight">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  const { t } = useI18n();
  return (
    <section id="contact" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-border bg-card shadow-panel">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <SectionHeader eyebrow="// 04" title={t("contact.title")} subtitle={t("contact.subtitle")} />
              <div className="mt-8 space-y-5 font-mono text-sm">
                <ContactRow label={t("contact.phone")} value={
                  <div className="flex flex-col gap-1">
                    <a href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`} className="hover:text-copper">{CONTACT.phone1}</a>
                    <a href={`tel:${CONTACT.phone2.replace(/\s/g, "")}`} className="hover:text-copper">{CONTACT.phone2}</a>
                  </div>
                } />
                <ContactRow label={t("contact.address")} value={t("contact.address.value")} />
                <ContactRow label={t("contact.hours")} value={t("contact.hours.value")} />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://t.me/${CONTACT.telegram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-copper-gradient px-5 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform"
                >
                  Telegram
                </a>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <h3 className="font-display text-xl font-bold mb-4">{t("contact.location.title")}</h3>
              <p className="text-muted-foreground mb-6">{CONTACT.address}</p>
              
              {/* Yandex Map */}
              <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-card mb-6">
                <iframe
                  src={`https://yandex.com/map-widget/v1/?ll=${CONTACT.location.lng},${CONTACT.location.lat}&z=15&l=map&pt=${CONTACT.location.lng},${CONTACT.location.lat},pm2rdm`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                />
              </div>

              {/* Navigation button */}
              <div className="flex flex-col gap-3">
                <a
                  href={`https://yandex.com/maps/?pt=${CONTACT.location.lng},${CONTACT.location.lat}&z=15&l=map&rtext=${CONTACT.location.lat},${CONTACT.location.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-copper-gradient px-4 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform"
                >
                  <Navigation className="h-4 w-4" />
                  {t("contact.location.navigate")} (Yandex Maps)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-border/60 pb-4 last:border-0">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-foreground">{value}</div>
    </div>
  );
}

import { useState } from "react";
function ContactForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-4 p-8 sm:p-12"
    >
      <Field label={t("contact.form.name")}>
        <input required type="text" className="w-full rounded-sm border border-border bg-input/40 px-3 py-2.5 text-sm outline-none focus:border-copper" />
      </Field>
      <Field label={t("contact.form.phone")}>
        <input required type="tel" className="w-full rounded-sm border border-border bg-input/40 px-3 py-2.5 text-sm outline-none focus:border-copper" />
      </Field>
      <Field label={t("contact.form.msg")}>
        <textarea rows={5} className="w-full resize-none rounded-sm border border-border bg-input/40 px-3 py-2.5 text-sm outline-none focus:border-copper" />
      </Field>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-copper-gradient px-5 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform"
      >
        {t("contact.form.send")}
      </button>
      {sent && <div className="rounded-sm border border-copper/40 bg-copper/10 px-3 py-2 text-sm text-copper">{t("contact.form.thanks")}</div>}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
