import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import JobBoard from './JobBoard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobBoard />
  </StrictMode>,
)
