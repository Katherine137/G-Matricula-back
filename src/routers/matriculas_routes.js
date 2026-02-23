import { Router } from "express";
import { actualizarMatriculas, crearMatriculas, eliminarMatriculas, listarMatriculas } from "../controllers/matriculas_controller.js";
const router = Router()

router.post('/Matriculas', crearMatriculas)
router.get('/listarMa', listarMatriculas)
router.put('/actualizarMa/:id', actualizarMatriculas)
router.delete('/eliminarMa/:id', eliminarMatriculas)

export default router