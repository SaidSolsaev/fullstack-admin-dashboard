import React from 'react'
import styled from 'styled-components';
import StarRateIcon from '@mui/icons-material/StarRate';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Card = styled.div`
    background-color: #1e2025;
    color: white;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover{
        transform: scale(1.05);
    }
`;

const ProductImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 180px;
`;

const ProductAction = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    
    &:hover {
        opacity: 1;
    }
`;

const ActionButtonContainer = styled.div`
    display: flex!important;
`;

const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ProductImage = styled.img`
    max-width: 100%;
    height: 180px;
    border-radius: 5px;
    transition: opacity 0.3s ease-in-out;
`;

const ProductName = styled.h3`
    text-align: center;
    cursor: pointer;
    margin: 0;
    margin-top: 10px;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
        color: #9ab9ff;
    }
`;

const ProductPrice = styled.p`
    font-size: 14px;
    font-weight: bold;
`;

const RatingContainer = styled.div`
    display: flex;
`;

const ActionButtons = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    margin: 10px;
    transition: transform 0.2s;
    
    &:hover {
        transform: scale(1.2);
    }
`;

const Rating = ({ count }) => (
    <RatingContainer>
        {Array.from({ length: count }, (_, index) => (
            <StarRateIcon key={index} />
        ))}
    </RatingContainer>
  );


const ProductsCard = ({ product }) => {
    
    return (
        <Card>
            <ProductImageContainer>
                <ProductImage src={product.images[0]} alt={product.title} />
                
                <ProductAction>
                <ActionButtonContainer>
                        <ActionButtons>
                            <EditIcon />
                        </ActionButtons>
                        <ActionButtons>
                            <DeleteIcon />
                        </ActionButtons>
                    </ActionButtonContainer>
                </ProductAction>
            </ProductImageContainer>
            
            <ProductInfoContainer>
                <ProductName>{product.title}</ProductName>
                <ProductPrice>Price: ${product.price}</ProductPrice>
                <RatingContainer>
                    <Rating count={product.rating} />
                </RatingContainer>

            </ProductInfoContainer>
        </Card>
    )
}

export default ProductsCard