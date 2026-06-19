// Zentrale Map: Tool-/Tech-Name (inkl. gängiger Schreibweisen) -> Logo-Datei unter
// /public/img/logos. Nur Tools mit echter Logo-Datei sind gelistet; alles andere gibt
// null zurück und der Aufrufer zeigt nur den Namen. Schlüssel werden normalisiert
// (lowercase, Klammern/TLDs/Sonderzeichen entfernt), damit "Power BI", "PowerBI",
// "Ollama (lokal)", "fonio.ai" usw. alle treffen.

const filesByName: Record<string, string> = {
  // Automatisierung & Workflows
  "n8n": "n8n.svg",
  "zapier": "zapier.svg",
  "make": "make.svg",
  "integromat": "make.svg",
  // Agenten-Frameworks
  "langchain": "langchain.svg",
  "langgraph": "langgraph.svg",
  "crewai": "crewai.svg",
  "crew ai": "crewai.svg",
  // Container & Infra
  "docker": "docker.svg",
  "kubernetes": "kubernetes.svg",
  "k8s": "kubernetes.svg",
  "terraform": "terraform.svg",
  "prometheus": "prometheus.svg",
  "grafana": "grafana.svg",
  // Data & Warehouse
  "databricks": "databricks.svg",
  "snowflake": "snowflake.svg",
  "power bi": "powerbi.svg",
  "powerbi": "powerbi.svg",
  "tableau": "tableau.svg",
  "apache airflow": "apacheairflow.svg",
  "airflow": "apacheairflow.svg",
  "apache kafka": "apachekafka.svg",
  "kafka": "apachekafka.svg",
  "apache spark": "apachespark.svg",
  "spark": "apachespark.svg",
  "pyspark": "apachespark.svg",
  "mlflow": "mlflow.svg",
  // Datenbanken / Vektor
  "qdrant": "qdrant.svg",
  "postgresql": "postgresql.svg",
  "postgres": "postgresql.svg",
  "pgvector": "postgresql.svg",
  "mysql": "mysql.svg",
  "mongodb": "mongodb.svg",
  "mongo": "mongodb.svg",
  "redis": "redis.svg",
  "elasticsearch": "elasticsearch.svg",
  "elastic": "elasticsearch.svg",
  // Cloud
  "azure": "azure.svg",
  "azure ai": "azure.svg",
  "azure openai": "azure.svg",
  "microsoft azure": "azure.svg",
  "google cloud": "googlecloud.svg",
  "gcp": "googlecloud.svg",
  "vertex": "googlecloud.svg",
  "vertex ai": "googlecloud.svg",
  "google vertex": "googlecloud.svg",
  "aws": "aws.svg",
  "amazon web services": "aws.svg",
  "aws bedrock": "aws.svg",
  "amazon bedrock": "aws.svg",
  "bedrock": "aws.svg",
  // LLM-Anbieter & Modelle
  "openai": "openai.svg",
  "gpt": "openai.svg",
  "chatgpt": "openai.svg",
  "sora": "openai.svg",
  "anthropic": "anthropic.svg",
  "claude": "claude.svg",
  "google gemini": "googlegemini.svg",
  "gemini": "googlegemini.svg",
  "imagen": "googlegemini.svg",
  "veo": "googlegemini.svg",
  "google veo": "googlegemini.svg",
  "mistral": "mistralai.svg",
  "mistral ai": "mistralai.svg",
  "mixtral": "mistralai.svg",
  "perplexity": "perplexity.svg",
  "meta": "meta.svg",
  "meta ai": "meta.svg",
  "meta ads": "meta.svg",
  "llama": "meta.svg",
  "huggingface": "huggingface.svg",
  "hugging face": "huggingface.svg",
  "ollama": "ollama.svg",
  // Bild/Video-Modelle
  "stability": "stability.svg",
  "stability ai": "stability.svg",
  "stable diffusion": "stability.svg",
  "sdxl": "stability.svg",
  "flux": "flux.svg",
  "runway": "runway.svg",
  "runwayml": "runway.svg",
  "minimax": "minimax.svg",
  // CRM / Business
  "hubspot": "hubspot.svg",
  "salesforce": "salesforce.svg",
  "zoho": "zoho.svg",
  "sap": "sap.svg",
  "datev": "datev.svg",
  // Kommunikation
  "slack": "slack.svg",
  "ms teams": "microsoftteams.svg",
  "microsoft teams": "microsoftteams.svg",
  "teams": "microsoftteams.svg",
  "telegram": "telegram.svg",
  "whatsapp": "whatsapp.svg",
  "gmail": "gmail.svg",
  "outlook": "outlook.svg",
  "microsoft outlook": "outlook.svg",
  "google sheets": "googlesheets.svg",
  "airtable": "airtable.svg",
  // Dev & ML
  "github": "githubactions.svg",
  "github actions": "githubactions.svg",
  "gitlab": "gitlab.svg",
  "python": "python.svg",
  "pytorch": "pytorch.svg",
  "torch": "pytorch.svg",
  "tensorflow": "tensorflow.svg",
  "fastapi": "fastapi.svg",
  "typescript": "typescript.svg",
  "react": "react.svg",
  "next js": "nextdotjs.svg",
  "nextjs": "nextdotjs.svg",
  // Voice & eigene
  "fonio": "fonio.webp",
  "firmeo": "firmeo.svg",
};

function normalize(name: string): string {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ") // Klammerzusätze: "Ollama (lokal)"
    .replace(/\.(ai|com|io|dev|app|net)\b/g, " ") // TLD-Endungen: fonio.ai, make.com
    .replace(/[^a-z0-9+ ]+/g, " ") // nur a-z0-9+ behalten
    .replace(/\s+/g, " ")
    .trim();
}

/** Logo-Pfad für einen Tool-Namen, oder null wenn kein Logo vorhanden. */
export function getToolLogo(name: string): string | null {
  const file = filesByName[normalize(name)];
  return file ? `/img/logos/${file}` : null;
}
