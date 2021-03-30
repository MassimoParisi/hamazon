import styled from 'styled-components'
import React from 'react'

function CartItem({id, item}) {

    let options = []

    for(let i = 1; i < Math.max(item.quantity+1, 20); i++){
        options.push(<option value={i}> Qty: {i}</option>)
    }

    return (
        <Container>
            <ItemImage>
                <img src={item.image} />
            </ItemImage>

            <ItemInfo>
                <ItemInfoTop>
                    <h2>
                        {item.name}
                    </h2>
                </ItemInfoTop>
                <ItemInfoBottom>
                    <ItemQuantityContainer>
                        <select value= {item.quantity}>
                            {options}
                        </select>
                    </ItemQuantityContainer>
                    <ItemDelete>Delete</ItemDelete>
                </ItemInfoBottom>

            </ItemInfo>

            <ItemPrice>€{item.price}</ItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
padding-top: 12px;
padding-bottom: 12px;
display: flex;
border-bottom: 1px solid #DDD
`

const ItemImage = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;

    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`

const ItemInfo = styled.div`
    flex-grow: 1;
`

const ItemInfoTop = styled.div`
    color: #007185;

    h2 {
        font-size: 18px;
    }
`

const ItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
    align-items: center;
`

const ItemQuantityContainer = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15, 17, 17, 15);

        :focus {
            outline: none;
        }
    }
`

const ItemDelete = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;

`

const ItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`