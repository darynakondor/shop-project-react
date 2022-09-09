import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { omit } from 'lodash'

type ProductsInCartProps = {
    [id: number]: number
}

type ProductsLikeStateProps = {
    [id: number]: boolean
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>({
        1: 1,
        2: 1,
    })

    const [productsLikeState, setProductsLikeState] =
        useState<ProductsLikeStateProps>({
            1: true,
            2: true,
        })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) =>
            omit(prevState, [id])
        )
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: count,
        }))
    }

    const toggleProductsLiked = (id: number, isLiked: boolean) => {
        setProductsLikeState((prevState: ProductsLikeStateProps) => ({
            ...prevState,
            [id]: isLiked ? false : true,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                removeProductFromCart={removeProductFromCart}
                productsInCart={productsInCart}
                changeProductQuantity={changeProductQuantity}
                productsLikeState={productsLikeState}
                toggleProductsLiked={toggleProductsLiked}
            />
        </>
    )
}

export default App
