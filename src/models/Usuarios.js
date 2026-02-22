import {Schema, model} from 'mongoose'
import bcrypt from "bcryptjs"

const UsuariosSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        trim:true,
        maxlength:30
    },
    apellido:{
        type:String,
        required:true,
        trim:true,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        maxlength:30
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

// Metodo cifrar el password
UsuariosSchema.methods.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password,salt)
    return passwordEncryp
}

// Metodo verificar si el password es el mismo BDD
UsuariosSchema.methods.matchPassword = async function (password) {
    const response = await bcrypt.compare(password,this.password)
    return response
}

// Metodo crear token
UsuariosSchema.methods.createToken = function(){
    const tokenGenerado = Math.random().toString(36).slice(2)
    this.token = tokenGenerado
    return tokenGenerado
}

export default model('Usuarios', UsuariosSchema)