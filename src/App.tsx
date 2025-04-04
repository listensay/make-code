import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default App
