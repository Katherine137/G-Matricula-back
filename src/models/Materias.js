import { Schema, model } from "mongoose";

const MateriasSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    codigo:{
        type:String,
        required:true,
        unique:true
    },
    descripcion:{
        type:String
    },
    creditos:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

export default model('Materias', MateriasSchema)