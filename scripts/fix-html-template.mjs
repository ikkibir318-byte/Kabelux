/**
 * Post-build fix for Render deployment.
 *
 * @lovable.dev/vite-tanstack-config does not inject production asset paths
 * into the HTML template that Nitro uses. The renderer-template.mjs ends up
 * with <script src="/src/start.ts"> (dev entry) instead of the hashed bundle.
 * This script patches the file after the build so the correct JS/CSS is loaded.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')

const assetsDir   = join(rootDir, '.output', 'public', 'assets')
const rendererPath = join(rootDir, '.output', 'server', '_chunks', 'renderer-template.mjs')

// ── Sanity checks ────────────────────────────────────────────────────────────
if (!existsSync(assetsDir)) {
  console.error('❌  Assets directory not found:', assetsDir)
  console.error('    Make sure `npm run build` completed successfully.')
  process.exit(1)
}
if (!existsSync(rendererPath)) {
  console.error('❌  renderer-template.mjs not found:', rendererPath)
  process.exit(1)
}

// ── Locate the production bundles ────────────────────────────────────────────
const files = await readdir(assetsDir)

// Main JS entry — the largest index-*.js
const indexJs = files
  .filter(f => /^index-[A-Za-z0-9_\-+.]+\.js$/.test(f))
  .sort((a, b) => b.length - a.length)[0]   // prefer longer (more specific) name

// Main CSS bundle
const stylesCSS = files.find(f => /^styles-[A-Za-z0-9_\-+.]+\.css$/.test(f))

if (!indexJs) {
  console.error('❌  Could not find main JS bundle (index-*.js) in:', assetsDir)
  console.error('    Available files:', files.filter(f => f.endsWith('.js')).join(', '))
  process.exit(1)
}

console.log(`✅  Main bundle : /assets/${indexJs}`)
if (stylesCSS) console.log(`✅  Stylesheet  : /assets/${stylesCSS}`)

// ── Read and patch renderer-template.mjs ────────────────────────────────────
let content = await readFile(rendererPath, 'utf-8')

// The HTML is embedded as a JS string literal where " is escaped as \"
// We target the specific attribute value: src=\"/src/start.ts\"
const OLD_SCRIPT_SRC = 'src=\\"/src/start.ts\\"'
const NEW_SCRIPT_SRC = `src=\\"/assets/${indexJs}\\"`

if (!content.includes(OLD_SCRIPT_SRC)) {
  // Maybe it's already been patched, or the format changed
  console.warn('⚠️   Could not find /src/start.ts reference — file may already be patched or format changed.')
  console.warn('    Skipping patch.')
  process.exit(0)
}

content = content.replace(OLD_SCRIPT_SRC, NEW_SCRIPT_SRC)

// Inject <link rel="stylesheet"> before </head>
// </head> appears un-escaped in the JS string literal inside renderer-template.mjs
if (stylesCSS) {
  const cssLink = `<link rel=\\"stylesheet\\" href=\\"/assets/${stylesCSS}\\">`
  content = content.replace('</head>', `${cssLink}</head>`)
}

await writeFile(rendererPath, content, 'utf-8')

console.log('✅  renderer-template.mjs patched — production assets will load correctly.')
