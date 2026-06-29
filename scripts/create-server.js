import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const serverIndexPath = join(rootDir, '.output', 'server', 'index.mjs')

// Read the generated server file
let serverCode = readFileSync(serverIndexPath, 'utf-8')

// Add MIME type handling at the beginning of the server
const mimeTypeHandler = `
const MIME_TYPES = {
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.ts': 'application/typescript',
  '.css': 'text/css',
  '.html': 'text/html',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.webp': 'image/webp',
};

function addMimeTypeMiddleware(handler) {
  return async (req, res) => {
    const url = new URL(req.url || '/', \`http://\${req.headers.host}\`)
    const ext = url.pathname.split('.').pop()?.toLowerCase()
    
    if (ext) {
      const mimeType = MIME_TYPES[.\`.\${ext}\`]
      if (mimeType && !res.getHeader('content-type')) {
        res.setHeader('content-type', mimeType)
      }
    }
    
    return handler(req, res)
  }
}

`

// Find the handler export and wrap it with MIME type middleware
// Look for patterns like: export default handler or const handler = ...
if (serverCode.includes('export default') || serverCode.includes('const handler')) {
  // Insert MIME type handler at the beginning
  serverCode = mimeTypeHandler + serverCode
  
  // Wrap the handler with MIME type middleware
  // Find the line that creates the server and add middleware
  serverCode = serverCode.replace(
    /(createServer\(\(req, res\) => \{)/g,
    'createServer(addMimeTypeMiddleware((req, res) => {'
  )
  
  // Close the middleware wrapper
  serverCode = serverCode.replace(
    /(return handler\(req, res\)\s*\n\s*\}\))/g,
    '}))'
  )
}

// Write the modified server code back
writeFileSync(serverIndexPath, serverCode)
console.log('✓ Added MIME type handling to server')
