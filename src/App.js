import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './home';
import Category from './category';
import Product from './product';
import Cart from './Cart';

function App() {
    return (
        <Router>
            <AppContainer>
                <Header>
                    <LeftButtons>
                        <StyledLink to="/login">Register/Login</StyledLink>
                    </LeftButtons>
                    <NavButtons>
                        <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/cart">Cart</StyledLink>
                    </NavButtons>
                    <RightButtons>
                        <StyledLink to="/profile">Profile</StyledLink>
                        <StyledLink to="/buy">Buy</StyledLink>
                    </RightButtons>
                </Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </AppContainer>
        </Router>
    );
}

export default App;

const AppContainer = styled.div`
    text-align: center;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LeftButtons = styled.div`
    display: flex;
    gap: 10px;
`;

const NavButtons = styled.nav`
    display: flex;
    gap: 20px;
`;

const RightButtons = styled.div`
    display: flex;
    gap: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    background-color: black;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e0e0e0;
    }
`;
