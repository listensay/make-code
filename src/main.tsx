import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NextPage from './pages/NextPage'
import IndexPage from './pages/IndexPage'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}
  >
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/next" element={<NextPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
