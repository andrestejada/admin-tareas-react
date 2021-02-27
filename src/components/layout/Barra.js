import React , {useContext,useEffect} from 'react';
import AuthContext from '../../context/auth/authContext'


const Barra = () => {
    //context de auth
    const authContext = useContext(AuthContext);
    const {usuario,usuarioAutenticado,cerrarSesion} = authContext
    //matiene el usuario autenticado en proyectos
    useEffect(()=>{
        usuarioAutenticado()
    },[])

    return ( 
        <header className='app-header'>
            {usuario ? <p className='nombre-usuario'>Hola <span>{usuario.nombre}</span> </p>:null}

            <nav className='nav-principal'>
                <button
                    className='btn btn-blank cerrar-sesion'
                    onClick={()=>cerrarSesion()}
                >Cerrar Sesión</button>
            </nav>
        </header>
     );
}
 
export default Barra;