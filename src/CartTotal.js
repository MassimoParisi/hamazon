import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

function CartTotal({ cartItems, getCount }) {

    const getTotalPrice = () => {
        let tot = 0;
        cartItems.forEach((item) => {
            tot += item.product.price * item.product.quantity;
        })
        return tot;
    }


    return (
        <Container>
            <Subtotal>Subtotal ({getCount} items): 
            <NumberFormat value={getTotalPrice()} displayType = {'text'} thousandSeparator={true} prefix={'€'} decimalScale={2}> </NumberFormat>
            </Subtotal>
            <CheckoutButton>Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    flex: 0.3;
    padding: 20px;
    background-color: white;
`

const Subtotal = styled.h2`
    margin-bottom: 16px;
`
const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #a88734;
    cursor: pointer;
    font-size: 16px;

    :hover {
        background: #ddb347
    }

`