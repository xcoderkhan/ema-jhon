import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    // const { cart } = props; //Destructuring method using 
    console.log(cart);

    let total = 0;
    let shippingcost = 0;

    for (const product of cart) {
        total = total + product.price;
        shippingcost = shippingcost + product.shipping;

    }

    const tax = total * 7 / 100;

    const grandTotal = total + shippingcost + tax;

    return (
        <div>
            <div className="cart">
                <h5 className=' text-red-600 mb-2'>Order Summary</h5>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping Charge: $ {shippingcost}</p>
                <p>Tax: $ {tax}</p>
                <p>GrandTotal: $ {grandTotal}</p>
                <button>Clear Cart</button>
                <button>Review Order</button>

            </div>
        </div>
    );
};

export default Cart;