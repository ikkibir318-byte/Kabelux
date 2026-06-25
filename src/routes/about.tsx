import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Factory, ShieldCheck, Truck, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Biz haqimizda · О компании — KABELUX" },
      { name: "description", content: "KABELUX — Toshkentdagi ishonchli kabel ta'minotchisi. Надёжный поставщик кабельной продукции в Узбекистане." },
      { property: "og:title", content: "Biz haqimizda · О компании" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, lang } = useI18n();
  const blocks = lang === "uz" ? blocksUz : blocksRu;

  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">// about</div>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">{t("about.title")}</h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">{t("about.subtitle")}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {blocks.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {[
              { icon: Factory, label: lang === "uz" ? "Ishlab chiqaruvchilar bilan to'g'ridan-to'g'ri" : "Прямо от заводов" },
              { icon: ShieldCheck, label: lang === "uz" ? "Sertifikatlar va kafolatlar" : "Сертификаты и гарантии" },
              { icon: Truck, label: lang === "uz" ? "Tezkor logistika" : "Быстрая логистика" },
              { icon: Users, label: lang === "uz" ? "Doimiy mijozlarga chegirma" : "Скидки постоянным клиентам" },
            ].map((b, i) => (
              <div key={i} className="flex flex-col gap-3 bg-card p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-copper-gradient text-primary-foreground">
                  <b.icon className="h-4 w-4" />
                </span>
                <div className="font-display text-sm font-semibold">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const blocksUz = [
  "KABELUX — Toshkentdagi mustaqil kabel mahsulotlari ta'minotchisi. Biz qurilish kompaniyalari, montaj brigadalari, do'konlar va xususiy mijozlar bilan ishlaymiz.",
  "Bizning omborlarimizda kuch, boshqaruv, havo va optik kabellarning eng ko'p so'raladigan markalari doimo zaxirada saqlanadi. O'zbekiston bo'ylab tezkor yetkazib berishni tashkil etamiz.",
  "Har bir mahsulot uchun sertifikat va texnik pasportni taqdim etamiz. Loyihangiz uchun to'g'ri kabelni tanlashda bepul texnik maslahat beramiz.",
];

const blocksRu = [
  "KABELUX — независимый поставщик кабельной продукции в Ташкенте. Мы работаем со строительными компаниями, монтажными бригадами, магазинами электротоваров и частными заказчиками.",
  "На наших складах всегда в наличии самые ходовые марки силовых, контрольных, воздушных и оптических кабелей. Организуем быструю доставку по всему Узбекистану.",
  "На каждый товар предоставляем сертификат соответствия и технический паспорт. Бесплатно консультируем по подбору правильной марки и сечения под ваш проект.",
];
