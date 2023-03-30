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

    //////////// nicher eei 5 ta karone display te data load kore rakte pari amra 
    useEffect( () => {
        const storderCart = getShoppingCart()
        const saveCart = [];
        // step -1 = Get id
        for(const id in storderCart){{
            // step-2 = get the product of the product
            const addedProduct = products.find(p => p.id === id)
           
            if(addedProduct){
                 //  step-3 = get quantity of the product
                const quentity = storderCart[id];
                addedProduct.quentity = quentity;
                // step-4 = add the added product to the saved cart
                saveCart.push(addedProduct);
            }
        }}
        // step-5 = set rhe cart
        setcart(saveCart);
    }, [products])
    const handaleAddToCart =(product)=>{
        let newCart = [];
        const exists = cart.find(p => p.id === product.id);
        if(!exists){
            product.quentity = 1 ;
            newCart = [...cart, product]
        }else{
            exists.quentity = exists.quentity + 1 ;
            const remaining =cart.filter(p => p.id !== product.id);
            newCart = [...remaining, exists];
        }

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