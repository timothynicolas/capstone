import Navbar from "../components/Navbar"
import FooterComponent from "../components/Footer";
import UserContext from "./Data";
import SampleRef from "../components/SampleRef";
import CountRender from "../components/CountRender";
import Stopwatch from "../components/Stopwatch";
import Counter from "../components/Counter";
import Counter2 from "../components/Counter2";

import { useContext } from "react";

function References(){

    let {user, setUser} = useContext(UserContext);
    return(
        <div>
            <Navbar/>
            <h1>Hi {user}, this is your reference page.</h1>
            <SampleRef/>
            <hr/>
            <h1>Count Render:</h1>
            <CountRender/>
            <hr/>
            <h1>Stopwatch:</h1>
            <Stopwatch/>
            <hr/>
            <h1>Counter:</h1>
            <Counter/>
            <hr/>
            <h1>Counter2 via useReducer:</h1>
            <Counter2/>
            <FooterComponent/>
        </div>
    )
}

export default References;