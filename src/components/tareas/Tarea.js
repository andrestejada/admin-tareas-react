import React , {useContext}from 'react';
import TareasContext from '../../context/tareas/TareasContext'
import ProyectoContext from '../../context/proyectos/proyectoContext'

const Tarea = ({tarea}) => {
    //Extraer datos del state iniacial
    const proyectoContext = useContext(ProyectoContext)
    const {proyecto}= proyectoContext
    //extraer funcion del context
    const tareasContext = useContext(TareasContext)
    const {eliminarTarea ,obtenerTareas,actualizarTarea,guardarTareaActual} = tareasContext

    //array destructing
    const [proyectoActual]=proyecto

    //eliminar la tarea de el proyecto
    const onclickEliminar = id =>{
        eliminarTarea(id,proyectoActual._id)
        obtenerTareas(proyectoActual.id)
    }
    //cambia el estado de la tarea
    const CambiarEstado = tarea =>{
        if(tarea.estado){
            tarea.estado = false
        }else{
            tarea.estado = true
        }

        actualizarTarea(tarea)
    }
    //seleccione la tarea actual
    const tareaSeleccionada = tarea =>{
        guardarTareaActual(tarea)

    }

    return ( 
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className='estado' >
                { tarea.estado
                ? 
                    (
                        <button 
                            className='completo'
                            type='button'
                            onClick={()=> CambiarEstado(tarea) }
                        >Completo</button>
                    )
                : 
                    (
                        <button 
                            className='incompleto'
                            type='button'
                            onClick={()=> CambiarEstado(tarea) }
                        >Incompleto</button>
                    )
                
                }
            </div>
            <div className='acciones'>
                <button 
                    type='button'
                    className='btn btn-primario'
                    onClick={ ()=> tareaSeleccionada(tarea)}
                >Editar</button>
                <button 
                    type='button'
                    className='btn btn-secundario'
                    onClick={()=>onclickEliminar(tarea._id) }
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;