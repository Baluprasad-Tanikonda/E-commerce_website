// src/components/Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = ({ cart, removeFromCart }) => {
    const navigate = useNavigate();
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

    const handleCheckoutClick = () => {
        navigate('/checkout'); // Navigate to the checkout page
    };

    return (
        <div className={styles.cart}>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((product, index) => (
                            <li key={index}>
                                <p>{product.title}</p>
                                <p>${product.price}</p>
                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p className={styles.total}>Total: ${totalPrice.toFixed(2)}</p>
                    <button className={styles.checkoutButton} onClick={handleCheckoutClick}>
                        Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
