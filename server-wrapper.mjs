import { createNitroApp } from './.output/server/index.mjs'
import { readFileSync, existsSync, statSync } from 'fs'
import { extname, join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

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
}

async function startServer() {
  const nitroApp = await createNitroApp()
  const port = process.env.PORT || 3000
  
  // Create HTTP server
  const { createServer } = await import('http')
  const server = createServer(async (req, res) => {
    const url = new URL(req.url || '/', `http://${req.headers.host}`)
    const pathname = url.pathname
    
    // Try to serve static files from .output/public with proper MIME types
    if (pathname.startsWith('/')) {
      const filePath = join(__dirname, '.output', 'public', pathname)
      const ext = extname(filePath)
      const mimeType = MIME_TYPES[ext.toLowerCase()]
      
      // Check if file exists and is not a directory
      if (existsSync(filePath) && statSync(filePath).isFile()) {
        try {
          const content = readFileSync(filePath)
          res.writeHead(200, { 
            'Content-Type': mimeType || 'application/octet-stream',
            'Cache-Control': 'public, max-age=31536000, immutable'
          })
          res.end(content)
          return
        } catch (e) {
          // Fall through to Nitro handler
        }
      }
    }
    
    // Fall back to Nitro handler
    await nitroApp.rawHandler(req, res)
  })
  
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

startServer().catch((error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})