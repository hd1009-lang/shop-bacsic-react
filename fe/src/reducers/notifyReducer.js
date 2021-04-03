import {NOTIFY} from '../constants/notifyConstant'

export const notifyReducer=(state={},action)=>{
  switch (action.type) {
    case NOTIFY:
      
        return action.payload
  
    default:
      return state;
  }
}