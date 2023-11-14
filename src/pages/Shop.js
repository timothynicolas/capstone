
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserContext from './Data';
import Products from '../components/Product';

import { useContext } from 'react';

function Shop(){

    let {user, setUser} = useContext(UserContext);
    return(
        <div>
            <Navbar/>
            <h1>Hi, {user}!</h1>
            <h1 className='text-center my-5'>SHOP PAGE</h1>
            
            
            <Products/>
            <Footer/>
        </div>
    )
}

export default Shop;