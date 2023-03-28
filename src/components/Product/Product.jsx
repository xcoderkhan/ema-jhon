import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;

    const handleAddToCard = props.handleAddToCard;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5 className='product-name'>{name}</h5>
                <h3>${price}</h3>
                <h3>{seller}</h3>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCard(props.product)} className='btn-cart'>
                Add Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;