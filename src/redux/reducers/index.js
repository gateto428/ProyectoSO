import {START_SIMULATION} from "../actions/index.js";
    
 
const initialState = {
    arr: []
 };

function rootReducer(state = initialState, action){
    if(action.type === START_SIMULATION){
            return {
                ...state,
               arr:  action.payload
            } ;
        }
        return state;
}

export default rootReducer;