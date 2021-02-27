import {MOSTRAR_ALERTA,ELIMINAR_ALERTA} from '../../types'

export default (state,action)=>{
    switch(action.type){
        case MOSTRAR_ALERTA :
            return{
                alerta: action.payload
            }
        case ELIMINAR_ALERTA:
            return{
                alert:null
            }
        default:
            return state
    }
}