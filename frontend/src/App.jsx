import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Login from './pages/Login'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      {/* Nuevas pantallas: agregar aquí su <Route> */}
    </Routes>
  )
}