import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('')

  function manejarEnvio(evento) {
    evento.preventDefault() // evita que el formulario recargue la página
    setError('')
    setMensaje('')

    if (!email.trim() || !password) {
      setError('Completa el correo y la contraseña')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('El correo no es válido')
      return
    }

    // TODO: cuando exista el backend, aquí va la llamada a la API
    // (POST /api/auth/login). Por ahora el inicio de sesión es simulado.
    setMensaje(`Inicio de sesión simulado para ${email}`)
  }

  return (
    <section className="login">
      <h1 className="login__titulo">Iniciar sesión</h1>

      <form className="login__formulario" onSubmit={manejarEnvio} noValidate>
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login__boton">Entrar</button>
      </form>

      {error && <p className="login__error" role="alert">{error}</p>}
      {mensaje && <p className="login__mensaje">{mensaje}</p>}
    </section>
  )
}