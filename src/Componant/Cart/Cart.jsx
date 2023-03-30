import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart 

    let totalPrice = 0;
    let totalShipping =0;
    let quentity = 0 ;

    for (const product of cart) {
        // // step -1
        // if(product.quentity === 0){
        //     product.quentity = 1 ;
        // }
        
        // // step-2
        // product.quentity = product.quentity || 1 ; 

        totalPrice = totalPrice + product.price * product.quentity;
        totalShipping = totalShipping + product.shipping;
    }
    const totalTax = totalPrice * 5 / 100;

    const grandTotal = totalPrice + totalShipping + totalTax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quentity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping : {totalShipping}</p>
            <p>Tax : ${totalTax.toFixed(2)}</p>
            <h6>Grand-Total : $ {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;