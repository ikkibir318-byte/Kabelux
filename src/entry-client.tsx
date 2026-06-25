import { hydrateRoot } from 'react-dom/client'
import { createRouter } from './router'
import { startInstance } from './start'

const router = createRouter()

const hydrate = () => {
  hydrateRoot(document.getElementById('root')!, router)
}

startInstance.registerRouter(router)

hydrate()
