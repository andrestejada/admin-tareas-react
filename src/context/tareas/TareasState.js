import React , {useReducer} from 'react';
import TareaContext  from './TareasContext'
import TareaReducer from './TareasReducer'
import {TAREA_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA,ELIMINAR_TAREA,ESTADO_TAREA,TAREA_ACTUAL,ACTUALIZAR_TAREA,LIMPIAR_TAREA} from '../../types'
import clienteAxios  from '../../config/axios'

const TareaState = props => {
    const initialState={
        tareasproyecto: [],
        errortarea:false,
        tareaseleccionada:null
    }

    const [state,dispatch]= useReducer(TareaReducer,initialState)

    //funciones que modifican el state
    const obtenerTareas = async proyecto =>{
        try {
            const respuesta = await clienteAxios.get('/api/tareas',{params:{proyecto}})
            dispatch({
                type: TAREA_PROYECTO,
                payload: respuesta.data.tareas
            })
        } catch (error) {
            
        }
    }

    //Funcion para agregar tarea al State
    const agregarTarea = async tarea =>{
        try {
            const respuesta = await clienteAxios.post('/api/tareas',tarea)
            dispatch({
                type:AGREGAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            
        }
    }
    //Mensaje de error cuando intenta enviar una tarea vacia
    const validarTarea = ()=>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar la tarea con respecto a su id
    const eliminarTarea =async(id, proyecto) =>{
      try {
        await clienteAxios.delete(`api/tareas/${id}`, {params:{proyecto}})
        dispatch({
            type:ELIMINAR_TAREA,
            payload: id
           })
      } catch (error) {
          
      }
    }
  
    //guarda la tarea seleccionada
    const guardarTareaActual =  tarea =>{
        dispatch({
            type:TAREA_ACTUAL,
            payload:tarea
        })
    }
    //actulizar una tarea seleccionada
    const actualizarTarea = async tarea =>{

        
        try {
            const respuesta = await clienteAxios.put(`/api/tareas/${tarea._id}`,tarea)
            console.log(respuesta)
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload:respuesta.data.tarea
            })
        } catch (error) {
            
        }
    }

    //Limpiar la tarea
    const limpiarTarea = ()=>{
        dispatch({
            type:LIMPIAR_TAREA,
        })
    }

    return ( 
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
     );
}
 
export default TareaState;