import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Homepage/Homepage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Profile from './components/Profile/Profile';

function App() {
  const [cart, setCart] = useState([]);

  // Add to Cart functionality
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Remove from Cart functionality
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  // Update Cart functionality
  const updateCart = (index, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        return prevCart.filter((_, i) => i !== index); // Remove product if quantity is 0
      }
      const updatedCart = [...prevCart];
      updatedCart[index].quantity = newQuantity; // Update the quantity
      return updatedCart;
    });
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateCart={updateCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
