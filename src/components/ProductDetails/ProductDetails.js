// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ProductDetails.module.css';
import Spinner from './../Spinner/Spinner';

const ProductDetails = ({ addToCart }) => { // Accept addToCart as a prop
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching product details.');
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) return <Spinner />;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles['product-details']}>
            {product && (
                <>
                    <div className={styles['image-container']}>
                        <img src={product.image} alt={product.title} className={styles['product-image']} />
                    </div>
                    <div className={styles['product-info']}>
                        <h1 className={styles['product-title']}>{product.title}</h1>
                        <div className={styles['rating']}>
                            {/* Render stars based on rating */}
                            {[...Array(Math.floor(product.rating.rate))].map((_, index) => (
                                <span key={index} className={styles['star']}>&#9733;</span> // Star character
                            ))}
                            <span>({product.rating.count} reviews)</span>
                        </div>
                        <p className={styles['price']}>Price: ${product.price}</p>
                        <p className={styles['product-description']}>{product.description}</p>
                        <button className={styles['button']} onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductDetails;
