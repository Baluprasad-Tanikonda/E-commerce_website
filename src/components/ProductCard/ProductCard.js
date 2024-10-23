import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, addToCart }) => {
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleCardClick = () => {
        navigate(`/product/${product.id}`); // Redirect to the ProductDetails page
    };

    return (
        <div className={styles['product-card']} onClick={handleCardClick}> {/* Handle click on the whole card */}
            <div className={styles['image-container']}>
                <img src={product.image} alt={product.title} className={styles.image} />
            </div>
            <div className={styles['product-info']}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.price}>${product.price}</p>
                <p className={styles.category}>Category: {product.category}</p>
                <p className={styles.rating}>
                    Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
            </div>
            <button
                className={styles.button}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent click from bubbling up to the card
                    addToCart(product);
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
