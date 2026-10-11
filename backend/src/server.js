import 'dotenv/config'
import app from './app.js'

const puerto = process.env.PORT || 3000

app.listen(puerto, () => {
    console.log(`API escuchando en el puerto ${puerto}`)
})