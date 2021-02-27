import React ,{useState,useContext,useEffect} from 'react';
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/auth/authContext'


const NuevaCuenta = (props) => {
    //context de alerta
    const alertaContext = useContext(AlertaContext)
    const {alerta,mostrarAlerta} = alertaContext
    //contex de auth
    const authContext = useContext(AuthContext)
    const {registartUsuarios,autenticado,mensaje} = authContext
    //en caso de que el usuario se haya autenticado o regirtado o el usuario se un registro duplicado
    useEffect(()=>{
        if(autenticado){
            props.history.push('/proyectos')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria)
        }
    },[autenticado,mensaje,props.history])

    //state inicial
    const [usuario,guardarUsuario]= useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    })

    const {nombre,email,password,confirmar}= usuario

    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        //validar
        //que los campos no esten vacios
        if(nombre.trim()===''||email.trim()===''||password.trim()===''||confirmar.trim()===''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error')
            return
        }
        //password mini de 6 caracteres
        if(password<6){
            mostrarAlerta('El password es de minimo 6 caracteres','alerta-error')
            return
        }

        //los dos password tienen que se iguales
        if(password !== confirmar){
            mostrarAlerta('Los passwords no son iguales','alerta-error')
            return
        }
        //pasarlo al action
        registartUsuarios({
            nombre,
            email,
            password,

        })
    }

    return ( 
        <div className='form-usuario'>
        {alerta ? <div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div> :null}
            <div className='contenedor-form sombra-drark'>
                <h1>Regístrate</h1>

                <form 
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='email'>Nombre</label>
                        <input 
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Tu Nombre'
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu Password'
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Password</label>
                        <input 
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Confirmar Password'
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registrarse'
                        />
                    </div>

                </form>
                <Link to={'/'} className='enlace-cuenta' >Regresar a Iniciar Sesión </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;