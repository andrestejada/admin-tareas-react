import React , {Fragment , useContext} from 'react';
import Tarea from './Tarea'
import {CSSTransition , TransitionGroup} from 'react-transition-group'

import ProyectoContext from '../../context/proyectos/proyectoContext'
import TareasContext from '../../context/tareas/TareasContext'

const ListadoTareas = () => {

     //obtner el state del formulario
     const proyectosContext = useContext(ProyectoContext)
     const {proyecto , eliminarProyecto} = proyectosContext;

     //obtener el state de las tareas
     const tareasContext = useContext(TareasContext)
     const {tareasproyecto} = tareasContext
     //si no hay proyecto seleccionado
     if(!proyecto) return <h2>Seleccione Un Proyecto</h2>

     //Array destructuring para extraer el proyecto actual
     const [proyectoActual]=proyecto

    //Elima el proyecto seleccionado

    const onclickBorrar = ()=>{
        eliminarProyecto(proyectoActual._id)
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className='listado-tareas'>
                {
                    tareasproyecto.length ===0
                    ? <li className='tarea'>No hay tareas</li>
                    : <TransitionGroup>
                        {tareasproyecto.map( tarea => (
                       <CSSTransition
                         key={tarea._id}
                         timeout={200}
                         classNames='tarea'
                       >
                            <Tarea
                                   
                                    tarea={tarea}
                                />
                       </CSSTransition>
                    ) )}
                    </TransitionGroup>
                
                 } </ul>

            <button
                type='button'
                className='btn btn-eliminar'
                onClick={ onclickBorrar}
            >Eliminar Proyecto &times;</button>            
        
        </Fragment>
     );
}
 
export default ListadoTareas;