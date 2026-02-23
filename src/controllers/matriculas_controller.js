import Matriculas from "../models/Matriculas.js";

const crearMatriculas = async (req,res) =>{
    try {
        const {codigo, descripcion, estudiante, materia} = req.body
        const existe = await Matriculas.findOne({codigo})
        if (existe) {
            return res.status(400).json({message:"Ya esta creada la matricula"})
        }
        const nuevaMatricula = new Matriculas({
            codigo,
            descripcion,
            estudiante,
            materia
        })
        await nuevaMatricula.save()
        res.json({message: "Matricula creada correctamente", nuevaMatricula})
    } catch (error) {
        res.status(500).json({message: "Error al crear la matricula", error:error.message})
    }
}

const listarMatriculas = async (req,res) =>{
    try {
        const matriculas = await Matriculas.find().sort({createdAt: -1})
        res.json({message: "Matriculas", matriculas})
    } catch (error) {
        res.status(500).json({message: "Error al obtener matriculas", error:error.message})
    }
}

const actualizarMatriculas = async (req,res) =>{
    try {
        const {id} = req.params
        const matriculaActualizada = await Matriculas.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if (!matriculaActualizada) {
            return res.status(404).json({message: "Matricula no encontrada"})
        }
        res.json({message: "Matricula actualizada correctamente", matriculaActualizada})
    } catch (error) {
        res.status(500).json({message: "Error al actualizar la matricula", error:error.message})
    }
}

const eliminarMatriculas = async (req,res) =>{
    try {
        const {id} = req.params
        const matriculaEliminada = await Matriculas.findByIdAndDelete(id)
        if (!matriculaEliminada) {
            return res.status(404).json({message: "Matricula no encontrada"})
        }
        res.json({message: "Matricula eliminada correctamente"})
    } catch (error) {
        res.status(500).json({message: "Error al eliminar la matricula", error:error.message})
    }
}

export {
    crearMatriculas,
    listarMatriculas,
    actualizarMatriculas,
    eliminarMatriculas
}