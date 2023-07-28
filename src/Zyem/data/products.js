const faker = require('faker');

const generateProducts = (count) => {
    const products = [];
    for (let i = 0; i < count; i++) {
      const product = {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: `https://source.unsplash.com/200x200/?product=${i}`, // Use Unsplash for random images
        isInWishlist: false,
      };
      products.push(product);
    }
    return products;
  };
