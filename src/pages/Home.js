import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Allcards from '../components/Allcards';
import Article from '../components/Article';
import Footer from '../components/Footer';
import Guess from '../components/Guess';
import SampleRef from '../components/SampleRef';
import CountRender from '../components/CountRender';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Counter2 from '../components/Counter2';

import UserContext from './Data';
import { useContext } from 'react';


function Home(){

    let {user, setUser} = useContext(UserContext);

   
    return(
        <>
            <Navbar/>
            <h1>Hi, {user}!</h1>
            
            

            <Carousel/>
            
            <hr/>
            <h1 className='text-center'> Featured</h1>
            <hr/>

            <Allcards/>

            <hr/>
            <h1 className='text-center'> Article</h1>
            <hr/>

            <br/>

            <Article/>

            <br/>
            <br/>
            <br/>

            <hr/>
            <h1 className='text-center'> Guess that Chess Grandmaster</h1>
            <hr/>

            <Guess/>

            <Footer/>

        </>
    )
}

export default Home;