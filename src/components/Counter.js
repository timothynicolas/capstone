import { useState} from "react";

function Counter(){
    let [count, setCount] = useState(0);
   
    let inc = () => {
        let time = document.getElementById("count");
        time.style.backgroundColor = "yellow";
        setCount(prev => prev + 1)
    }

    let dec = () => {
        setCount(prev => prev - 1)
        let time = document.getElementById("count");
        time.style.backgroundColor = "red";
    }

    let reset = () => {
        setCount(0)
        let time = document.getElementById("count");
        time.style.backgroundColor = "white";
    }
    return(
        <div>
            <h1 id="count">{count}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;