import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';
import Spinner from '../Spinner/Spinner';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('all');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            console.log(`Fetching products for category: ${category} on page: ${page}`); // Log category and page
            try {
                const response = category === 'all'
                    ? await axios.get(`https://fakestoreapi.com/products?limit=8&page=${page}`)
                    : await axios.get(`https://fakestoreapi.com/products/category/${category}?limit=8&page=${page}`);

                console.log('Products fetched successfully:', response.data); // Log fetched products

                if (page === 1) {
                    // Reset products when changing category
                    setProducts(response.data);
                } else {
                    // Append new products if loading more
                    setProducts((prevProducts) => [...prevProducts, ...response.data]);
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching products:', err); // Log the error
                setError('Error fetching products. Please try again later.');
                setLoading(false);
            }
        };
        fetchProducts();
    }, [page, category]);

    const loadMore = () => setPage(page + 1);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setPage(1);
    };

    if (loading) return <Spinner />;
    if (error) return <p className={styles.message}>{error}</p>;

    return (
        <div className={styles['product-list']}>
            <div className={styles['category-selector']}>
                <select onChange={handleCategoryChange} value={category}>
                    <option value="all">All Products</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>

            <div className={styles['product-grid']}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>

            <button className={styles.button} onClick={loadMore}>Load More</button>
        </div>
    );
};

export default ProductList;
