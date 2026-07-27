const vercelProductionUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL;

const configuredSiteUrl = vercelProductionUrl
  ? `https://${vercelProductionUrl}`
  : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");