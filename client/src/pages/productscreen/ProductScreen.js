import React from 'react'
import styled from 'styled-components'
import ProductsGrid from '../../components/products/ProductsGrid';


const Container = styled.div`
    background-color: #121417;
    min-height: 100vh;
    margin-left: ${props => (props.open ? '200px' : '50px')};
    transition: margin-left 0.5s;
    padding: 1rem;
`;


const ProductScreen = ({open}) => {
    return (
        <Container open={open}>
            <ProductsGrid />
        </Container>
    )
}

export default ProductScreen