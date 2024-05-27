import React from 'react';
import styled from 'styled-components';

const Cart = () => {
    return (
        <CartPage>
            <h1>Shopping Cart</h1>
            <p>Your cart is currently empty.</p>
        </CartPage>
    );
};

export default Cart;

const CartPage = styled.div`
    text-align: center;
    padding: 20px;
`;
