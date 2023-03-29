import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setcart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect( () => {
        const storderCart = getShoppingCart()
        for(const id in storderCart){{
            
        }}
    }, [])
    const handaleAddToCart =(product)=>{
        const newCart = [...cart, product]
        setcart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product
                        key= {product.id}
                        product= {product}
                        handaleAddToCart = {handaleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;