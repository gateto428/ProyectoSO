import Processor from '../../models/Processor.js';
export const START_SIMULATION  = 'START_SIMULATION';
let proceso = new Processor ();

export function StartSimulator(){
    return function (dispatch){
        let  arry = proceso.runInterface();
        proceso = new Processor ()
        return dispatch({type: START_SIMULATION, payload: arry});
    }
}