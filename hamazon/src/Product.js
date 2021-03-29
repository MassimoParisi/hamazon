import React from 'react'
import styled from 'styled-components';

function Product(props) {
    return (
        <Container>
            <Title>
                {props.title}
            </Title>
            <Price>
                €{props.price}
            </Price>
            <Rating>
                {
                    Array(props.rating)
                    .fill()
                    .map(rating=> <p>⭐</p>)
                }
            </Rating>
            <Image src={props.image}/>
            <ActionSection>
                <AddToCartButton>Add to Cart</AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    color: black;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    :hover {
        border: 0.5px solid #000000;
    }
`

const Title = styled.span``
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
const Rating = styled.div`
    display: flex;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`
const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;    
`
const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`