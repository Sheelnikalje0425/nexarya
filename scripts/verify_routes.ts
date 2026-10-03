import http from "http";

const routes = [
  "/",
  "/work",
  "/work/stemfusion",
  "/work/railway-concession-management",
  "/solutions",
  "/solutions/custom-software",
  "/solutions/ai-automation",
  "/process",
  "/about",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
];

const PREVIEW_PORT = 3000;

async function checkRoutes() {
  console.log("=== CHECKING CANONICAL PUBLIC ROUTES ON PREVIEW SERVER (PORT 3000) ===");
  let failed = 0;

  for (const r of routes) {
    try {
      const res = await fetch(`http://127.0.0.1:${PREVIEW_PORT}${r}`);
      console.log(`[ROUTE ${res.status}] http://127.0.0.1:${PREVIEW_PORT}${r}`);
      if (res.status !== 200) {
        failed++;
      }
    } catch (e) {
      console.error(`[ERROR] Failed to fetch ${r}:`, e.message);
      failed++;
    }
  }

  // Check redirect routes
  try {
    const resRedirect = await fetch(`http://127.0.0.1:${PREVIEW_PORT}/work/railway-concession-management-system`);
    console.log(`[REDIRECT CHECK ${resRedirect.status}] /work/railway-concession-management-system -> ${resRedirect.url}`);
  } catch (e) {
    console.error("[ERROR] Redirect check failed:", e);
  }

  if (failed === 0) {
    console.log("\nALL CANONICAL ROUTES VERIFIED SUCCESSFULLY (200 OK)");
  } else {
    console.error(`\n${failed} ROUTES FAILED!`);
    process.exit(1);
  }
}

checkRoutes();
