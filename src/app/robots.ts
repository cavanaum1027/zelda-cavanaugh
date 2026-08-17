const disallow = ["/cart", "/checkout", "/checkout/success", "/api/", "/brand"];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "GoogleOther",
          "Applebot-Extended",
          "Amazonbot",
          "CCBot",
          "Bytespider",
          "meta-externalagent",
        ],
        allow: ["/", "/llms.txt"],
        disallow,
      },
    ],
    sitemap: "https://www.zeldacavanaugh.com/sitemap.xml",
    host: "https://www.zeldacavanaugh.com",
  };
}
