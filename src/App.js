// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import ProductList from './ProductList';
// // import ProductDetails from './ProductDetails';
// // import Cart from './Cart';
// // import Phoneboot from './comp/Phoneboot';
// // import { CartProvider } from './CartContext';

// // const App = () => {
// //   return (
// //     <CartProvider>
// //       <Router>
// //         <Routes>
// //           <Route path="/" element={<ProductList />} />
// //           <Route path="/products/:id" element={<ProductDetails />} />
// //           <Route path="/cart" element={<Cart />} />
// //           <Route path="/phoneboot" element={<Phoneboot />} />
// //         </Routes>
// //       </Router>
// //     </CartProvider>
// //   );
// // };

// // export default App;
// import React from 'react'
// import '../src/Zyem/App.scss'
// import SearchBar from './components/SearchBar';
// import Product from './components/Product';
// import Wishlist from './components/Wishlist';
// import products from './data/products';
// // import Shopify from './project/Shopify/Shopify'
// // import Phoneboot from './Mock/Phoneboot'
// // import TaskManager from './Mock/Taskmane'
// // import Taskmanown from './Mock/Taskmanown'
// // import Appndandundo from './Mock/Appndandundo'
// // import Covid19 from './Mock/Covid19'
// // import Subscription from './project/Subscription'
// // // import Mom from './project/Mom'
// // import Compare from './project/Compare'
// // import Ticktacktoe from './Mock/Ticktacktoe'
// // import Likeandadd from './Mock/Likeandadd'
// // import Countbill from './project/Countbill'
// const App = () => {
//   return (
//     <div>
//       {/* <Covid19/>
//       <Appndandundo/>
// <Phoneboot/>
// <TaskManager/>

// <Taskmanown/> */}
// <Search/>
// {/* <Mom/> */}
// {/* <Compare/> */}
// {/* <Ticktacktoe/> */}
// {/* <Shopify/> */}
// {/* <Phoneboot/> */}
//    {/* <Likeandadd/> */}
//    {/* <Countbill/>    */}
// {/* <Subscription/> */}
//     </div>
//   )
// }

// export default App





import React, { useState, useEffect } from 'react';
import SearchBar from './Zyem/components/SearchBar';
import Product from './Zyem/components/Product';
import Wishlist from './Zyem/components/Wishlist';
import products from './Zyem/data/products';
import './Zyem/components/All.scss';
import faker from 'faker';
import { createApi } from 'unsplash-js';
import {BsFillBagHeartFill} from 'react-icons/bs'
import {BiRadioCircle} from 'react-icons/bi'
const unsplash = createApi({
  accessKey: 'UwsbROspRUpxD1aZbi7uEELBX7fhOv0Q6RXrvscuf7E', // Replace with your Unsplash API access key
});

const generateProducts = async (count) => {
  try {
    const response = await unsplash.search.getPhotos({
      query: 'product',
      perPage: count,
    });
    if (response.errors) {
      throw new Error(response.errors.join('\n'));
    }
    const products = response.response.results.map((item) => ({
      id: item.id,
      name: item.alt_description || 'Product Name',
      price: '25.00', // Set a default price or use your own data source
      image: item.urls.small,
      isInWishlist: false,
    }));
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const App = () => {
  const [showWishlistData, setShowWishlistData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const generatedProducts = await generateProducts(20);
      setProductsData(generatedProducts);
      setFilteredProducts(generatedProducts);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(productsData);
    } else {
      const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    }
  }, [searchTerm, productsData]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleSearchAll = () => {
    setSearchTerm('');
  };

  const handleToggleWishlistData = () => {
    setShowWishlistData(!showWishlistData);
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const handleRemoveFromWishlist = (product) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== product.id));
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} onSearchAll={handleSearchAll} />
      <div className="wishlist-icon" onClick={handleToggleWishlistData}>
      <BsFillBagHeartFill/> <button className='buto'>{wishlist.length}</button>
      <p className='zevi'>zevi</p> <span><BiRadioCircle className='circle'/></span>
      </div>
      {showWishlistData && (
        <div className="wishlist-container">
          <Wishlist wishlist={wishlist} onRemoveFromWishlist={handleRemoveFromWishlist} />
        </div>
      )}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToWishlist={handleAddToWishlist}
            isInWishlist={wishlist.some((item) => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;


