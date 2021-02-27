import React , {useContext , useState, useEffect} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext'
import TareasContext from '../../context/tareas/TareasContext'

const FormTarea = () => {

    //Extraer datos del state iniacial
    const proyectoContext = useContext(ProyectoContext)
    const {proyecto}= proyectoContext

    //extraer funcion del context
    const tareasContext = useContext(TareasContext)
    const {agregarTarea ,errortarea , validarTarea ,obtenerTareas ,tareaseleccionada,actualizarTarea,limpiarTarea} = tareasContext


     //Effect si hay una tarea seleccionada
     useEffect(()=>{
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre:''
            })
        }
    },[tareaseleccionada])
    //state para guardar el nombre de la tarea
    const [tarea , guardarTarea ]=useState({
        nombre: ''
    })
   

    //array destructuring 
    const {nombre}= tarea

    //si no hay proyecto seleccionado
    if(!proyecto) return null

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual]=proyecto

    //funcion guarda los cambiol del nombre de la tarea

    const hadleOnchange = e =>{

        guardarTarea({
            ...tarea ,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitTarea = e=>{
        e.preventDefault()
        //validar
        if(nombre.trim()===''){
            validarTarea()
            return
        }

        //verificar si la tarea es nueva o existente
        if(tareaseleccionada===null){
            //la tarea es nueva
            //agregar la nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id
            agregarTarea(tarea)
        }else{
            actualizarTarea(tarea)
            //limpiar la tarea para que vulva a null
            limpiarTarea()
        }

       
        //agregar tareas a tareas del rpyecto seleccionado
        obtenerTareas(proyectoActual.id)

        //reiniciar el form
        guardarTarea({
            nombre:''
        })
    }

    return ( 
        <div className='formulario'>
            <form 
                onSubmit={onSubmitTarea}
            >
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea'
                        name='nombre'
                        value={nombre}
                        onChange={hadleOnchange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-block btn-primario btn-submit'
                        value={tareaseleccionada ?'Editar Tarea' :'Agregar Tarea'}
                    />
                </div>
            </form>
            {errortarea    
            ?<p className='error mensaje' >El nombre de la tarea es obligatorio</p> 
            : null}
        </div>
     );
}
 
export default FormTarea;