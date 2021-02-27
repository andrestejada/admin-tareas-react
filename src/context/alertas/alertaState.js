import React , {useReducer} from 'react';
import {MOSTRAR_ALERTA,ELIMINAR_ALERTA} from '../../types'
import alertaContext from '../../context/alertas/alertaContext'
import alertaReducer from '../../context/alertas/alertaReducer'


const AlertaState = props => {

    const initialState={
        alerta:null
    }

    const [state,dispatch] = useReducer(alertaReducer,initialState);

    const mostrarAlerta = (msg,categoria)=>{
        dispatch({
            type:MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        setTimeout(()=>{
            dispatch({
                type: ELIMINAR_ALERTA
            })
        },3000)
    }

    return ( 
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
     );
}
 
export default AlertaState;