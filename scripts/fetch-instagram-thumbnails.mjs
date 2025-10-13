// Fetch Instagram post thumbnails (og:image) and save them locally
// Usage: node scripts/fetch-instagram-thumbnails.mjs

import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Posts list. If you want to change, edit src/components/Gallery.tsx and keep in sync.
const posts = [
  'https://www.instagram.com/arakuhouse/p/DPi8bfIEV6z/',
  'https://www.instagram.com/pictures_window/p/DOyHQt1CJuk/',
  'https://www.instagram.com/arakuhouse/p/DPGcn4_Edj-/',
  'https://www.instagram.com/arakuhouse/p/DPNr8CoEZcO/'
];

const OUT_DIR = join(__dirname, '..', 'src', 'assets', 'instagram');

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

/** Extract shortcode from Instagram post URL */
function getShortcode(url) {
  const m = url.match(/\/p\/([^\/]+)/);
  return m ? m[1] : null;
}

/** Fetch a URL with friendly headers; use a read-only proxy for Instagram HTML to avoid login walls */
async function fetchText(url) {
  const target = url.includes('instagram.com') && url.includes('/p/')
    ? `https://r.jina.ai/http://${url.replace(/^https?:\/\//, '')}`
    : url;
  const res = await fetch(target, {
    headers: {
      'user-agent': UA,
      'accept-language': 'en-US,en;q=0.9',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      referer: 'https://www.google.com/'
    }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${target}: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

/** Parse og:image from HTML */
function extractOgImage(html) {
  // Try property="og:image"
  let m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i);
  if (m && m[1]) return m[1];
  // Try name="og:image"
  m = html.match(/<meta[^>]+name=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i);
  if (m && m[1]) return m[1];
  return null;
}

async function downloadBinary(url, outFile) {
  const res = await fetch(url, {
    headers: {
      'user-agent': UA,
      'accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      'accept-language': 'en-US,en;q=0.9',
      referer: 'https://www.instagram.com/'
    }
  });
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`);
  }
  const arrayBuffer = await res.arrayBuffer();
  await writeFile(outFile, Buffer.from(arrayBuffer));
}

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

function deriveExtFromUrl(url) {
  try {
    const u = new URL(url);
    const ext = extname(u.pathname).toLowerCase();
    if (ext) return ext; // .jpg/.jpeg/.webp
  } catch {}
  return '.jpg';
}

async function main() {
  await ensureDir(OUT_DIR);
  const mapping = [];

  for (const postUrl of posts) {
    const code = getShortcode(postUrl);
    if (!code) {
      console.warn(`Skipping (no shortcode): ${postUrl}`);
      continue;
    }
    process.stdout.write(`Fetching ${postUrl} ... `);
    try {
      const html = await fetchText(postUrl);
      const ogImage = extractOgImage(html);
      if (!ogImage) {
        console.warn(`No og:image found`);
        continue;
      }
      const ext = deriveExtFromUrl(ogImage);
      const outFile = join(OUT_DIR, `${code}${ext}`);
      await downloadBinary(ogImage, outFile);
      console.log(`saved -> ${outFile}`);
      mapping.push({ shortcode: code, postUrl, ogImage, file: `@/assets/instagram/${code}${ext}` });
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
    // Small delay to be polite
    await new Promise((r) => setTimeout(r, 300));
  }

  // Save mapping for reference
  const mapPath = join(OUT_DIR, '_mapping.json');
  await writeFile(mapPath, JSON.stringify(mapping, null, 2), 'utf8');
  console.log(`\nMapping saved to ${mapPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
