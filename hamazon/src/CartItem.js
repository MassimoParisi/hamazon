import styled from 'styled-components'
import React from 'react'

function CartItem() {
    return (
        <Container>
            <ItemImage>
                <img src={"https://m.media-amazon.com/images/I/311InFAmDML._AC_UL640_FMwebp_QL65_.jpg"} />
            </ItemImage>

            <ItemInfo>
                <ItemInfoTop>
                    <h2>
                        Prodotto 1
                    </h2>

                </ItemInfoTop>
                <ItemInfoBottom>
                    <ItemQuantityContainer></ItemQuantityContainer>
                    <ItemDelete></ItemDelete>
                </ItemInfoBottom>

            </ItemInfo>

            <ItemPrice></ItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div``

const ItemImage = styled.div``

const ItemInfo = styled.div``

const ItemInfoTop = styled.div``

const ItemInfoBottom = styled.div``

const ItemQuantityContainer = styled.div``

const ItemDelete = styled.div``

const ItemPrice = styled.div``