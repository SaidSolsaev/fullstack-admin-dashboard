import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ProductsCard from './ProductsCard';
import { fetchAllProducts } from '../../data/fetch';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
`;


const ProductsGrid = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetchAllProducts().then(data => {
            setProducts(data.products);
        })
    }, [])

    console.log(products)
    
    if (!products){
        return(
            <h2>Loading...</h2>
        )
    }

    return (
        <Grid>
            {products.map((product, index) => (
                <ProductsCard key={index} product={product} />
            ))}
        </Grid>
    )
}

export default ProductsGrid