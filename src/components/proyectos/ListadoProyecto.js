import React , {useContext,useEffect} from 'react';
import Proyecto from './Proyecto'
import ProyectoContext from '../../context/proyectos/proyectoContext'
import AlertaContext from '../../context/alertas/alertaContext'

const ListadoProyecto = () => {
    //Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext)
    const {proyectos,obtenerProyectos,mensaje} = proyectosContext
    //extraer el context de alertas
    const alertaContext = useContext(AlertaContext);
    const {mostrarAlerta,alerta} = alertaContext

    useEffect(()=>{
        if(mensaje){
            mostrarAlerta( mensaje.msg,  mensaje.categoria)
        }
        obtenerProyectos()
    },[mensaje])
   //validar si hay o no proyectos 
    if(proyectos.length === 0)return <p>No hay proyectos, Empieza creando Uno</p> 

    return (

        <ul className='listado-proyectos'>
            {alerta ? <div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>:null}
            {proyectos.map( proyecto=> (
                <Proyecto
                    key={proyecto._id}
                    proyecto= {proyecto}
                />
            ) )}

        </ul>
      );
}
 
export default ListadoProyecto;