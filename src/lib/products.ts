import catPower from "@/assets/cat-power.jpg";
import catFlex from "@/assets/cat-flex.jpg";
import catSip from "@/assets/cat-sip.jpg";
import catOptic from "@/assets/cat-optic.jpg";
import catControl from "@/assets/cat-control.jpg";
import catHouse from "@/assets/cat-house.jpg";

export type CategoryId = "power" | "flex" | "sip" | "optic" | "control" | "house";

export const categories: {
  id: CategoryId;
  image: string;
  name: { uz: string; ru: string };
  desc: { uz: string; ru: string };
}[] = [
  {
    id: "power",
    image: catPower,
    name: { uz: "Kuch kabellari", ru: "Силовые кабели" },
    desc: { uz: "VVG, VVGng, AVVG — bino va sanoat uchun", ru: "ВВГ, ВВГнг, АВВГ — для зданий и промышленности" },
  },
  {
    id: "flex",
    image: catFlex,
    name: { uz: "Egiluvchan kabellar", ru: "Гибкие кабели" },
    desc: { uz: "KG, PVS — payvandlash va ko'chma uskunalar", ru: "КГ, ПВС — сварка и переносное оборудование" },
  },
  {
    id: "sip",
    image: catSip,
    name: { uz: "SIP — havo kabellari", ru: "СИП — самонесущие" },
    desc: { uz: "Havo elektr uzatish liniyalari uchun", ru: "Для воздушных линий электропередач" },
  },
  {
    id: "control",
    image: catControl,
    name: { uz: "Boshqaruv kabellari", ru: "Контрольные кабели" },
    desc: { uz: "KVVG, KVVGng — avtomatika tizimlari", ru: "КВВГ, КВВГнг — системы автоматики" },
  },
  {
    id: "optic",
    image: catOptic,
    name: { uz: "Optik tolali", ru: "Оптоволоконные" },
    desc: { uz: "Tashqi va ichki yotqizish uchun", ru: "Для внутренней и наружной прокладки" },
  },
  {
    id: "house",
    image: catHouse,
    name: { uz: "Maishiy simlar", ru: "Бытовые провода" },
    desc: { uz: "PVS, ShVVP — uy elektr o'tkazgichlari", ru: "ПВС, ШВВП — домашняя электропроводка" },
  },
];

export type Product = {
  id: string;
  category: CategoryId;
  brand: string;
  sections: string[]; // e.g. "3x2.5"
  spec: { uz: string; ru: string };
  image?: string; // URL картинки товара
  description?: { uz: string; ru: string }; // Подробное описание
  advantages?: { uz: string[]; ru: string[] }; // Преимущества
  application?: { uz: string; ru: string }; // Область применения
};

export const products: Product[] = [
  // Силовые кабели
  { id: "avbbshv-4x240", category: "power", brand: "АВБбШв", sections: ["4х240"], spec: { uz: "Alyumin tomirli kuch kabeli, zirhli", ru: "Силовой кабель с алюминиевыми жилами, бронированный" }, image: "https://procab.uz/wp-content/uploads/2025/11/avbshvng-4h240.png",
    description: {
      uz: "АВБбШв 4х240 — bu zirhlangan kuch kabeli, mexanik ta'sirlarga qarshi yuqori chidamlik uchun mo'ljallangan. 240 mm² kesimdagi alyumin tomirlar va ikki qatlamli qobiq (birinchi PVX, ikkinchi zirhli) tufayli kabel og'ir sharoitlarda ishlashga moslashgan.",
      ru: "АВБбШв 4х240 — это бронированный силовой кабель, предназначенный для высокой устойчивости к механическим воздействиям. Благодаря алюминиевым жилам сечением 240 мм² и двухслойной оболочке (первая ПВХ, вторая бронированная), кабель адаптирован для работы в тяжелых условиях."
    },
    advantages: {
      uz: ["Yuqori mexanik mustahkamlik", "Zirhli himoya", "Yerga yotqizish uchun mos", "Uzoq muddatli ishlash", "Tashqi ta'sirlarga chidamlilik", "Sanoat sharoitlarida ishlashga mos"],
      ru: ["Высокая механическая прочность", "Бронированная защита", "Подходит для прокладки в земле", "Долговечность в эксплуатации", "Устойчивость к внешним воздействиям", "Адаптирован для работы в промышленных условиях"]
    },
    application: {
      uz: "Kabel sanoat ob'ektlarida, ostona ostida yotqizish uchun, og'ir mexanik sharoitlarda, yer osti tizimlarida, elektr taqsimlash punktlarida va quvvat stantsiyalarida qo'llaniladi. U mexanik zararga va atrof-muhit ta'siriga qarshi yuqori himoyani ta'minlaydi.",
      ru: "Кабель применяется в промышленных объектах, для прокладки под землей, в тяжелых механических условиях, в подземных системах, распределительных пунктах и на электростанциях. Он обеспечивает высокую защиту от механических повреждений и воздействий окружающей среды."
    }
  },
  { id: "avvg-1x240", category: "power", brand: "АВВГ", sections: ["1х240"], spec: { uz: "Alyumin tomirli kuch kabeli", ru: "Силовой кабель с алюминиевыми жилами" }, image: "https://procab.uz/wp-content/uploads/2025/11/avvg.png",
    description: {
      uz: "АВВГ 1х240 — bu PVX izolyatsiyali alyumin tomirli kuch kabeli, statsionar qurilmalarda elektr uzatish uchun mo'ljallangan. 240 mm² kesimdagi alyumin tomirlar va PVX izolyatsiya tufayli kabel iqtisodiy va samarali yechim bo'lib xizmat qiladi.",
      ru: "АВВГ 1х240 — это силовой кабель с алюминиевыми жилами и ПВХ-изоляцией, предназначенный для передачи электроэнергии в стационарных установках. Благодаря алюминиевым жилам сечением 240 мм² и ПВХ-изоляции, кабель является экономичным и эффективным решением."
    },
    advantages: {
      uz: ["Iqtisodiy narx", "Yengil vazn", "Oson o'rnatish", "PVX izolyatsiyali", "Uzoq muddatli ishlash", "Atrof-muhitga chidamlilik"],
      ru: ["Экономичная цена", "Легкий вес", "Простая установка", "ПВХ-изоляция", "Долговечность в эксплуатации", "Устойчивость к окружающей среде"]
    },
    application: {
      uz: "Kabel sanoat va fuqarolik ob'ektlarida, elektr tarmoqlarida, taqsimlash qurilmalarida va statsionar qurilmalarda qo'llaniladi. U ochiq joylarda va xonalar ichida yotqizish uchun moslashgan.",
      ru: "Кабель применяется в промышленных и гражданских объектах, электрических сетях, распределительных устройствах и стационарных установках. Он адаптирован для прокладки на открытом воздухе и внутри помещений."
    }
  },
  { id: "avvg-2x16", category: "power", brand: "АВВГ", sections: ["2х16"], spec: { uz: "Alyumin tomirli kuch kabeli", ru: "Силовой кабель с алюминиевыми жилами" }, image: "https://procab.uz/wp-content/uploads/2025/11/avvg.png",
    description: {
      uz: "АВВГ 2х16 — bu PVX izolyatsiyali alyumin tomirli kuch kabeli, statsionar qurilmalarda elektr uzatish uchun mo'ljallangan. 16 mm² kesimdagi alyumin tomirlar va PVX izolyatsiya tufayli kabel iqtisodiy va samarali yechim bo'lib xizmat qiladi.",
      ru: "АВВГ 2х16 — это силовой кабель с алюминиевыми жилами и ПВХ-изоляцией, предназначенный для передачи электроэнергии в стационарных установках. Благодаря алюминиевым жилам сечением 16 мм² и ПВХ-изоляции, кабель является экономичным и эффективным решением."
    },
    advantages: {
      uz: ["Iqtisodiy narx", "Yengil vazn", "Oson o'rnatish", "PVX izolyatsiyali", "Uzoq muddatli ishlash", "Atrof-muhitga chidamlilik"],
      ru: ["Экономичная цена", "Легкий вес", "Простая установка", "ПВХ-изоляция", "Долговечность в эксплуатации", "Устойчивость к окружающей среде"]
    },
    application: {
      uz: "Kabel sanoat va fuqarolik ob'ektlarida, elektr tarmoqlarida, taqsimlash qurilmalarida va statsionar qurilmalarda qo'llaniladi. U ochiq joylarda va xonalar ichida yotqizish uchun moslashgan.",
      ru: "Кабель применяется в промышленных и гражданских объектах, электрических сетях, распределительных устройствах и стационарных установках. Он адаптирован для прокладки на открытом воздухе и внутри помещений."
    }
  },
  { id: "avvg-4x10", category: "power", brand: "АВВГ", sections: ["4х10"], spec: { uz: "Alyumin tomirli kuch kabeli", ru: "Силовой кабель с алюминиевыми жилами" }, image: "https://procab.uz/wp-content/uploads/2025/11/avvg.png",
    description: {
      uz: "АВВГ 4х10 — bu PVX izolyatsiyali alyumin tomirli kuch kabeli, statsionar qurilmalarda elektr uzatish uchun mo'ljallangan. 10 mm² kesimdagi alyumin tomirlar va PVX izolyatsiya tufayli kabel iqtisodiy va samarali yechim bo'lib xizmat qiladi.",
      ru: "АВВГ 4х10 — это силовой кабель с алюминиевыми жилами и ПВХ-изоляцией, предназначенный для передачи электроэнергии в стационарных установках. Благодаря алюминиевым жилам сечением 10 мм² и ПВХ-изоляции, кабель является экономичным и эффективным решением."
    },
    advantages: {
      uz: ["Iqtisodiy narx", "Yengil vazn", "Oson o'rnatish", "PVX izolyatsiyali", "Uzoq muddatli ishlash", "Atrof-muhitga chidamlilik"],
      ru: ["Экономичная цена", "Легкий вес", "Простая установка", "ПВХ-изоляция", "Долговечность в эксплуатации", "Устойчивость к окружающей среде"]
    },
    application: {
      uz: "Kabel sanoat va fuqarolik ob'ektlarida, elektr tarmoqlarida, taqsimlash qurilmalarida va statsionar qurilmalarda qo'llaniladi. U ochiq joylarda va xonalar ichida yotqizish uchun moslashgan.",
      ru: "Кабель применяется в промышленных и гражданских объектах, электрических сетях, распределительных устройствах и стационарных установках. Он адаптирован для прокладки на открытом воздухе и внутри помещений."
    }
  },
  { id: "apvpu-1x120", category: "power", brand: "АПвПУ", sections: ["1х120/16-10"], spec: { uz: "Sshitoy polietilen izolyatsiyali kuch kabeli", ru: "Силовой кабель с изоляцией из сшитого полиэтилена" }, image: "https://procab.uz/wp-content/uploads/2025/11/apvpu.png",
    description: {
      uz: "АПвПУ 1х120/16-10 — bu sshitoy polietilen izolyatsiyali kuch kabeli, yuqori kuchlanishli tarmoqlarda elektr uzatish uchun mo'ljallangan. 120 mm² kesimdagi mis tomirlar va polietilen izolyatsiya tufayli kabel yuqori ishlash xarakteristikalariga ega.",
      ru: "АПвПУ 1х120/16-10 — это силовой кабель с изоляцией из сшитого полиэтилена, предназначенный для передачи электроэнергии в сетях с высоким напряжением. Благодаря медным жилам сечением 120 мм² и полиэтиленовой изоляции, кабель обладает высокими рабочими характеристиками."
    },
    advantages: {
      uz: ["Yuqori haroratga chidamlilik", "Kislorod va quyosh nurlariga chidamlilik", "Uzoq muddatli ishlash muddati", "Mukammal elektr izolyatsiya", "Atrof-muhitga zararsiz", "Yong'inga chidamli xususiyatlar"],
      ru: ["Высокая термостойкость", "Устойчивость к кислороду и солнечному излучению", "Долговечность в эксплуатации", "Отличная электрическая изоляция", "Экологическая безопасность", "Огнестойкие свойства"]
    },
    application: {
      uz: "Kabel sanoat va fuqarolik ob'ektlarida, elektr taqsimlash tizimlarida, ostona ostida yotqizish uchun, ochiq joylarda va quyosh nurlari ta'sirida qo'llaniladi.",
      ru: "Кабель применяется в промышленных и гражданских объектах, системах распределения электроэнергии, для прокладки под землей, на открытом воздухе и под воздействием солнечных лучей."
    }
  },
  { id: "apvpu-1x150", category: "power", brand: "АПвПУ", sections: ["1х150/25-10"], spec: { uz: "Sshitoy polietilen izolyatsiyali kuch kabeli", ru: "Силовой кабель с изоляцией из сшитого полиэтилена" }, image: "https://procab.uz/wp-content/uploads/2025/11/apvpu.png",
    description: {
      uz: "АПвПУ 1х150/25-10 — bu sshitoy polietilen izolyatsiyali kuch kabeli, yuqori kuchlanishli tarmoqlarda elektr uzatish uchun mo'ljallangan. 150 mm² kesimdagi mis tomirlar va polietilen izolyatsiya tufayli kabel yuqori ishlash xarakteristikalariga ega.",
      ru: "АПвПУ 1х150/25-10 — это силовой кабель с изоляцией из сшитого полиэтилена, предназначенный для передачи электроэнергии в сетях с высоким напряжением. Благодаря медным жилам сечением 150 мм² и полиэтиленовой изоляции, кабель обладает высокими рабочими характеристиками."
    },
    advantages: {
      uz: ["Yuqori haroratga chidamlilik", "Kislorod va quyosh nurlariga chidamlilik", "Uzoq muddatli ishlash muddati", "Mukammal elektr izolyatsiya", "Atrof-muhitga zararsiz", "Yong'inga chidamli xususiyatlar"],
      ru: ["Высокая термостойкость", "Устойчивость к кислороду и солнечному излучению", "Долговечность в эксплуатации", "Отличная электрическая изоляция", "Экологическая безопасность", "Огнестойкие свойства"]
    },
    application: {
      uz: "Kabel sanoat va fuqarolik ob'ektlarida, elektr taqsimlash tizimlarida, ostona ostida yotqizish uchun, ochiq joylarda va quyosh nurlari ta'sirida qo'llaniladi.",
      ru: "Кабель применяется в промышленных и гражданских объектах, системах распределения электроэнергии, для прокладки под землей, на открытом воздухе и под воздействием солнечных лучей."
    }
  },
  { id: "apvpu-1x185", category: "power", brand: "АПвПУ", sections: ["1х185/25-10"], spec: { uz: "Sshitoy polietilen izolyatsiyali kuch kabeli", ru: "Силовой кабель с изоляцией из сшитого полиэтилена" }, image: "https://procab.uz/wp-content/uploads/2025/11/apvpu.png",
    description: {
      uz: "АПвПУ 1х185/25-10 — bu sshitoy polietilen izolyatsiyali kuch kabeli, yuqori kuchlanishli tarmoqlarda elektr uzatish uchun mo'ljallangan. 185 mm² kesimdagi mis tomirlar va polietilen izolyatsiya tufayli kabel yuqori ishlash xarakteristikalariga ega.",
      ru: "АПвПУ 1х185/25-10 — это силовой кабель с изоляцией из сшитого полиэтилена, предназначенный для передачи электроэнергии в сетях с высоким напряжением. Благодаря медным жилам сечением 185 мм² и полиэтиленовой изоляции, кабель обладает высокими рабочими характеристиками."
    },
    advantages: {
      uz: ["Yuqori haroratga chidamlilik", "Kislorod va quyosh nurlariga chidamlilik", "Uzoq muddatli ishlash muddati", "Mukammal elektr izolyatsiya", "Atrof-muhitga zararsiz", "Yong'inga chidamli xususiyatlar"],
      ru: ["Высокая термостойкость", "Устойчивость к кислороду и солнечному излучению", "Долговечность в эксплуатации", "Отличная электрическая изоляция", "Экологическая безопасность", "Огнестойкие свойства"]
    },
    application: {
      uz: "Kabel sanoat va fuqarolik ob'ektlarida, elektr taqsimlash tizimlarida, ostona ostida yotqizish uchun, ochiq joylarda va quyosh nurlari ta'sirida qo'llaniladi.",
      ru: "Кабель применяется в промышленных и гражданских объектах, системах распределения электроэнергии, для прокладки под землей, на открытом воздухе и под воздействием солнечных лучей."
    }
  },
  { id: "apvpu-1x240", category: "power", brand: "АПвПУ", sections: ["1х240/25-10"], spec: { uz: "Sshitoy polietilen izolyatsiyali kuch kabeli", ru: "Силовой кабель с изоляцией из сшитого полиэтилена" }, image: "https://procab.uz/wp-content/uploads/2025/11/apvpu.png",
    description: {
      uz: "АПвПУ 1х240/25-10 — bu sshitoy polietilen izolyatsiyali kuch kabeli, yuqori kuchlanishli tarmoqlarda elektr uzatish uchun mo'ljallangan. 240 mm² kesimdagi mis tomirlar va polietilen izolyatsiya tufayli kabel yuqori ishlash xarakteristikalariga ega.",
      ru: "АПвПУ 1х240/25-10 — это силовой кабель с изоляцией из сшитого полиэтилена, предназначенный для передачи электроэнергии в сетях с высоким напряжением. Благодаря медным жилам сечением 240 мм² и полиэтиленовой изоляции, кабель обладает высокими рабочими характеристиками."
    },
    advantages: {
      uz: ["Yuqori haroratga chidamlilik", "Kislorod va quyosh nurlariga chidamlilik", "Uzoq muddatli ishlash muddati", "Mukammal elektr izolyatsiya", "Atrof-muhitga zararsiz", "Yong'inga chidamli xususiyatlar"],
      ru: ["Высокая термостойкость", "Устойчивость к кислороду и солнечному излучению", "Долговечность в эксплуатации", "Отличная электрическая изоляция", "Экологическая безопасность", "Огнестойкие свойства"]
    },
    application: {
      uz: "Kabel sanoat va fuqarolik ob'ektlarida, elektr taqsimlash tizimlarida, ostona ostida yotqizish uchun, ochiq joylarda va quyosh nurlari ta'sirida qo'llaniladi.",
      ru: "Кабель применяется в промышленных и гражданских объектах, системах распределения электроэнергии, для прокладки под землей, на открытом воздухе и под воздействием солнечных лучей."
    }
  },
  { id: "apvpu-1x70", category: "power", brand: "АПвПУ", sections: ["1х70/16-10"], spec: { uz: "Sshitoy polietilen izolyatsiyali kuch kabeli", ru: "Силовой кабель с изоляцией из сшитого полиэтилена" }, image: "https://procab.uz/wp-content/uploads/2025/11/apvpu.png",
    description: {
      uz: "АПвПУ 1х70/16-10 — bu sshitoy polietilen izolyatsiyali kuch kabeli, yuqori kuchlanishli tarmoqlarda elektr uzatish uchun mo'ljallangan. 70 mm² kesimdagi mis tomirlar va polietilen izolyatsiya tufayli kabel yuqori ishlash xarakteristikalariga ega.",
      ru: "АПвПУ 1х70/16-10 — это силовой кабель с изоляцией из сшитого полиэтилена, предназначенный для передачи электроэнергии в сетях с высоким напряжением. Благодаря медным жилам сечением 70 мм² и полиэтиленовой изоляции, кабель обладает высокими рабочими характеристиками."
    },
    advantages: {
      uz: ["Yuqori haroratga chidamlilik", "Kislorod va quyosh nurlariga chidamlilik", "Uzoq muddatli ishlash muddati", "Mukammal elektr izolyatsiya", "Atrof-muhitga zararsiz", "Yong'inga chidamli xususiyatlar"],
      ru: ["Высокая термостойкость", "Устойчивость к кислороду и солнечному излучению", "Долговечность в эксплуатации", "Отличная электрическая изоляция", "Экологическая безопасность", "Огнестойкие свойства"]
    },
    application: {
      uz: "Kabel sanoat va fuqarolik ob'ektlarida, elektr taqsimlash tizimlarida, ostona ostida yotqizish uchun, ochiq joylarda va quyosh nurlari ta'sirida qo'llaniladi.",
      ru: "Кабель применяется в промышленных и гражданских объектах, системах распределения электроэнергии, для прокладки под землей, на открытом воздухе и под воздействием солнечных лучей."
    }
  },
  { id: "vvgnga-3x1.5", category: "power", brand: "ВВГнг(А)", sections: ["3х1,5"], spec: { uz: "Yong'inga chidamli mis tomirli kabel", ru: "Огнестойкий кабель с медными жилами" }, image: "https://procab.uz/wp-content/uploads/2025/11/vvgng.png",
    description: {
      uz: "ВВГнг(А) 3х1,5 — bu ishonchli kuch kabeli, statsionar qurilmalarda yong'inga qarshi yuqori talablar uchun mo'ljallangan. 1,5 mm² kesimdagi mis tomirlar va 'нг(А)' sinfidagi yonuvchan bo'lmagan izolyatsiya tufayli kabel jihozlarning barqaror ishlashini ta'minlaydi va yonishning tarqalishiga to'sqinlik qiladi, bu esa uni turar-joy va jamoat binolarida xavfsiz ishlatish imkonini beradi.",
      ru: "ВВГнг(А) 3х1,5 — это надёжный силовой кабель, предназначенный для передачи электроэнергии в стационарных установках с повышенными требованиями к пожарной безопасности. Благодаря медным жилам сечением 1,5 мм² и негорючей изоляции класса «нг(А)», кабель обеспечивает стабильную работу оборудования и препятствует распространению горения, что делает его безопасным для использования в жилых и общественных зданиях."
    },
    advantages: {
      uz: ["Yonish tarqalmasligi (yong'inga chidamli)", "Yuk ostida barqaror ishlash", "Ishonarli PVX izolyatsiya va qobiq", "Uzoq muddatli ishlash muddati", "Harorat o'zgarishlari va tashqi ta'sirlarga chidamlilik", "Elektrotexnik va yong'in xavfsizligi standartlariga mos kelish"],
      ru: ["Не распространяет горение (огнестойкий)", "Стабильная работа под нагрузкой", "Надёжная ПВХ-изоляция и оболочка", "Долговечность в эксплуатации", "Устойчивость к перепадам температуры и внешним воздействиям", "Соответствие электротехническим и пожарным стандартам"]
    },
    application: {
      uz: "Kabel maishiy va sanoat elektr tarmoqlarida, qurilishda, taqsimlash qurilmalarida, elektr qurilmalarida, infratuzilma ob'ektlarida va yoritish tizimlarida qo'llaniladi. U mexanik ta'sirlarga, harorat o'zgarishlariga va namlikka chidamli bo'lib, uni xonalar ichida, kabel kanallarida, traykalarda va texnik xonalarda yotqizish imkonini beradi.",
      ru: "Кабель применяется в бытовых и промышленных электросетях, строительстве, распределительных устройствах, электрощитах, на объектах инфраструктуры и в системах освещения. Он устойчив к механическим воздействиям, перепадам температуры, влаге и внешним воздействиям, что позволяет использовать его внутри помещений, в кабельных каналах, на лотках, а также в технических помещениях."
    }
  },
  { id: "vvgnga-3x2.5", category: "power", brand: "ВВГнг(А)", sections: ["3х2,5"], spec: { uz: "Yong'inga chidamli mis tomirli kabel", ru: "Огнестойкий кабель с медными жилами" }, image: "https://procab.uz/wp-content/uploads/2025/11/vvgng.png",
    description: {
      uz: "ВВГнг(А) 3х2,5 — bu ishonchli kuch kabeli, statsionar qurilmalarda yong'inga qarshi yuqori talablar uchun mo'ljallangan. 2,5 mm² kesimdagi mis tomirlar va 'нг(А)' sinfidagi yonuvchan bo'lmagan izolyatsiya tufayli kabel jihozlarning barqaror ishlashini ta'minlaydi va yonishning tarqalishiga to'sqinlik qiladi, bu esa uni turar-joy va jamoat binolarida xavfsiz ishlatish imkonini beradi.",
      ru: "ВВГнг(А) 3х2,5 — это надёжный силовой кабель, предназначенный для передачи электроэнергии в стационарных установках с повышенными требованиями к пожарной безопасности. Благодаря медным жилам сечением 2,5 мм² и негорючей изоляции класса «нг(А)», кабель обеспечивает стабильную работу оборудования и препятствует распространению горения, что делает его безопасным для использования в жилых и общественных зданиях."
    },
    advantages: {
      uz: ["Yonish tarqalmasligi (yong'inga chidamli)", "Yuk ostida barqaror ishlash", "Ishonarli PVX izolyatsiya va qobiq", "Uzoq muddatli ishlash muddati", "Harorat o'zgarishlari va tashqi ta'sirlarga chidamlilik", "Elektrotexnik va yong'in xavfsizligi standartlariga mos kelish"],
      ru: ["Не распространяет горение (огнестойкий)", "Стабильная работа под нагрузкой", "Надёжная ПВХ-изоляция и оболочка", "Долговечность в эксплуатации", "Устойчивость к перепадам температуры и внешним воздействиям", "Соответствие электротехническим и пожарным стандартам"]
    },
    application: {
      uz: "Kabel maishiy va sanoat elektr tarmoqlarida, qurilishda, taqsimlash qurilmalarida, elektr qurilmalarida, infratuzilma ob'ektlarida va yoritish tizimlarida qo'llaniladi. U mexanik ta'sirlarga, harorat o'zgarishlariga va namlikka chidamli bo'lib, uni xonalar ichida, kabel kanallarida, traykalarda va texnik xonalarda yotqizish imkonini beradi.",
      ru: "Кабель применяется в бытовых и промышленных электросетях, строительстве, распределительных устройствах, электрощитах, на объектах инфраструктуры и в системах освещения. Он устойчив к механическим воздействиям, перепадам температуры, влаге и внешним воздействиям, что позволяет использовать его внутри помещений, в кабельных каналах, на лотках, а также в технических помещениях."
    }
  },
  { id: "vvgnga-3x6.0", category: "power", brand: "ВВГнг(А)", sections: ["3х6,0"], spec: { uz: "Yong'inga chidamli mis tomirli kabel", ru: "Огнестойкий кабель с медными жилами" }, image: "https://procab.uz/wp-content/uploads/2025/11/vvgng.png",
    description: {
      uz: "ВВГнг(А) 3х6,0 — bu ishonchli kuch kabeli, statsionar qurilmalarda yong'inga qarshi yuqori talablar uchun mo'ljallangan. 6,0 mm² kesimdagi mis tomirlar va 'нг(А)' sinfidagi yonuvchan bo'lmagan izolyatsiya tufayli kabel jihozlarning barqaror ishlashini ta'minlaydi va yonishning tarqalishiga to'sqinlik qiladi, bu esa uni turar-joy va jamoat binolarida xavfsiz ishlatish imkonini beradi.",
      ru: "ВВГнг(А) 3х6,0 — это надёжный силовой кабель, предназначенный для передачи электроэнергии в стационарных установках с повышенными требованиями к пожарной безопасности. Благодаря медным жилам сечением 6,0 мм² и негорючей изоляции класса «нг(А)», кабель обеспечивает стабильную работу оборудования и препятствует распространению горения, что делает его безопасным для использования в жилых и общественных зданиях."
    },
    advantages: {
      uz: ["Yonish tarqalmasligi (yong'inga chidamli)", "Yuk ostida barqaror ishlash", "Ishonarli PVX izolyatsiya va qobiq", "Uzoq muddatli ishlash muddati", "Harorat o'zgarishlari va tashqi ta'sirlarga chidamlilik", "Elektrotexnik va yong'in xavfsizligi standartlariga mos kelish"],
      ru: ["Не распространяет горение (огнестойкий)", "Стабильная работа под нагрузкой", "Надёжная ПВХ-изоляция и оболочка", "Долговечность в эксплуатации", "Устойчивость к перепадам температуры и внешним воздействиям", "Соответствие электротехническим и пожарным стандартам"]
    },
    application: {
      uz: "Kabel maishiy va sanoat elektr tarmoqlarida, qurilishda, taqsimlash qurilmalarida, elektr qurilmalarida, infratuzilma ob'ektlarida va yoritish tizimlarida qo'llaniladi. U mexanik ta'sirlarga, harorat o'zgarishlariga va namlikka chidamli bo'lib, uni xonalar ichida, kabel kanallarida, traykalarda va texnik xonalarda yotqizish imkonini beradi.",
      ru: "Кабель применяется в бытовых и промышленных электросетях, строительстве, распределительных устройствах, электрощитах, на объектах инфраструктуры и в системах освещения. Он устойчив к механическим воздействиям, перепадам температуры, влаге и внешним воздействиям, что позволяет использовать его внутри помещений, в кабельных каналах, на лотках, а также в технических помещениях."
    }
  },
  { id: "pvpu-1x95", category: "power", brand: "ПвПу", sections: ["1х95/16-10"], spec: { uz: "Sshitoy polietilen izolyatsiyali kabel", ru: "Кабель с изоляцией из сшитого полиэтилена" }, image: "https://procab.uz/wp-content/uploads/2025/11/pvpu.png",
    description: {
      uz: "ПвПу 1х95/16-10 — bu sshitoy polietilen izolyatsiyali kuch kabeli, yuqori kuchlanishli tarmoqlarda elektr uzatish uchun mo'ljallangan. 95 mm² kesimdagi mis tomirlar va polietilen izolyatsiya tufayli kabel yuqori ishlash xarakteristikalariga ega va uzoq muddatli ishlash uchun moslashgan.",
      ru: "ПвПу 1х95/16-10 — это силовой кабель с изоляцией из сшитого полиэтилена, предназначенный для передачи электроэнергии в сетях с высоким напряжением. Благодаря медным жилам сечением 95 мм² и полиэтиленовой изоляции, кабель обладает высокими рабочими характеристиками и предназначен для длительной эксплуатации."
    },
    advantages: {
      uz: ["Yuqori haroratga chidamlilik", "Kislorod va quyosh nurlariga chidamlilik", "Uzoq muddatli ishlash muddati", "Mukammal elektr izolyatsiya", "Atrof-muhitga zararsiz", "Yong'inga chidamli xususiyatlar"],
      ru: ["Высокая термостойкость", "Устойчивость к кислороду и солнечному излучению", "Долговечность в эксплуатации", "Отличная электрическая изоляция", "Экологическая безопасность", "Огнестойкие свойства"]
    },
    application: {
      uz: "Kabel sanoat va fuqarolik ob'ektlarida, elektr taqsimlash tizimlarida, ostona ostida yotqizish uchun, ochiq joylarda va quyosh nurlari ta'sirida qo'llaniladi. U uzoq xizmat muddati va yuqori ishonchlilik talab qilinadigan joylarda ishlatish uchun ideal.",
      ru: "Кабель применяется в промышленных и гражданских объектах, системах распределения электроэнергии, для прокладки под землей, на открытом воздухе и под воздействием солнечных лучей. Он идеально подходит для использования в местах, требующих длительного срока службы и высокой надежности."
    }
  },
  
  // Воздушные линии (SIP)
  { id: "as-240", category: "sip", brand: "АС", sections: ["240/32"], spec: { uz: "Havo liniyalari uchun alyumin sim", ru: "Алюминиевый провод для воздушных линий" }, image: "https://procab.uz/wp-content/uploads/2025/11/as.png",
    description: {
      uz: "АС 240/32 — bu yuqori unumdor kuch kabeli, yuqori tok yuklari ostida elektr uzatish uchun mo'ljallangan. Katta kesimdagi tomir va ishonchli izolyatsiya tufayli u intensiv ishlatilish sharoitida ham jihozlarning barqaror ishlashini ta'minlaydi.",
      ru: "АС 240/32 — это высокопроизводительный силовой кабель, предназначенный для передачи электроэнергии при повышенных токовых нагрузках. Благодаря большому сечению жилы и надёжной изоляции, он обеспечивает стабильную работу оборудования даже в условиях интенсивной эксплуатации."
    },
    advantages: {
      uz: ["Yuqori o'tkazish qobiliyati", "Yuk ostida barqaror ishlash", "Ishonarli izolyatsiya va himoya", "Uzoq muddatli ishlash", "Harorat o'zgarishlari va shikastlanishlarga chidamlilik", "Sanoat sifat standartlariga mos kelish"],
      ru: ["Высокая пропускная способность", "Стабильная работа под нагрузкой", "Надёжная изоляция и защита", "Долговечность в эксплуатации", "Устойчивость к перепадам температуры и повреждениям", "Соответствие отраслевым стандартам качества"]
    },
    application: {
      uz: "Kabel sanoat, energetika ob'ektlari, taqsimlash tarmoqlari, podstansiyalar, qurilish va infratuzilma loyihalarida qo'llaniladi. Yuqori o'tkazuvchanlikka, ortiqcha yuklarga, mexanik ta'sirlarga va tashqi omillarga chidamlikka ega.",
      ru: "Кабель используется в промышленности, энергетических объектах, распределительных сетях, подстанциях, строительстве и инфраструктурных проектах. Обладает высокой проводимостью, устойчивостью к перегрузкам, механическим воздействиям и внешним факторам."
    }
  },
  { id: "as-35", category: "sip", brand: "АС", sections: ["35/6,2"], spec: { uz: "Havo liniyalari uchun alyumin sim", ru: "Алюминиевый провод для воздушных линий" }, image: "https://procab.uz/wp-content/uploads/2025/11/as.png",
    description: {
      uz: "АС 35/6,2 — bu havo elektr uzatish liniyalari uchun mo'ljallangan alyumin-po'lat sim. 35 mm² kesimdagi alyumin tomirlar va 6,2 mm² kesimdagi po'lat yadro tufayli sim yuqori mustahkamlikka va ishonchlilikka ega.",
      ru: "АС 35/6,2 — это алюминиево-стальной провод, предназначенный для воздушных линий электропередачи. Благодаря алюминиевым жилам сечением 35 мм² и стальному сердечнику сечением 6,2 мм², провод обладает высокой прочностью и надежностью."
    },
    advantages: {
      uz: ["Yengil vazn va yuqori mustahkamlik", "Yomg'ir va qorga chidamlilik", "Uzoq muddatli ishlash", "Oson o'rnatish", "Atrof-muhitga chidamlilik", "Iqtisodiy yechim"],
      ru: ["Легкий вес и высокая прочность", "Устойчивость к дождю и снегу", "Долговечность в эксплуатации", "Простая установка", "Устойчивость к окружающей среде", "Экономичное решение"]
    },
    application: {
      uz: "Sim havo elektr uzatish liniyalari, podstansiyalar va taqsimlash tarmoqlarida qo'llaniladi. U ochiq havo sharoitlarida ishlashga moslashgan va mexanik yuklarga, ob-havo ta'sirlariga chidamli.",
      ru: "Провод применяется в воздушных линиях электропередачи, на подстанциях и в распределительных сетях. Он адаптирован для работы в открытых воздушных условиях и устойчив к механическим нагрузкам и воздействиям погоды."
    }
  },
  
  // Контрольные кабели
  { id: "kvvgenga-5x1.5", category: "control", brand: "КВВГЭнг(А)", sections: ["5х1,5"], spec: { uz: "Yong'inga chidamli boshqaruv kabeli", ru: "Огнестойкий контрольный кабель" }, image: "https://procab.uz/wp-content/uploads/2025/11/kvvgeng.png",
    description: {
      uz: "КВВГЭнг(А) 5х1,5 — bu mis kuch va signal kabeli, yonuvchan bo'lmagan materiallardan izolyatsiyalangan, yong'in xavfsizligiga yuqori talablar bilan elektr va signallarni uzatish uchun mo'ljallangan. 1,5 mm² kesimdagi tomirlar va ishonchli qobiq tufayli kabel intensiv ishlatilish sharoitida ham jihozlarning barqaror ishlashini ta'minlaydi.",
      ru: "КВВГЭнг(А) 5х1,5 — это медный силовой и сигнальный кабель с изоляцией из негорючих материалов, предназначенный для передачи электроэнергии и сигналов с повышенными требованиями к пожарной безопасности. Благодаря сечению жилы 1,5 мм² и надёжной оболочке кабель обеспечивает стабильную работу оборудования даже в условиях интенсивной эксплуатации."
    },
    advantages: {
      uz: ["Yuqori yong'in xavfsizligi", "Yuk ostida barqaror ishlash", "Ishonarli mis tomir va izolyatsiya", "Uzoq muddatli ishlash", "Tashqi ta'sirlarga chidamlilik", "Sanoat sifat standartlariga mos kelish"],
      ru: ["Высокая пожаробезопасность", "Стабильная работа под нагрузкой", "Надёжная медная жила и изоляция", "Долговечность в эксплуатации", "Устойчивость к внешним воздействиям", "Соответствие отраслевым стандартам качества"]
    },
    application: {
      uz: "Kabel sanoat, tijorat va turar-joy ob'ektlarida, taqsimlash tarmoqlarida, boshqaruv va signalizatsiya tizimlarida qo'llaniladi. U mexanik shikastlanishlarga, namlikka va harorat o'zgarishlariga chidamli. Kabel qurilish xonalar ichida va kabel kanallarida yotqizish imkonini beradi.",
      ru: "Кабель используется в промышленных, коммерческих и жилых объектах, распределительных сетях, системах управления и сигнализации. Он устойчив к механическим повреждениям, влаге и перепадам температуры. Конструкция кабеля позволяет прокладывать линии как внутри помещений, так и в кабельных каналах."
    }
  },
  { id: "kvvgenga-7x1.5", category: "control", brand: "КВВГЭнг(А)", sections: ["7х1,5"], spec: { uz: "Yong'inga chidamli boshqaruv kabeli", ru: "Огнестойкий контрольный кабель" }, image: "https://procab.uz/wp-content/uploads/2025/11/kvvgeng.png",
    description: {
      uz: "КВВГЭнг(А) 7х1,5 — bu mis kuch va signal kabeli, yonuvchan bo'lmagan materiallardan izolyatsiyalangan, yong'in xavfsizligiga yuqori talablar bilan elektr va signallarni uzatish uchun mo'ljallangan. 1,5 mm² kesimdagi tomirlar va ishonchli qobiq tufayli kabel intensiv ishlatilish sharoitida ham jihozlarning barqaror ishlashini ta'minlaydi.",
      ru: "КВВГЭнг(А) 7х1,5 — это медный силовой и сигнальный кабель с изоляцией из негорючих материалов, предназначенный для передачи электроэнергии и сигналов при повышенных требованиях к пожарной безопасности. Благодаря сечению жилы 1,5 мм² и надёжной оболочке кабель обеспечивает стабильную работу оборудования даже при интенсивной эксплуатации."
    },
    advantages: {
      uz: ["Yuqori yong'in xavfsizligi", "Yuk ostida barqaror ishlash", "Ishonarli mis tomir va izolyatsiya", "Uzoq muddatli ishlash", "Tashqi ta'sirlarga chidamlilik", "Sanoat sifat standartlariga mos kelish"],
      ru: ["Высокая пожаробезопасность", "Стабильная работа под нагрузкой", "Надёжная медная жила и изоляция", "Долговечность в эксплуатации", "Устойчивость к внешним воздействиям", "Соответствие отраслевым стандартам качества"]
    },
    application: {
      uz: "Kabel sanoat, tijorat va turar-joy ob'ektlarida, taqsimlash tarmoqlarida, boshqaruv va signalizatsiya tizimlarida qo'llaniladi. U mexanik shikastlanishlarga, namlikka va harorat o'zgarishlariga chidamli. Kabel qurilish xonalar ichida va kabel kanallarida yotqizish imkonini beradi.",
      ru: "Кабель используется в промышленных, коммерческих и жилых объектах, распределительных сетях, системах управления и сигнализации. Он устойчив к механическим повреждениям, влаге и перепадам температуры. Конструкция кабеля позволяет прокладывать линии как внутри помещений, так и в кабельных каналах."
    }
  },
  { id: "kvvgenga-10x1.5", category: "control", brand: "КВВГЭнг(А)", sections: ["10х1,5"], spec: { uz: "Yong'inga chidamli boshqaruv kabeli", ru: "Огнестойкий контрольный кабель" }, image: "https://procab.uz/wp-content/uploads/2025/11/kvvgeng.png",
    description: {
      uz: "КВВГЭнг(А) 10х1,5 — bu signal va kuch kabeli, mis tomirlar bilan elektr signallarini va quvvatni yong'in xavfsizligiga yuqori talablar bilan uzatish uchun mo'ljallangan. 1,5 mm² kesimdagi tomirlar va 'нг(А)' sinfidagi yonuvchan bo'lmagan izolyatsiya tufayli kabel intensiv ishlatilish sharoitida ham xavfsiz va barqaror ishlashni ta'minlaydi.",
      ru: "КВВГЭнг(А) 10х1,5 — это сигнальный и силовой кабель с медными жилами, предназначенный для передачи электрических сигналов и питания при повышенных требованиях к пожарной безопасности. Благодаря сечению жилы 1,5 мм² и негорючей изоляции класса «нг(А)» кабель обеспечивает безопасную и стабильную работу оборудования даже в условиях интенсивной эксплуатации."
    },
    advantages: {
      uz: ["Yuqori yong'in xavfsizligi", "Yuk ostida barqaror ishlash", "Ishonarli mis tomir va izolyatsiya", "Uzoq muddatli ishlash", "Tashqi ta'sirlarga chidamlilik", "Sanoat sifat standartlariga mos kelish"],
      ru: ["Высокая пожаробезопасность", "Стабильная работа под нагрузкой", "Надёжная медная жила и изоляция", "Долговечность в эксплуатации", "Устойчивость к внешним воздействиям", "Соответствие отраслевым стандартам качества"]
    },
    application: {
      uz: "Kabel sanoat, tijorat va turar-joy ob'ektlarida, taqsimlash tarmoqlarida, boshqaruv va signalizatsiya tizimlarida qo'llaniladi. U mexanik shikastlanishlarga, namlikka va harorat o'zgarishlariga chidamli. Kabel qurilish xonalar ichida va kabel kanallarida yotqizish imkonini beradi.",
      ru: "Кабель применяется в промышленных, коммерческих и жилых объектах, распределительных сетях, системах управления и сигнализации. Он устойчив к механическим повреждениям, влаге и перепадам температуры. Конструкция кабеля позволяет прокладывать линии как внутри помещений, так и в кабельных каналах."
    }
  },
  { id: "kvvgenga-14x1.5", category: "control", brand: "КВВГЭнг(А)", sections: ["14х1,5"], spec: { uz: "Yong'inga chidamli boshqaruv kabeli", ru: "Огнестойкий контрольный кабель" }, image: "https://procab.uz/wp-content/uploads/2025/11/kvvgeng.png",
    description: {
      uz: "КВВГЭнг(А) 14х1,5 — bu mis kuch va signal kabeli, yonuvchan bo'lmagan materiallardan izolyatsiyalangan, yong'in xavfsizligiga yuqori talablar bilan elektr va signallarni uzatish uchun mo'ljallangan. 1,5 mm² kesimdagi tomirlar va ishonchli qobiq tufayli kabel intensiv ishlatilish sharoitida ham barqaror va xavfsiz ishlashni ta'minlaydi.",
      ru: "КВВГЭнг(А) 14х1,5 — это медный силовой и сигнальный кабель с изоляцией из негорючих материалов, предназначенный для передачи электроэнергии и сигналов с повышенными требованиями к пожарной безопасности. Благодаря сечению жилы 1,5 мм² и надёжной оболочке кабель обеспечивает стабильную и безопасную работу оборудования даже при интенсивной эксплуатации."
    },
    advantages: {
      uz: ["Yuqori yong'in xavfsizligi", "Yuk ostida barqaror ishlash", "Ishonarli mis tomir va izolyatsiya", "Uzoq muddatli ishlash", "Tashqi ta'sirlarga chidamlilik", "Sanoat sifat standartlariga mos kelish"],
      ru: ["Высокая пожаробезопасность", "Стабильная работа под нагрузкой", "Надёжная медная жила и изоляция", "Долговечность в эксплуатации", "Устойчивость к внешним воздействиям", "Соответствие отраслевым стандартам качества"]
    },
    application: {
      uz: "Kabel sanoat, tijorat va turar-joy ob'ektlarida, taqsimlash tarmoqlarida, boshqaruv va signalizatsiya tizimlarida qo'llaniladi. U mexanik shikastlanishlarga, namlikka va harorat o'zgarishlariga chidamli. Kabel qurilish xonalar ichida va kabel kanallarida yotqizish imkonini beradi.",
      ru: "Кабель применяется в промышленных, коммерческих и жилых объектах, распределительных сетях, системах управления и сигнализации. Он устойчив к механическим повреждениям, влаге и перепадам температуры. Конструкция кабеля позволяет прокладывать линии внутри помещений и в кабельных каналах."
    }
  },
  { id: "kvvgenga-19x1.5", category: "control", brand: "КВВГЭнг(А)", sections: ["19х1,5"], spec: { uz: "Yong'inga chidamli boshqaruv kabeli", ru: "Огнестойкий контрольный кабель" }, image: "https://procab.uz/wp-content/uploads/2025/11/kvvgeng.png",
    description: {
      uz: "КВВГЭнг(А) 19х1,5 — bu mis kuch va signal kabeli, yonuvchan bo'lmagan materiallardan izolyatsiyalangan, yong'in xavfsizligiga yuqori talablar bilan elektr va signallarni uzatish uchun mo'ljallangan. 1,5 mm² kesimdagi tomirlar va ishonchli qobiq tufayli kabel intensiv ishlatilish sharoitida ham barqaror ishlashni ta'minlaydi.",
      ru: "КВВГЭнг(А) 19х1,5 — это медный силовой и сигнальный кабель с изоляцией из негорючих материалов, предназначенный для передачи электроэнергии и сигналов при повышенных требованиях к пожарной безопасности. Благодаря сечению жилы 1,5 мм² и надёжной оболочке кабель обеспечивает стабильную работу оборудования даже в условиях интенсивной эксплуатации."
    },
    advantages: {
      uz: ["Yuqori yong'in xavfsizligi", "Yuk ostida barqaror ishlash", "Ishonarli mis tomir va izolyatsiya", "Uzoq muddatli ishlash", "Tashqi ta'sirlarga chidamlilik", "Sanoat sifat standartlariga mos kelish"],
      ru: ["Высокая пожаробезопасность", "Стабильная работа под нагрузкой", "Надёжная медная жила и изоляция", "Долговечность в эксплуатации", "Устойчивость к внешним воздействиям", "Соответствие отраслевым стандартам качества"]
    },
    application: {
      uz: "Kabel sanoat, tijorat va turar-joy ob'ektlarida, taqsimlash tarmoqlarida, boshqaruv va signalizatsiya tizimlarida qo'llaniladi. U mexanik shikastlanishlarga, namlikka va harorat o'zgarishlariga chidamli. Kabel qurilish xonalar ichida va kabel kanallarida yotqizish imkonini beradi.",
      ru: "Кабель используется в промышленных, коммерческих и жилых объектах, распределительных сетях, системах управления и сигнализации. Он устойчив к механическим повреждениям, влаге и перепадам температуры. Конструкция кабеля позволяет прокладывать линии как внутри помещений, так и в кабельных каналах."
    }
  },
  
  // Гибкие кабели
  { id: "pvs-2x1.5", category: "flex", brand: "ПВС", sections: ["2х1,5"], spec: { uz: "Egiluvchan mis tomirli o'tkazgich", ru: "Гибкий провод с медными жилами" }, image: "https://procab.uz/wp-content/uploads/2025/11/pvs2h1.5.png",
    description: {
      uz: "ПВС 2х1,5 — bu PVX izolyatsiyali egiluvchan mis kuch kabeli, maishiy va sanoat yuklari ostida elektr uzatish uchun mo'ljallangan. Sifatli izolyatsiya va egiluvchan tuzilish tufayli kabel tez-tez bukilishlar va intensiv ishlatilish sharoitida ham jihozlarning ishonchli ishlashini ta'minlaydi.",
      ru: "ПВС 2х1,5 — это гибкий медный силовой кабель с изоляцией из ПВХ, предназначенный для передачи электроэнергии при бытовых и промышленных нагрузках. Благодаря качественной изоляции и гибкой конструкции кабель обеспечивает надёжную работу оборудования даже при частых перегибах и интенсивной эксплуатации."
    },
    advantages: {
      uz: ["Egiluvchanlik va oson o'rnatish", "Yuk ostida barqaror ishlash", "Ishonarli mis tomir va izolyatsiya", "Uzoq muddatli ishlash", "Tashqi ta'sirlarga chidamlilik", "Sanoat sifat standartlariga mos kelish"],
      ru: ["Гибкость и удобство монтажа", "Стабильная работа под нагрузкой", "Надёжная медная жила и изоляция", "Долговечность эксплуатации", "Устойчивость к внешним воздействиям", "Соответствие отраслевым стандартам качества"]
    },
    application: {
      uz: "Kabel maishiy asboblarni, yoritishni, elektr asboblarni ulash uchun, shuningdek, sanoat qurilmalarida qo'llaniladi. U mexanik shikastlanishlarga, namlikka va harorat o'zgarishlariga chidamli. Kabel tuzilishi qatorlarni xonalar ichida va egiluvchan quvvat zanjirlarida yotqizish imkonini beradi.",
      ru: "Кабель используется для подключения бытовых приборов, освещения, электрических инструментов, а также в промышленных установках. Он устойчив к механическим повреждениям, влаге и перепадам температуры. Конструкция кабеля позволяет прокладывать линии как внутри помещений, так и в гибких цепях питания."
    }
  },
  { id: "pvs-3x1.5", category: "flex", brand: "ПВС", sections: ["3х1,5"], spec: { uz: "Egiluvchan mis tomirli o'tkazgich", ru: "Гибкий провод с медными жилами" }, image: "https://procab.uz/wp-content/uploads/2025/11/pvs.png",
    description: {
      uz: "ПВС 3х1,5 — bu PVX izolyatsiyali egiluvchan mis kuch kabeli, maishiy va sanoat yuklari ostida elektr uzatish uchun mo'ljallangan. Sifatli izolyatsiya va egiluvchan tuzilish tufayli kabel tez-tez bukilishlar va intensiv ishlatilish sharoitida ham jihozlarning ishonchli ishlashini ta'minlaydi.",
      ru: "ПВС 3х1,5 — это гибкий медный силовой кабель с ПВХ-изоляцией, предназначенный для передачи электроэнергии при бытовых и промышленных нагрузках. Благодаря качественной изоляции и гибкой конструкции кабель обеспечивает надёжную работу оборудования даже при частых перегибах и интенсивной эксплуатации."
    },
    advantages: {
      uz: ["Egiluvchanlik va oson o'rnatish", "Yuk ostida barqaror ishlash", "Ishonarli mis tomir va izolyatsiya", "Uzoq muddatli ishlash", "Tashqi ta'sirlarga chidamlilik", "Sanoat sifat standartlariga mos kelish"],
      ru: ["Гибкость и удобство монтажа", "Стабильная работа под нагрузкой", "Надёжная медная жила и изоляция", "Долговечность эксплуатации", "Устойчивость к внешним воздействиям", "Соответствие отраслевым стандартам качества"]
    },
    application: {
      uz: "Kabel maishiy asboblarni, yoritishni, elektr asboblarni ulash uchun, shuningdek, sanoat qurilmalarida qo'llaniladi. U mexanik shikastlanishlarga, namlikka va harorat o'zgarishlariga chidamli. Kabel tuzilishi qatorlarni xonalar ichida va ko'chma quvvat zanjirlarida yotqizish imkonini beradi.",
      ru: "Кабель используется для подключения бытовых приборов, освещения, электрических инструментов, а также в промышленных установках. Он устойчив к механическим повреждениям, влаге и перепадам температуры. Конструкция кабеля позволяет прокладывать линии внутри помещений и в переносных цепях питания."
    }
  },
];

export const CONTACT = {
  phone1: "+998 93 385 00 25",
  phone2: "+998 93 395 00 25",
  whatsapp: "+998933850025",
  telegram: "Sanjar0025",
  email: "info@kabelsavdo.uz",
  brand: "KABELUX",
  address: "Toshkent, O'zbekiston",
  location: {
    lat: 41.239610,
    lng: 69.336454,
  },
};
