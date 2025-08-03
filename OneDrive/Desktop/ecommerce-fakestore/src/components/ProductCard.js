import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css';

const ProductCard = ( { product, onAddToCart}) => {
  return (
    <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <h3>{product.title.substring(0, 20)}...</h3>

        
        <p>Price: ${product.price}</p>
        <div className="products-action">
            <button className = "btn btn-primary" onClick={() => onAddToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`} className="btn btn-secondary"> 
          View Details
        </Link>
        </div>
       
    </div>
  );
}

export default ProductCard
