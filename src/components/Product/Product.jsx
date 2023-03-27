import React from 'react';
import './Product.css';

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5 className='product-name'>{name}</h5>
                <h3>${price}</h3>
                <h3>{seller}</h3>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button className='btn-cart'>Add Cart</button>
        </div>
    );
};

export default Product;