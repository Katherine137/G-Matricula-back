import Estudiantes from "../models/Estudiantes.js";

const crearEstudiantes = async (req,res) =>{
    try {
        const {nombre, apellido, cedula, fecha_nacimiento, ciudad, direccion, telefono, email} = req.body
        const existe = await Estudiantes.findOne({cedula})
        if (existe) {
            return res.status(400).json({message: "Ya esta creado el estudiante"})
        }
        const nuevoEstudiante = new Estudiantes({
            nombre,
            apellido,
            cedula,
            fecha_nacimiento,
            ciudad,
            direccion,
            telefono,
            email
        })
        await nuevoEstudiante.save()
        res.json({message: "Estudiante creado correctamente", nuevoEstudiante})
    } catch (error) {
        res.status(500).json({message: "Error al crear el estudiante", error:error.message})
    }
}

const listarEstudiantes = async (req,res) =>{
    try {
        const estudiantes = await Estudiantes.find().sort({createdAt: -1})
        res.json({message: "Estudiantes", estudiantes})
    } catch (error) {
        res.status(500).json({message: "Error al obtener estudiantes", error:error.message})
    }
}

const obtenerEstudiantesPorID = async (req,res) =>{
    const estudiante = await Estudiantes.findById(req.params.id)
    res.json({message: "Estudiante", estudiante})
}

const actualizarEstudiantes = async (req,res) =>{
    try {
        const {id} = req.params
        const estudianteActualizado = await Estudiantes.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if (!estudianteActualizado) {
            return res.status(404).json({message: "Estudiante no encontrado"})
        }
        res.json({message: "Estudiante actualizado correctamente", estudianteActualizado})
    } catch (error) {
        res.status(500).json({message: "Error al actualizar el estudiante", error:error.message})
    }
}

const eliminarEstudiantes = async (req,res) =>{
    try {
        const {id} = req.params
        const estudianteEliminado = await Estudiantes.findByIdAndDelete(id)
        if (!estudianteEliminado) {
            return res.status(404).json({message: "Estudiante no encontrado"})
        }
        res.json({message: "Estudiante eliminado correctamente"})
    } catch (error) {
        res.status(500).json({message: "Error al eliminar el estudiante", error:error.message})
    }
}

export {
    crearEstudiantes,
    listarEstudiantes,
    obtenerEstudiantesPorID,
    actualizarEstudiantes,
    eliminarEstudiantes
}