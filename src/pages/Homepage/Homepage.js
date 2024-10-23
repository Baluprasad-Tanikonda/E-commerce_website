import ProductList from '../../components/ProductList/ProductList';
import styles from './Homepage.module.css';

const Home = ({ addToCart }) => {
    return (
        <div className={styles.home}>
            <h2>Products</h2>
            <ProductList addToCart={addToCart} />
        </div>
    );
};

export default Home;
