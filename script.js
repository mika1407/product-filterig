const products = [
  {
    name: 'Sony Playstation 5',
    url: 'images/playstation-5.png',
    category: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung Galaxy',
    url: 'images/samsung-galaxy.png',
    category: 'smartphones',
    price: 399.99,
  },
  {
    name: 'Cannon EOS Camera',
    url: 'images/cannon-eos-camera.png',
    category: 'cameras',
    price: 749.99,
  },
  {
    name: 'Sony A7 Camera',
    url: 'images/sony-a7-camera.png',
    category: 'cameras',
    price: 1999.99,
  },
  {
    name: 'LG TV',
    url: 'images/QHgFnHk/lg-tv.png',
    category: 'televisions',
    price: 799.99,
  },
  {
    name: 'Nintendo Switch',
    url: 'images/nintendo-switch.png',
    category: 'games',
    price: 299.99,
  },
  {
    name: 'Xbox Series X',
    url: 'images/xbox-series-x.png',
    category: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung TV',
    url: 'images/samsung-tv.png',
    category: 'televisions',
    price: 1099.99,
  },
  {
    name: 'Google Pixel',
    url: 'images/google-pixel.png',
    category: 'smartphones',
    price: 499.99,
  },
  {
    name: 'Sony ZV1F Camera',
    url: 'images/sony-zv1f-camera.png',
    category: 'cameras',
    price: 799.99,
  },
  {
    name: 'Toshiba TV',
    url: 'images/toshiba-tv.png',
    category: 'televisions',
    price: 499.99,
  },
  {
    name: 'iPhone 14',
    url: 'images/iphone-14.png',
    category: 'smartphones',
    price: 999.99,
  },
];

// Get DOM elements
const productsWrapperEl = document.getElementById('products-wrapper');
const checkEls = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');

// Initialize cart item count
let cartItemCount = 0;

// Initialize products
const productsEls = [];

// Loop over the products and create the product elements
products.forEach((product) => {
  // const productEl = createProductElement(product);
  // productsEls.push(productEl);
  // productsWrapperEl.appendChild(productEl);
  console.log(product)
});