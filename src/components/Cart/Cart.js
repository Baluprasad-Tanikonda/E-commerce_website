import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = ({ cart, removeFromCart, updateCart }) => {
    const navigate = useNavigate();
    const totalPrice = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);

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
                                <p>${product.price} x {product.quantity}</p>
                                <button onClick={() => updateCart(index, product.quantity - 1)} disabled={product.quantity <= 1}> - </button>
                                <button onClick={() => updateCart(index, product.quantity + 1)}> + </button>
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
