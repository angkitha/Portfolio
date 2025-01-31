import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename = "/portfolio/">
      <Routes>
        <Route path = "*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
