import mongoose, {Schema, model} from "mongoose";

const MatriculasSchema = new Schema({
    codigo:{
        type:Number,
        required:true,
        unique:true
    },
    descripcion:{
        type:String
    },
    estudiante:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Estudiantes",
        required:true
    },
    materia:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Materias",
        required:true
    }
}, {
    timestamps:true
})

export default mongoose.model('Matriculas', MatriculasSchema)