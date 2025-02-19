import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/Home/index.jsx'

import GlobalStyle from './GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <GlobalStyle />
  </StrictMode>,
)
