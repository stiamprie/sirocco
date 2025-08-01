import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Wrappers from "@/renderer/wrappers.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wrappers />
  </StrictMode>
)
