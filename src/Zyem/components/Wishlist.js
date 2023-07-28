import React from 'react';
import {BsFillBagHeartFill} from 'react-icons/bs'
const Wishlist = ({ wishlist, showWishlistData, onRemoveFromWishlist }) => {
  return (
    <div className={`wishlist ${showWishlistData ? 'active' : ''}`}>
      <h2><BsFillBagHeartFill/> ({wishlist.length})</h2>
      <ul>
        {wishlist.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <button onClick={() => onRemoveFromWishlist(product)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
