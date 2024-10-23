import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Homepage/Homepage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
