import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    // const { cart } = props; //Destructuring method using 
    console.log(cart);

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    return (
        <div>
            <div className="cart">
                <h5>Order Summary</h5>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price:{total}</p>
                <p>Total Shipping Charge:</p>
                <p>Tax:</p>
                <button>Clear Cart</button>
                <button>Review Order</button>

            </div>
        </div>
    );
};

export default Cart;