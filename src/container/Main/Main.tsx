import React from 'react'
import ProductList from 'components/Manu/Products/ProductsList'
import {Container} from '@mui/material'

type Props = {
    addProductToCart: (
        id: number,
        count: number
    ) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <>
            <Container>
                <ProductList addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}

export default Main