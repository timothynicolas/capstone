import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';

// PAGES DIRECTORY
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import UserContext from './pages/Data';
import Login from './pages/Login';
import References from './pages/References';

function App(){

    let [user, setUser] = useState("Guest");
    return(
        <div>
            <BrowserRouter>
                <UserContext.Provider value={{user, setUser}}>
                    <Routes>
                        <Route path="samplereact/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/shop" element={<Shop/>}/>
                        <Route path="/contact" element={<ContactUs/>}/>
                        <Route path="/references" element={<References/>}/> 
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter> 
        </div>
    )
}

export default App;