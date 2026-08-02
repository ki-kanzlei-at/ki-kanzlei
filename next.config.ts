import type { NextConfig } from "next";

// Leistungen wurden nach /leistungen/<slug> verschoben. Alte URLs 301-redirecten,
// damit Rankings/Links erhalten bleiben und kein Duplicate Content entsteht.
const movedLeistungen = [
  "voicebot",
  "agentic-ai",
  "chatgpt-alternative",
  "computer-vision",
  "data-engineering",
  "docker",
  "eu-ai-act",
  "ki-consulting",
  "ki-schulung",
  "ki-wissensdatenbank",
  "kubernetes",
  "langchain",
  "mcp-server",
  "mlops",
  "n8n-automatisierung",
  "ollama",
  "private-ai",
  "prompt-engineering",
  "vllm",
  "zapier",
  "make",
  "rpa",
  "databricks",
  "snowflake",
  "power-bi",
  "apache-airflow",
  "hugging-face",
  "fine-tuning",
  "vector-database",
  "azure-ai",
  "vertex-ai",
  "ki-video",
  "higgsfield-ai",
  "autonome-ki-agenten",
  "sora",
  "veo",
  "tableau",
  "ki-bildgenerator",
  "runway",
  "etl",
  "apache-kafka",
  "mlflow",
  "aws-bedrock",
  "data-warehouse",
  "feature-store",
  "ki-softwareentwicklung",
  "meta-ads-ki",
  "generative-engine-optimization",
  "claude-schulung",
  "ki-chatbot",
  "ki-website",
  "social-media-ki",
  "monitoring-grafana",
  "3d-planung-ki",
  "sap-integration",
];

// Branchen wurden nach /branchen/<slug> verschoben (Slug bleibt). Alte Root-URLs 301-redirecten.
const movedBranchen = [
  "ki-loesungen-aerzte",
  "ki-loesungen-psychotherapeuten",
  "ki-loesungen-hotels",
  "ki-loesungen-rechtsanwaelte",
  "ki-loesungen-recruiting",
  "ki-loesungen-ecommerce",
  "ki-loesungen-fitness",
  "ki-loesungen-oeffentliche-einrichtungen",
  "ki-loesungen-hausverwaltung",
  "ki-loesungen-immobilienmakler",
  "ki-loesungen-autohaus",
  "ki-loesungen-handwerker",
  "ki-loesungen-steuerberater",
  "ki-loesungen-versicherungsmakler",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.ibb.co" },
      { hostname: "ibb.co" },
      { hostname: "ki-kanzlei.at" },
    ],
  },
  async redirects() {
    return [
      ...movedLeistungen.map((slug) => ({
        source: `/${slug}`,
        destination: `/leistungen/${slug}`,
        permanent: true,
      })),
      ...movedBranchen.map((slug) => ({
        source: `/${slug}`,
        destination: `/branchen/${slug}`,
        permanent: true,
      })),
      // firmeo ist eine eigenständige Firma (firmeo.ai), Produktseiten entfernt
      { source: "/produkte/firmeo", destination: "/", permanent: true },
      { source: "/produkte", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
