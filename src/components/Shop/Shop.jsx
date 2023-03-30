import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    useEffect(() => {
        const storeCart = getShoppingCart();
        const saveCart = [];

        //Step 1: get ID
        for (const id in setCart) {
            //Step 2: get the product by using ID
            const saveProduct = products.find(product => product.id === id);
            // console.log(saveProduct);
            if (saveProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }

        setCart(saveCart);

    }, [products])

    const handleAddToCard = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }

            </div>
            <div className='cart'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;