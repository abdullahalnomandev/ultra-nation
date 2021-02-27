import React from 'react';
import Country from '../Country/Country';

const Cart = (props) => {

    const cart =props.cart;
    console.log(cart);

    let population = 0;

    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        population = population + country.population;
        
    }
   
    return (
        <div>
            <h2 style={{color:'blue'}}>This is Cart:{cart.length} </h2>
            <p>Total population : {population}</p>
        </div>
    );
};

export default Cart;