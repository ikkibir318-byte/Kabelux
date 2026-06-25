import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "uz" | "ru";

type Dict = Record<string, string>;

const dict: Record<Lang, Dict> = {
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.catalog": "Katalog",
    "nav.about": "Biz haqimizda",
    "nav.contact": "Aloqa",
    "cta.request": "Narx so'rash",
    "cta.call": "Qo'ng'iroq qilish",
    "cta.viewCatalog": "Katalogni ko'rish",
    "cta.allProducts": "Barcha mahsulotlar",
    "cta.backToCatalog": "Katalogga qaytish",

    "hero.eyebrow": "O'zbekiston bo'ylab kabel mahsulotlari",
    "hero.title": "Sanoat va qurilish uchun ishonchli kabel",
    "hero.subtitle": "Mis va alyumin kuch kabellari, SIP, KG, optik tolali kabellar. To'g'ridan-to'g'ri omborlardan, sertifikat bilan, qulay narxlarda.",
    "hero.stat1.value": "10+",
    "hero.stat1.label": "yillik tajriba",
    "hero.stat2.value": "700+",
    "hero.stat2.label": "turdagi mahsulot",
    "hero.stat3.value": "24 soat",
    "hero.stat3.label": "yetkazib berish",

    "features.title": "Nega bizni tanlashadi",
    "features.subtitle": "Kichik va o'rta biznes uchun aniq shartlar",
    "features.f1.title": "Sertifikatlangan sifat",
    "features.f1.desc": "Barcha kabellar GOST va O‘z DSt standartlariga muvofiq, pasport va sinov natijalari bilan.",
    "features.f2.title": "Omborda mavjud",
    "features.f2.desc": "Eng ommabop turlar doimo zaxirada — Toshkent va viloyatlarga zudlik bilan jo'natamiz.",
    "features.f3.title": "Optom narxlar",
    "features.f3.desc": "Quruvchilar, montaj brigadalari va do‘konlar uchun moslashuvchan chegirmalar.",
    "features.f4.title": "Texnik maslahat",
    "features.f4.desc": "Loyihangiz uchun to'g'ri kesim va markani bepul tanlab beramiz.",

    "cats.title": "Mahsulot kategoriyalari",
    "cats.subtitle": "Eng ko'p so'raladigan kabel turlari",

    "products.title": "Ommabop pozitsiyalar",
    "products.subtitle": "Doimiy ravishda omborda",
    "products.section": "Kesim",
    "products.price": "Narx so'rov bo'yicha",
    "products.inStock": "Omborda",
    "products.request": "So'rov qoldirish",

    "filter.all": "Hammasi",
    "filter.search": "Qidirish: marka, kesim...",
    "filter.empty": "Hech narsa topilmadi",

    "contact.title": "Aloqaga chiqing",
    "contact.subtitle": "Narxlar ro'yxati va texnik xususiyatlar bo'yicha yozing yoki qo'ng'iroq qiling",
    "contact.phone": "Telefon",
    "contact.address": "Manzil",
    "contact.address.value": "Toshkent sh., Bektemir tumani, Tuyona, 8",
    "contact.hours": "Ish vaqti",
    "contact.hours.value": "Du–Ya: 8:00–18:00",
    "contact.form.name": "Ismingiz",
    "contact.form.phone": "Telefon raqam",
    "contact.form.msg": "Kerakli mahsulot va miqdor",
    "contact.form.send": "Yuborish",
    "contact.form.thanks": "Rahmat! Tez orada bog'lanamiz.",
    "contact.location.title": "Lokatsiya",
    "contact.location.navigate": "Navigatsiya",

    "footer.rights": "Barcha huquqlar himoyalangan",

    "catalog.title": "Mahsulotlar katalogi",
    "catalog.subtitle": "Kuch, boshqaruv, havo va optik kabellarning to'liq ro'yxati",

    "product.notFound": "Mahsulot topilmadi",
    "product.description": "Tavsif",
    "product.advantages": "Afzalliklar",
    "product.application": "Qo'llash sohasi",

    "about.title": "Biz haqimizda",
    "about.subtitle": "Sizning ishonchli kabel hamkoringiz",
  },
  ru: {
    "nav.home": "Главная",
    "nav.catalog": "Каталог",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "cta.request": "Запросить цену",
    "cta.call": "Позвонить",
    "cta.viewCatalog": "Смотреть каталог",
    "cta.allProducts": "Все товары",
    "cta.backToCatalog": "Вернуться в каталог",

    "hero.eyebrow": "Кабельная продукция по всему Узбекистану",
    "hero.title": "Надёжный кабель для промышленности и стройки",
    "hero.subtitle": "Силовые медные и алюминиевые кабели, СИП, КГ, оптоволокно. Со склада, с сертификатами, по выгодной цене.",
    "hero.stat1.value": "10+",
    "hero.stat1.label": "лет на рынке",
    "hero.stat2.value": "700+",
    "hero.stat2.label": "позиций ассортимента",
    "hero.stat3.value": "24 часа",
    "hero.stat3.label": "отгрузка со склада",

    "features.title": "Почему выбирают нас",
    "features.subtitle": "Понятные условия для малого и среднего бизнеса",
    "features.f1.title": "Сертифицированное качество",
    "features.f1.desc": "Вся продукция соответствует ГОСТ и O‘z DSt, с паспортами и протоколами испытаний.",
    "features.f2.title": "Всегда на складе",
    "features.f2.desc": "Ходовые марки в наличии — быстрая отгрузка по Ташкенту и в регионы.",
    "features.f3.title": "Оптовые цены",
    "features.f3.desc": "Гибкая система скидок для строителей, монтажников и магазинов.",
    "features.f4.title": "Техническая поддержка",
    "features.f4.desc": "Бесплатно подберём правильное сечение и марку под ваш проект.",

    "cats.title": "Категории продукции",
    "cats.subtitle": "Самые востребованные типы кабеля",

    "products.title": "Популярные позиции",
    "products.subtitle": "Постоянно в наличии на складе",
    "products.section": "Сечение",
    "products.price": "Цена по запросу",
    "products.inStock": "В наличии",
    "products.request": "Оставить заявку",

    "filter.all": "Все",
    "filter.search": "Поиск: марка, сечение...",
    "filter.empty": "Ничего не найдено",

    "contact.title": "Свяжитесь с нами",
    "contact.subtitle": "Напишите или позвоните — пришлём прайс и техническую спецификацию",
    "contact.phone": "Телефон",
    "contact.address": "Адрес",
    "contact.address.value": "город Ташкент,Бектемирский район,,Туёна, 8",
    "contact.hours": "Время работы",
    "contact.hours.value": "Пн–Пт: 8:00–18:00, без выходных",
    "contact.form.name": "Ваше имя",
    "contact.form.phone": "Номер телефона",
    "contact.form.msg": "Нужный товар и количество",
    "contact.form.send": "Отправить",
    "contact.form.thanks": "Спасибо! Скоро свяжемся с вами.",
    "contact.location.title": "Локация",
    "contact.location.navigate": "Проложить маршрут",

    "footer.tag": "Кабельная продукция оптом и в розницу",
    "footer.rights": "Все права защищены",

    "catalog.title": "Каталог продукции",
    "catalog.subtitle": "Полный список силовых, контрольных, воздушных и оптических кабелей",

    "product.notFound": "Товар не найден",
    "product.description": "Описание",
    "product.advantages": "Преимущества",
    "product.application": "Область применения",

    "about.title": "О компании",
    "about.subtitle": "Ваш надёжный кабельный партнёр",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "uz";
    const saved = localStorage.getItem("lang") as Lang | null;
    return (saved === "uz" || saved === "ru") ? saved : "uz";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) => dict[lang][key] ?? key;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}