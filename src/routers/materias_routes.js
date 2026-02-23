import { Router } from "express";
import { actualizarMaterias, crearMaterias, eliminarMaterias, listarMaterias, obtenerMateriasPorID } from "../controllers/materias_controller.js";
const router = Router()

router.post('/Materias', crearMaterias)
router.get('/listarMat', listarMaterias)
router.get('/obtenerMat/:id', obtenerMateriasPorID)
router.put('/actualizarMat/:id', actualizarMaterias)
router.delete('/eliminarMat/:id', eliminarMaterias)

export default router