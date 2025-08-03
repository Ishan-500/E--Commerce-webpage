import React, { useState } from 'react'; // Line 1
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Line 2
import Navbar from './components/Navbar'; // Line 3
import Home from './pages/Home'; // Line 4
import Cart from './pages/Cart'; // Line 5
import ProductDetailPage from './pages/ProductDetailPage'; // Line 6
import './App.css'; // Line 7

// App component jo main app ko manage karta hai
function App() { // Line 9
  const [cartItems, setCartItems] = useState([]); // Line 10
  const [searchQuery, setSearchQuery] = useState(''); // Line 11

  // Add to cart function
  const addToCart = (product) => { // Line 13
    setCartItems([...cartItems, product]); // Line 14
    alert(`${product.title} added to cart!`); // Line 15
  };

  // Remove from cart function
  const removeFromCart = (id) => { // Line 18
    setCartItems(cartItems.filter((item) => item.id !== id)); // Line 19
  };

  // Search function
  const handleSearch = (query) => { // Line 22
    setSearchQuery(query); // Line 23
  };

  return ( // Line 25
    <Router> // Line 26
      <div className="App"> // Line 27
        <Navbar cartCount={cartItems.length} onSearch={handleSearch} /> // Line 28
        <Routes> // Line 29
          <Route
            path="/"
            element={<Home onAddToCart={addToCart} searchQuery={searchQuery} />}
          /> // Line 30-33
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />}
          /> // Line 34-37
          <Route
            path="/product/:id"
            element={<ProductDetailPage onAddToCart={addToCart} />}
          /> // Line 38-41
        </Routes>
      </div>
    </Router>
  ); // Line 43
}

export default App; // Line 45