import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import Category from './category';
import Product from './product';
import Cart from './Cart';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/cart">Cart</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
