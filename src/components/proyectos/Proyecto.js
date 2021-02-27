import React , {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext'
import TareasContext from '../../context/tareas/TareasContext'

const Proyecto = ({proyecto}) => {

    //Extraer datos del state iniacial
    const proyectoContext = useContext(ProyectoContext)
    const {proyectoActual}= proyectoContext

    //Extrar el context de los tareas 
    const tareasContext = useContext(TareasContext)
    const {obtenerTareas} = tareasContext

    //Funcion para fijar el proyecto actual

    const seleccionarProyecto = id =>{
        proyectoActual(id)//fijar proyecto actual
        obtenerTareas(id)
    }

    return ( 
        <li>
            <button 
                className='btn btn-blank'
                type='button'
                onClick={ ()=> seleccionarProyecto(proyecto._id) }
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;