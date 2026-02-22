//modulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
//inicializaciones
const app = express()
dotenv.config()
//middlewares
app.use(express.json())
app.use(cors())
//variables globales
app.set('port',process.env.PORT || 4000)
//rutas
app.get('/',(req,res)=> res.send("SERVER ON"))
//exportar la instancia express - app
export default app