import { useState, useRef, useReducer } from "react";

function Stopwatch(){
    let [second, setSecond] = useState(0);
    const timer = useRef();

    let start = () => {
        timer.current = setInterval(() => setSecond(second => second + 1),1000);
    }

    let stop = () => {
        clearInterval(timer.current)
    }

    let reset = () => {
        clearInterval(timer.current);
        setSecond(0);
    }
    return(
        <div>
            <h1>{second}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch;