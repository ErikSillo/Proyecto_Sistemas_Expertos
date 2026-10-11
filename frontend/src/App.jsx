import { useEffect, useState } from 'react'

export default function App() {
  const [estado, setEstado] = useState('comprobando...')

  useEffect(() => {
    fetch('/api/salud')
      .then((r) => r.json())
      .then((d) => setEstado(d.ok ? 'API y base de datos conectadas' : 'Error en la API'))
      .catch(() => setEstado('Sin conexión con la API'))
  }, [])

  return <h1>Aventura Web - {estado}</h1>
}