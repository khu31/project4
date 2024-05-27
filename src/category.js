import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const products = {
    clothes: [
        { id: 1, name: 'T-Shirt', image: '/images/tshirt.jpg', price: '$10' },
        { id: 2, name: 'Jeans', image: '/images/jeans.jpg', price: '$20' },
    ],
    shoes: [
        { id: 3, name: 'Sneakers', image: '/images/sneakers.jpg', price: '$30' },
        { id: 4, name: 'Boots', image: '/images/boots.jpg', price: '$40' },
    ],
    headphones: [
        { id: 5, name: 'Over-Ear', image: '/images/overear.jpg', price: '$50' },
        { id: 6, name: 'In-Ear', image: '/images/inear.jpg', price: '$20' },
    ],
    mobile: [
        { id: 7, name: 'Smartphone', image: '/images/smartphone.jpg', price: '$200' },
        { id: 8, name: 'Feature Phone', image: '/images/featurephone.jpg', price: '$50' },
    ],
    laptop: [
        { id: 9, name: 'Gaming Laptop', image: '/images/gaminglaptop.jpg', price: '$1000' },
        { id: 10, name: 'Ultrabook', image: '/images/ultrabook.jpg', price: '$800' },
    ],
};

const Category = () => {
    const { name } = useParams();
    const categoryProducts = products[name];

    return (
        <CategoryContainer>
            <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            <ProductsContainer>
                {categoryProducts.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductLink to={`/product/${product.id}`}>
                            <ProductImage src={product.image} alt={product.name} />
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>{product.price}</ProductPrice>
                        </ProductLink>
                    </ProductCard>
                ))}
            </ProductsContainer>
        </CategoryContainer>
    );
};

export default Category;

const CategoryContainer = styled.div`
    text-align: center;
    padding: 20px;
`;

const ProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const ProductCard = styled.div`
    margin: 20px;
    text-align: center;
`;

const ProductImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: scale(1.1);
    }
`;

const ProductName = styled.h2`
    margin-top: 10px;
    color: #333;
`;

const ProductPrice = styled.p`
    color: chocolate;
    font-weight: bold;
    margin-top: 5px;
`;

const ProductLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
`;
