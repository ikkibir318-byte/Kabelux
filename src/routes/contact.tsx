import { createFileRoute } from "@tanstack/react-router";
import { ContactCTA } from "@/components/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Aloqa · Контакты — KABELUX" },
      { name: "description", content: "Telefon, manzil va WhatsApp orqali bog'laning. Свяжитесь по телефону, WhatsApp или Telegram." },
      { property: "og:title", content: "Aloqa · Контакты" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-4">
      <ContactCTA />
    </div>
  );
}
