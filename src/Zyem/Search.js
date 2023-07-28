import React, { useState } from "react";
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  // Function to generate random products using faker
  const generateRandomProducts = () => {
    const clothingTypes = ["man", "woman", "child"];
    const productList = [];

    while (productList.length < 10) {
      let productName = faker.commerce.productName();
      let productType = productName.toLowerCase();

      // Check if the product name contains clothing-related keywords
      if (clothingTypes.some(type => productType.includes(type))) {
        productList.push({
          id: faker.datatype.uuid(),
          name: productName,
          price: faker.commerce.price(),
          image: faker.image.imageUrl(150, 150, 'clothing', true),
          inWishlist: false,
          showButton: false,
        });
      }
    }

    setProducts(productList);
    console.log(productList);
  };

  // Function to handle the search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle the Wishlist toggle
  const handleWishlistToggle = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, inWishlist: !product.inWishlist } : product
      )
    );
  };

  // Function to display the View Product button on hover
  const handleMouseEnter = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, showButton: true } : product
      )
    );
  };

  const handleMouseLeave = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, showButton: false } : product
      )
    );
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={generateRandomProducts}>Get Trending</button>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`product-item ${product.inWishlist ? "wishlist" : ""}`}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={() => handleMouseLeave(product.id)}
          >
            <img src={product.image} alt="Product" />
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
            {product.showButton && <button>View Product</button>}
            <button
              className="wishlist-button"
              onClick={() => handleWishlistToggle(product.id)}
              style={{ backgroundColor: product.inWishlist ? "red" : "" }}
            >
              Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
