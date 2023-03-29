import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const product = (props) => {
    const {img, name, seller, price, ratings} = props.product
    const handaleAddToCart = props.handaleAddToCart;
    return (
        <div className='card-product'>
            <div className='imges'>
                <img src={img} alt=""/>
            </div>
            <div className='product'>
                <h5 className='product-name'>{name}</h5>
                <p className='price'>Price:${price}</p>
                <p className='caption'>Manufacturer: {seller}</p> 
                <p className='caption'>Rating :{ratings} start</p>
            </div>
            <div className='btn'>
                <button onClick={() => handaleAddToCart(props.product)} className='button'>
                        Add to Cart
                        <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default product;