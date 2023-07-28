import React from 'react';

const Product = ({ product, onAddToWishlist, isInWishlist }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button className={isInWishlist ? 'wishlist-btn active' : 'wishlist-btn'} onClick={() => onAddToWishlist(product)}>
        {isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
};

export default Product;
