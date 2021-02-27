import React ,{useState , useContext ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
    //context de alerta
    const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} = alertaContext;
    //contex de auth
    const authContext = useContext(AuthContext);
    const {autenticado,mensaje,iniciarSesion} = authContext;
    //en caso de que el password y la contraseña no existan y si pasa enviarlo al proyectos
    useEffect(()=>{
        if(autenticado){
            props.history.push('/proyectos')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria)
        }
    },[autenticado,mensaje,props.history])

    const [usuario,guardarUsuario]= useState({
        email:'',
        password:''
    })

    const {email,password}= usuario

    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        //validar que los campos no esten vacios
        if(email.trim()===''||password.trim()===''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error')
            return
        }
        //pasar al action
        iniciarSesion({email,password})
    }

    return ( 
        <div className='form-usuario'>
        {alerta ? <div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div> :null}
            <div className='contenedor-form sombra-drark'>
                <h1>Iniciar Sección</h1>

                <form 
                    onSubmit={onSubmit}
                >
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
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sección'
                        />
                    </div>

                </form>
                <Link to={'/nuevacuenta'} className='enlace-cuenta' >Crear una cuenta</Link>
            </div>
        </div>
     );
}
 
export default Login;