import React from 'react'
import ProductList from 'components/Manu/Products/ProductsList'
import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void
    removeProductFromCart: (id: number) => void
    toggleProductsLiked: (id: number, isLiked: boolean) => void
    productsInCart: {
        [id: number]: number
    }
    changeProductQuantity: (id: number, count: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
    productsLikeState,
    toggleProductsLiked,
}: Props) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductList
                                    addProductToCart={addProductToCart}
                                    productsLikeState={productsLikeState}
                                    toggleProductsLiked={toggleProductsLiked}
                                />
                                <Reviews />
                            </>
                        }
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                removeProductFromCart={removeProductFromCart}
                                productsInCart={productsInCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
        </>
    )
}

export default Main
