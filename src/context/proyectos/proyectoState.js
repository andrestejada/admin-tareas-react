import React, { useReducer } from 'react'
import ProyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR
} from '../../types/index';
import clienteAxios from '../../config/axios'

const ProyectoState = props => {

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
    mensaje:null
  }

  //dispatch para ejecutar la funciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  //serie de funcione para el CRUD

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  //Obtener proyectos
  const obtenerProyectos = async () => {
   try {
     const respuesta = await clienteAxios.get('/api/proyectos')
     dispatch({
      type: OBTENER_PROYECTOS,
      payload: respuesta.data.proyectos
    })
   } catch (error) {
    const alerta ={
      msg:'Hubo un error',
      categoria: 'alerta-error'
    }
   dispatch({
     type: PROYECTO_ERROR,
     payload: alerta
   })
   }
  }

  //Agregar Proyectos
  const agregarProyecto = async proyecto => {
    try {
      const respuesta = await clienteAxios.post('/api/proyectos',proyecto)
      dispatch({
        type:AGREGAR_PROYECTO,
        payload:respuesta.data
      })

    } catch (error) {
      const alerta ={
        msg:'Hubo un error',
        categoria: 'alerta-error'
      }
     dispatch({
       type: PROYECTO_ERROR,
       payload: alerta
     })
    }
  
  }

  //validar que el formulario no se envie vacio
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }

  //selecciona al poryecto que el usuario le dio click
  const proyectoActual = proyectoId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    })
  }

  //Eliminar Proyecto
  const eliminarProyecto = async proyectoId =>{
    try {
      await clienteAxios.delete(`api/proyectos/${proyectoId}`)
      dispatch({
        type:ELIMINAR_PROYECTO,
        payload:proyectoId
    })
    } catch (error) {
      const alerta ={
        msg:'Hubo un error',
        categoria: 'alerta-error'
      }
     dispatch({
       type: PROYECTO_ERROR,
       payload: alerta
     })
  }
  }
  return (
    <ProyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mensaje: state.mensaje,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  )
}

export default ProyectoState
