import { Link } from "@tanstack/react-router";
import { useI18n, type Lang } from "@/lib/i18n";
import { CONTACT } from "@/lib/products";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const LogoIcon = () => (
  <img src="/logo.png" alt="Logo" className="h-9 w-9 object-contain" />
);

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/catalog", label: t("nav.catalog") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center bg-transparent">
            <LogoIcon />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">{CONTACT.brand}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">cable · uz</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:text-copper"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <a
            href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-sm border border-border bg-secondary/40 px-3 py-2 font-mono text-xs text-foreground hover:border-copper hover:text-copper transition-colors sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {CONTACT.phone1}
          </a>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm text-muted-foreground hover:text-copper [&.active]:text-copper"
                activeProps={{ className: "active" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
              className="mt-1 flex items-center gap-2 px-2 py-3 font-mono text-xs text-copper"
            >
              <Phone className="h-3.5 w-3.5" /> {CONTACT.phone1}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center rounded-sm border border-border bg-secondary/40 p-0.5 font-mono text-[11px] uppercase">
      {(["uz", "ru"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-[2px] px-2 py-1 transition-colors ${
            lang === l ? "bg-copper-gradient text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center bg-transparent">
              <LogoIcon />
            </span>
            <span className="font-display text-base font-bold">{CONTACT.brand}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{t("footer.tag")}</p>
        </div>
        <div className="font-mono text-xs text-muted-foreground space-y-2">
          <div>{CONTACT.phone1}</div>
          <div>{CONTACT.phone2}</div>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          <div>{t("contact.address.value")}</div>
          <div className="mt-2">{t("contact.hours.value")}</div>
        </div>
      </div>
      <div className="border-t border-border/60 py-4">
        <div className="mx-auto max-w-7xl px-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {CONTACT.brand} — {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
