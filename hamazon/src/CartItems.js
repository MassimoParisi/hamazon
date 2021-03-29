import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems() {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemsContainer>
                <CartItem />
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    height: 300px;
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
    background-color: white
`

const Title = styled.div``

const ItemsContainer = styled.div``
