import React from 'react'
import ProductList from 'components/Manu/Products/ProductsList'
import {Container} from '@mui/material'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Container>
                <ProductList />
            </Container>
        </>
    )
}

export default Main