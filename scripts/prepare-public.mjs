import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const gated = process.env.VITE_STAGING_GATE === "true";

const robots = gated
  ? "User-agent: *\nDisallow: /\n"
  : `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
`;

writeFileSync(join(root, "public", "robots.txt"), robots, "utf8");
