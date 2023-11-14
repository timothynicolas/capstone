import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';

// PAGES DIRECTORY
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile';
import UserContext from './pages/Data';
import Login from './pages/Login';


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
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/contact" element={<ContactUs/>}/>
                         
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter> 
        </div>
    )
}

export default App;