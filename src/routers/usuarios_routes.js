import { Router } from "express";
import { login, perfil, registro } from "../controllers/usuarios_controller.js";
import { verificarTokenJWT } from "../middlewares/authMiddleware.js";
const router = Router()

router.post('/registro', registro)
router.get('/login', login)
router.post('/perfil', verificarTokenJWT, perfil)

export default router