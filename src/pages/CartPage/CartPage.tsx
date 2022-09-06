import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { Grid } from '@mui/material'
import CartProductListItemExtend from 'components/Cart/CartProductListItemExtend'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div style={{ padding: '30px 0' }}>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtend}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
