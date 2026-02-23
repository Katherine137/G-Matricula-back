import { Router } from "express";
import { actualizarEstudiantes, crearEstudiantes, eliminarEstudiantes, listarEstudiantes, obtenerEstudiantesPorID } from "../controllers/estudiantes_controller.js";
const router = Router()

router.post('/Estudiantes', crearEstudiantes)
router.get('/listarEs', listarEstudiantes)
router.get('/obtenerEs/:id', obtenerEstudiantesPorID)
router.put('/actualizarEs/:id', actualizarEstudiantes)
router.delete('/eliminarEs/:id', eliminarEstudiantes)

export default router