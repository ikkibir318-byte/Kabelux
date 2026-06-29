import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { z } from "zod";
import { useI18n } from "@/lib/i18n";
import { products, categories, CONTACT, type Product } from "@/lib/products";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const productSchema = z.object({
  id: z.string().optional(),
});

export const Route = createFileRoute("/product")({
  validateSearch: productSchema,
  beforeLoad: ({ search }) => {
    if (!search.id) {
      throw redirect({
        to: "/",
        replace: true,
      });
    }
  },
  component: ProductPage,
});

function ProductPage() {
  const { t, lang } = useI18n();
  const { id } = Route.useSearch();
  const navigate = useNavigate({ from: "/product" });
  
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t("product.notFound")}</h1>
          <Link to="/catalog" className="text-copper hover:underline">
            {t("cta.backToCatalog")}
          </Link>
        </div>
      </div>
    );
  }
  
  const cat = categories.find((c) => c.id === product.category)!;
  
  return (
    <>
      <section className="border-b border-border/60 bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Link
            to="/catalog"
            search={{ cat: product.category }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("cta.backToCatalog")}
          </Link>
          
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
            {cat.name[lang]}
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">{product.brand}</h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">{product.spec[lang]}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Изображение */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-card">
              <img
                src={product.image || cat.image}
                alt={product.brand}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Информация */}
            <div className="flex flex-col gap-8">
              {/* Описание */}
              {product.description && (
                <div>
                  <h2 className="font-display text-xl font-bold mb-3">{t("product.description")}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description[lang]}
                  </p>
                </div>
              )}

              {/* Преимущества */}
              {product.advantages && product.advantages[lang].length > 0 && (
                <div>
                  <h2 className="font-display text-xl font-bold mb-3">{t("product.advantages")}</h2>
                  <ul className="space-y-2">
                    {product.advantages[lang].map((advantage, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-copper/10 text-copper mt-0.5">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-muted-foreground">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Область применения */}
              {product.application && (
                <div>
                  <h2 className="font-display text-xl font-bold mb-3">{t("product.application")}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.application[lang]}
                  </p>
                </div>
              )}

              {/* Сечения */}
              <div>
                <h2 className="font-display text-xl font-bold mb-3">{t("products.section")}</h2>
                <div className="flex flex-wrap gap-2">
                  {product.sections.map((s) => (
                    <span key={s} className="rounded-sm border border-border bg-secondary/40 px-3 py-1.5 font-mono text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Кнопка связи */}
              <div className="pt-4 border-t border-border">
                <a
                  href={`https://t.me/${CONTACT.telegram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-copper-gradient px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {t("products.request")} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
