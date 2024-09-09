import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Button } from "@/components/ui/button"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Button>Click me</Button>
  </StrictMode>,
)
