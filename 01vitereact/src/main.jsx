import { StrictMode, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const userName = "Dev"

const ReactElement = createElement("a", { href: "https://google.com", target: "_blank" }, `Click here to visit google With `, userName)

createRoot(document.getElementById('root')).render(
  // ReactElement
  <StrictMode>
    <App />
  </StrictMode>
)
