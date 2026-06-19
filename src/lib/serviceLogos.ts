// Map: Leistungs-Href -> Marken-Logo-Slug unter /img/logos. Wird in den
// "Mehr Leistungen"-Karten genutzt, um echte Tool-Logos statt generischer Icons
// zu zeigen. Nur Tools mit Logo; alles andere faellt auf das lucide-Icon zurueck.
const map: Record<string, string> = {
  "n8n-automatisierung": "n8n",
  "zapier": "zapier",
  "make": "make",
  "langchain": "langchain",
  "ollama": "ollama",
  "private-ai": "ollama",
  "docker": "docker",
  "kubernetes": "kubernetes",
  "databricks": "databricks",
  "snowflake": "snowflake",
  "power-bi": "powerbi",
  "tableau": "tableau",
  "apache-airflow": "apacheairflow",
  "apache-kafka": "apachekafka",
  "hugging-face": "huggingface",
  "azure-ai": "azure",
  "vertex-ai": "googlecloud",
  "aws-bedrock": "aws",
  "mlflow": "mlflow",
  "runway": "runway",
  "sora": "openai",
  "veo": "googlegemini",
  "vector-database": "qdrant",
  "meta-ads-ki": "meta",
  "claude-schulung": "claude",
};

// Akzeptiert "/leistungen/<slug>" und "/<slug>".
export const serviceLogos: Record<string, string> = Object.fromEntries(
  Object.entries(map).flatMap(([slug, logo]) => [
    [`/leistungen/${slug}`, logo],
    [`/${slug}`, logo],
  ])
);
