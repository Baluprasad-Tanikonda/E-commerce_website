import { useState } from 'react';
import styles from './Checkout.module.css'; // Importing styles from the CSS module

const Checkout = ({ cart }) => {
    const [form, setForm] = useState({
        name: '',
        address: '',
        payment: 'Visa **** **** **** 1234', // Predefined payment method
    });
    const [confirmation, setConfirmation] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setConfirmation(true); // Show the confirmation message
    };

    const totalAmount = cart.reduce((sum, product) => sum + product.price, 0).toFixed(2);

    return (
        <div className={styles.checkout}> {/* Use styles.checkout here */}
            {confirmation ? (
                <p>Order confirmed! Thank you, {form.name}. Total: ${totalAmount}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="payment"
                        placeholder="Payment Details"
                        required
                        value={form.payment} // Set the predefined value
                        onChange={handleChange}
                    />
                    <button type="submit">Submit Order</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
