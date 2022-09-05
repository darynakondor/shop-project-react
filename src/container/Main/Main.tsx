import React from 'react'
import ProductList from 'components/Manu/Products/ProductsList'
import {Container} from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'

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
                <Routes>
                    <Route path='/' element={<ProductList addProductToCart={addProductToCart} /> } />
                    <Route path='cart' element={<CartPage /> } />
                </Routes>
            </Container>
        </>
    )
}

export default Main