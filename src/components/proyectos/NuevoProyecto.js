import React, { Fragment , useState ,useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    //obtner el state del formulario
    const proyectosContext = useContext(ProyectoContext)
    const {formulario , errorformulario , mostrarFormulario , agregarProyecto , mostrarError } = proyectosContext;


    const [proyecto,guardarProyecto]= useState({
        nombre:''
    })

    const { nombre }= proyecto


    const onChangeProyecto = e =>{
            guardarProyecto({
                ...proyecto,
                [e.target.name] : e.target.value
            })
    }


    const onSubmitProyecto = e =>{
        e.preventDefault()

        //validar
        if( nombre === ''){
            mostrarError();
            return
        }
        //agregar al state
        agregarProyecto(proyecto)
       //reiniciar el form
       guardarProyecto({
           nombre:''
       })


    }

    const onClickFormulario = ()=>{
        mostrarFormulario()
    }

    return ( 
        <Fragment>
            <button 
                className='btn btn-block btn-primario'
                type='button'
                onClick={onClickFormulario}
            >Nuevo Proyecto</button> 


            {formulario

            ? 
                (
                    <form 
                className='formulario-nuevo-proyecto'
                onSubmit={onSubmitProyecto}
            >
                
                <input
                    type='text'
                    name='nombre'
                    placeholder='Nombre Proyecto'
                    className='input-text'
                    onChange={onChangeProyecto}
                    value={nombre}
                />

                <input
                    type='submit'
                    className='btn btn-block btn-primario'
                    value='Agregar Proyecto'
                />
            </form>
                )
            : null}

            {errorformulario ? <p className='mensaje error'>El Nombre del proyecto es obligatorio</p> : null}

        </Fragment>
     );
}
 
export default NuevoProyecto;