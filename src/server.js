//modulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import UsuarioRoutes from './routers/usuarios_routes.js'
import MatriculaRoutes from './routers/matriculas_routes.js'
import MateriaRoutes from './routers/materias_routes.js'
import EstudianteRoutes from './routers/estudiantes_routes.js'
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
//ruta usuarios
app.use('/api/Usuario', UsuarioRoutes)
//ruta matriculas
app.use('/api/Matricula', MatriculaRoutes)
//ruta materias
app.use('/api/Materia', MateriaRoutes)
//ruta estudiantes
app.use('/api/Estudiante', EstudianteRoutes)
//exportar instancia express - app
export default app