import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Cart({cartItems, getCount}) {
    return (
        <Container>
            <CartItems cartItems={cartItems}/>
            <CartTotal cartItems={cartItems} getCount={getCount}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0 18px;
    align-items: flex-start;
`