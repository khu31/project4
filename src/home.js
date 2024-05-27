import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const categories = [
    { name: 'Clothes', image: '/images/clothes.jpg' },
    { name: 'Shoes', image: '/images/shoes.jpg' },
    { name: 'Headphones', image: '/images/headphones.jpg' },
    { name: 'Mobile', image: '/images/mobile.jpg' },
    { name: 'Laptop', image: '/images/laptop.jpg' },
];

const Home = () => {
    return (
        <HomeContainer>
            {categories.map((category) => (
                <CategoryLink key={category.name} to={`/category/${category.name.toLowerCase()}`}>
                    <CategoryImage src={category.image} alt={category.name} />
                    <CategoryName>{category.name}</CategoryName>
                </CategoryLink>
            ))}
        </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    background-color: #f9f9f9;
    padding: 20px;
`;

const CategoryLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    text-align: center;
    margin: 20px;
`;

const CategoryImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    transition: transform 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: scale(1.05);
    }
`;

const CategoryName = styled.h2`
    margin-top: 10px;
    color: #333;
`;
