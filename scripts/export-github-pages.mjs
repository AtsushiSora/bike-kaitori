import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("github-pages", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const outputDirectory = `${projectRoot}gh-pages`;
const publicOrigin = "https://atsushisora.github.io";
const basePath = "/bike-kaitori";

const runtime = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const context = {
  waitUntil() {},
  passThroughOnException() {},
};

function rewriteForProjectPage(html) {
  return html
    .replaceAll(`${publicOrigin}/`, `${publicOrigin}${basePath}/`)
    .replaceAll("http://localhost:3000/", `${publicOrigin}${basePath}/`)
    .replaceAll("http://localhost/", `${publicOrigin}${basePath}/`)
    .replaceAll('"/_next/', `"${basePath}/_next/`)
    .replaceAll("'/_next/", `'${basePath}/_next/`)
    .replaceAll("url(/_next/", `url(${basePath}/_next/`)
    .replaceAll('href="/privacy"', `href="${basePath}/privacy"`)
    .replaceAll('href="/"', `href="${basePath}/"`)
    .replaceAll(/(?<!\/bike-kaitori)\/logo-mark\.svg/g, `${basePath}/logo-mark.svg`)
    .replaceAll(/(?<!\/bike-kaitori)\/favicon\.svg/g, `${basePath}/favicon.svg`)
    .replaceAll('href="/og.png"', `href="${basePath}/og.png"`);
}

async function renderPage(route, destination) {
  const response = await worker.fetch(
    new Request(`${publicOrigin}${route}`, { headers: { accept: "text/html" } }),
    runtime,
    context,
  );

  if (!response.ok) {
    throw new Error(`Failed to render ${route}: ${response.status}`);
  }

  const html = rewriteForProjectPage(await response.text());
  await mkdir(destination, { recursive: true });
  await writeFile(`${destination}/index.html`, html);
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(`${projectRoot}dist/client`, outputDirectory, { recursive: true });
await renderPage("/", outputDirectory);
await renderPage("/privacy", `${outputDirectory}/privacy`);
await writeFile(`${outputDirectory}/404.html`, rewriteForProjectPage(await (await worker.fetch(
  new Request(`${publicOrigin}/`, { headers: { accept: "text/html" } }),
  runtime,
  context,
)).text()));
await writeFile(`${outputDirectory}/.nojekyll`, "");

console.log(`GitHub Pages export created at ${outputDirectory}`);
