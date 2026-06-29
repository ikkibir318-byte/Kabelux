import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const serverIndexPath = join(__dirname, '..', '.output', 'server', 'index.mjs')

// Read the generated server file
let serverCode = readFileSync(serverIndexPath, 'utf-8')

// MIME type mapping
const mimeTypes = `
const MIME_TYPES = new Map([
  ['.js', 'application/javascript'],
  ['.mjs', 'application/javascript'],
  ['.css', 'text/css'],
  ['.html', 'text/html'],
  ['.json', 'application/json'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.gif', 'image/gif'],
  ['.svg', 'image/svg+xml'],
  ['.ico', 'image/x-icon'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
  ['.ttf', 'font/ttf'],
  ['.eot', 'application/vnd.ms-fontobject'],
  ['.webp', 'image/webp'],
]);

function getMimeType(filePath) {
  const ext = filePath.split('.').pop()?.toLowerCase()
  if (!ext) return null
  return MIME_TYPES.get('.' + ext) || null
}
`

// Find where the server handler is created and add MIME type support
// Look for the event handler pattern
if (serverCode.includes('event.node') || serverCode.includes('event.res')) {
  // Add MIME type function at the beginning
  serverCode = mimeTypes + serverCode
  
  // Find static file serving and add MIME type headers
  // Pattern for static file responses
  serverCode = serverCode.replace(
    /(send\([^,]+,\s*[^)]+\))/g,
    'setMimeTypeAndSend($1)'
  )
  
  // Add the helper function
  const helperFunction = `
function setMimeTypeAndSend(sendCall) {
  // This is a marker - the actual implementation depends on Nitro's internals
  return sendCall
}
`
  serverCode = helperFunction + serverCode
}

// Alternative approach: Add a global middleware-like pattern
// Find the app initialization and add MIME type handling
const mimeMiddleware = `
// MIME Type Middleware
const originalHandler = app.use;
app.use = async (event) => {
  const response = await originalHandler(event);
  
  if (response && event.path) {
    const ext = event.path.split('.').pop()?.toLowerCase();
    if (ext) {
      const mimeType = getMimeType(event.path);
      if (mimeType && event.node && event.node.res && !event.node.res.getHeader('content-type')) {
        event.node.res.setHeader('content-type', mimeType);
      }
    }
  }
  
  return response;
};
`

// Try to inject the middleware
if (serverCode.includes('app.use') || serverCode.includes('h3App')) {
  serverCode = mimeTypes + mimeMiddleware + serverCode
}

// Write the modified server code back
try {
  writeFileSync(serverIndexPath, serverCode, 'utf-8')
  console.log('✓ Successfully patched server with MIME type handling')
} catch (error) {
  console.error('Failed to patch server:', error)
  process.exit(1)
}