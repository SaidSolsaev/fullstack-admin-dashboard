import React from 'react'
import styled from 'styled-components'
import ProductsGrid from '../../components/products/ProductsGrid';


const Container = styled.div`
    background-color: #121417;
    min-height: 100vh;
    transition: margin-left 0.5s;
    padding: 1rem;
`;


const ProductScreen = () => {
    return (
        <Container>
            <ProductsGrid />
        </Container>
    )
}

export default ProductScreen