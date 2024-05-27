import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const productDetails = {
    1: { name: 'T-Shirt', image: '/images/tshirt.jpg', price: '$10', description: 'Comfortable cotton T-shirt.' },
    2: { name: 'Jeans', image: '/images/jeans.jpg', price: '$20', description: 'Stylish denim jeans.' },
    3: { name: 'Sneakers', image: '/images/sneakers.jpg', price: '$30', description: 'Comfortable sneakers.' },
    4: { name: 'Boots', image: '/images/boots.jpg', price: '$40', description: 'Durable boots.' },
    5: { name: 'Over-Ear', image: '/images/overear.jpg', price: '$50', description: 'High-quality over-ear headphones.' },
    6: { name: 'In-Ear', image: '/images/inear.jpg', price: '$20', description: 'Compact in-ear headphones.' },
    7: { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$200', description: 'Latest model smartphone.' },
    8: { name: 'Feature Phone', image: '/images/featurephone.jpg', price: '$50', description: 'Affordable feature phone.' },
    9: { name: 'Gaming Laptop', image: '/images/gaminglaptop.jpg', price: '$1000', description: 'High-performance gaming laptop.' },
    10: { name: 'Ultrabook', image: '/images/ultrabook.jpg', price: '$800', description: 'Lightweight and powerful ultrabook.' },
};

const Product = () => {
    const { id } = useParams();
    const product = productDetails[id];
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <ProductPage>
            <ProductContent>
                <ProductImage>
                    <img src={product.image} alt={product.name} />
                </ProductImage>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <p className="price">{product.price}</p>
                    <p className="description">{product.description}</p>
                    <Button onClick={addToCart}>Buy Now</Button>
                    <div className="cart-info">
                        <p>Items in cart: <span>{cartCount}</span></p>
                    </div>
                </ProductDetails>
            </ProductContent>
        </ProductPage>
    );
};

export default Product;

const ProductPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f9f9f9;
`;

const ProductContent = styled.div`
    display: flex;
    align-items: flex-start; /* Align items slightly above center */
    max-width: 900px;
    margin-top: -50px; /* Adjust this value to position content slightly above center */
    padding: 20px;
`;

const ProductImage = styled.div`
    flex: 1;
    text-align: center;
    padding-right: 20px;

    img {
        max-width: 100%;
        border-radius: 10px;
        transition: transform 0.3s;
    }

    img:hover {
        transform: scale(1.1);
    }
`;

const ProductDetails = styled.div`
    flex: 1;
    text-align: left;

    h1 {
        margin: 0;
        font-size: 28px; /* Increase font size */
        color: #333;
        margin-bottom: 10px;
    }

    .price {
        color: chocolate;
        font-size: 24px; /* Increase font size */
        margin: 10px 0;
    }

    .description {
        font-size: 18px; /* Increase font size */
        margin: 10px 0;
        color: #555;
    }

    .cart-info {
        margin-top: 20px;
        font-size: 16px;
    }
`;

const Button = styled.button`
    background: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px; /* Increase font size */
    transition: background 0.3s;
    text-decoration: none;

    &:hover {
        background: #2980b9;
    }
`;
