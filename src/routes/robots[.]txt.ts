import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const content = [
          "User-agent: *",
          "Allow: /",
          "",
          "Sitemap: https://kabelux.uz/sitemap.xml",
          "",
        ].join("\n");

        return new Response(content, {
          headers: {
            "Content-Type": "text/plain",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
