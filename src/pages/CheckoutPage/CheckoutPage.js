import Checkout from '../../components/Checkout/Checkout';
import styles from './CheckoutPage.module.css';

const CheckoutPage = ({ cart }) => {
    return (
        <div className={styles['checkout-page']}>
            <h2>Checkout</h2>
            <Checkout cart={cart} />
        </div>
    );
};

export default CheckoutPage;
