import { useState } from 'react';
import book1 from '../media/book1.jpeg';
import book2 from '../media/book2.webp';
import book3 from '../media/book3.jpeg';


function Products(){

    //TO CONTROL THE # OF ITEMS TO BE ADDED
    let [number, setNumber] = useState(0);
    return(

    <div className="container d-flex justify-content-between">
        {/* FIRST CARD */}
        <div>
            <div className="card d-inline-block" style={{width: "18rem"}}>
                <img src={book1} className="card-img-top" alt="..." style={{objectFit: 'cover', width: '18rem', height: '18rem'}}/>
                <div className="card-body">
                    <h5 className="card-title text-center">Bobby Fischer</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-secondary' onClick={() => {setNumber(number - 1)}}>-</button>
                    <span>{number}</span>
                    <button className='btn btn-secondary' onClick={() => {setNumber(number + 1)}}>+</button>
                    <br/>
                    <a href="#" className="btn btn-primary mt-3">Add to Cart</a>
                </div>
            </div>
        </div>

        {/* SECOND CARD */}
        <div>
            <div className="card d-inline-block" style={{width: "18rem"}}>
                <img src={book2} className="card-img-top" alt="..." style={{objectFit: 'cover', width: '18rem', height: '18rem'}}/>
                <div className="card-body">
                    <h5 className="card-title text-center">Mammoth Book</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-secondary' onClick={() => {setNumber(number - 1)}}>-</button>
                    <span>{number}</span>
                    <button className='btn btn-secondary' onClick={() => {setNumber(number + 1)}}>+</button>
                    <br/>
                    <a href="#" className="btn btn-primary mt-3">Add to Cart</a>
                </div>
            </div>
        </div>

        {/* THIRD CARD */}

            
        <div>
            <div className="card d-inline-block" style={{width: "18rem"}}>
                <img src={book3} className="card-img-top" alt="..." style={{objectFit: 'cover', width: '18rem', height: '18rem'}}/>
                <div className="card-body">
                    <h5 className="card-title text-center">Chess Struggle</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-secondary' onClick={() => {setNumber(number - 1)}}>-</button>
                    <span>{number}</span>
                    <button className='btn btn-secondary' onClick={() => {setNumber(number + 1)}}>+</button>
                    <br/>
                    <a href="#" className="btn btn-primary mt-3">Add to Cart</a>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Products;    