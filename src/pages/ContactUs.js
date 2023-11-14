import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";
import UserContext from "./Data";

import { useContext } from "react";

function ContactUs(){

    let {user, setUser} = useContext(UserContext);
    return(
        <div>
            <Navbar/>
            <h1 className="text-center mt-5">Contact Us Page</h1>
            <h1>Tell us your thoughts {user}</h1>
            <FooterComponent/>
        </div>
    )
}

export default ContactUs;