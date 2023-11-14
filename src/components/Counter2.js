import { useReducer} from "react";

const initialstate = {firstCounter: 0};
const reducer = (state, action) => {
    switch(action.type){
        case 'inc':
            return {firstCounter: state.firstCounter + action.points};
        case 'dec':
            return {firstCounter: state.firstCounter - action.points};
        case 'reset':
            return initialstate;
        default:
            return state;
    }
}

function Counter2(){
    let [count, dispatch] = useReducer(reducer, initialstate);
   
    return(
        <div>
            <h1>{count.firstCounter}</h1>
            <button onClick={() => dispatch({type: 'inc', points: 5})}>+5</button>
            <button onClick={() => dispatch({type: 'dec', points: 5})}>-5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default Counter2;