import Materias from "../models/Materias.js";

const crearMaterias = async (req,res) =>{
    try {
        const {nombre, codigo, descripcion, creditos} = req.body
        const existe = await Materias.findOne({codigo})
        if (existe) {
            return res.status(400).json({message: "Ya esta creada la materia"})
        }
        const nuevaMateria = new Materias({
            nombre,
            codigo,
            descripcion,
            creditos
        })
        await nuevaMateria.save()
        res.json({message: "Materia creada correctamente", nuevaMateria})
    } catch (error) {
        res.status(500).json({message: "Error al crear la materia", error:error.message})
    }
}

const listarMaterias = async (req,res) =>{
    try {
        const materias = await Materias.find().sort({createdAt: -1})
        res.json({message: "Materias", materias})
    } catch (error) {
        res.status(500).json({message: "Error al obtener materias", error:error.message})
    }
}

const obtenerMateriasPorID = async (req,res) =>{
    const materia = await Materias.findById(req.params.id)
    res.json({message: "Materia", materia})
}

const actualizarMaterias = async (req,res) =>{
    try {
        const materiaActualizada = await Materias.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if (!materiaActualizada) {
            return res.status(404).json({message: "Materia no encontrada"})
        }
        res.json({message: "Materia actualizada correctamente", materiaActualizada})
    } catch (error) {
        res.status(500).json({message: "Error al actualizar la materia", error:error.message})
    }
}

const eliminarMaterias = async (req,res) =>{
    try {
        const materiaEliminada = await Materias.findByIdAndDelete(id)
        if (!materiaEliminada) {
            return res.status(404).json({message: "Materia no encontrada"})
        }
        res.json({message: "Materia eliminada correctamente"})
    } catch (error) {
        res.status(500).json({message: "Error al eliminar la materia", error:error.message})
    }
}

export {
    crearMaterias,
    listarMaterias,
    obtenerMateriasPorID,
    actualizarMaterias,
    eliminarMaterias
}