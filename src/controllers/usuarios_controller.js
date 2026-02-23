import Usuarios from "../models/Usuarios.js";
import jwt from "jsonwebtoken"

const registro = async (req,res) =>{
    try {
        const {email,password} = req.body
        if (Object.values(req.body).includes("")) return res.status(400).json({msg:"lo sentimos, debe llenar todos los campos"})
        const verificarEmailBDD = await Usuarios.findOne({email})
        if(verificarEmailBDD) return res.status(400).json({msg:"lo sentimos, el email ya se encuentra registrado"})
        const nuevoUsuario = new Usuarios(req.body)
        nuevoUsuario.password = await nuevoUsuario.encryptPassword(password)
        await nuevoUsuario.save()
        res.status(201).json({msg:"Usuario registrado correctamente"})
    } catch (error) {
        res.status(500).json({msg:`❌ Error en el servidor - ${error}`})
    }
}

const login = async (req,res) =>{
    try {
        const {email,password} = req.body
        if(Object.values(req.body).includes("")) return res.status(400).json({msg:"lo sentimos, debe llenar todos los campos"})
        const UsuarioBDD = await Usuarios.findOne({email})
        if(!UsuarioBDD) return res.status(401).json({msg:"lo sentimos, el email no se encuentra registrado"})
        const verificarPassword = await UsuarioBDD.matchPassword(password)
        if(!verificarPassword) return res.status(401).json({msg:"lo sentimos, la contraseña es incorrecta"})
        const token = jwt.sign({id:UsuarioBDD._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.status(200).json({
            token,
            usuario:{
                id: UsuarioBDD._id,
                nombre: UsuarioBDD.nombre,
                apellido: UsuarioBDD.apellido,
                email: UsuarioBDD.email
            }
        })
    } catch (error) {
        res.status(500).json({msg:`❌ Error en el servidor - ${error}`})
    }
}

const perfil = async (req,res) =>{
    try {
        const usuario = req.UsuarioHeader
        res.status(200).json({
            msg: "Bienvenido",
            usuario:{
                id: usuario._id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email
            }
        })
    } catch (error) {
        res.status(500).json({msg:`❌ Error en el servidor - ${error}`})
    }
}

export{
    registro,
    login,
    perfil
}