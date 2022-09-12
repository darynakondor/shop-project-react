import { Product } from 'components/Manu/Products/productsArray'
import { Grid, Card, CardContent, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import Quantity from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtend = ({
    productCount,
    product,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )

    return (
        <Grid item xs={12} sm={6}>
            <Card>
                <CardContent>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={product.image}
                            alt=""
                            style={{ width: '150px', height: 'auto' }}
                        />
                    </div>
                    <Button variant="outlined">
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>

                <Quantity
                    count={productCount}
                    onDecrementClick={() =>
                        productCount === 1
                            ? removeProductFromCart(product.id)
                            : changeProductQuantity(
                                  product.id,
                                  productCount - 1
                              )
                    }
                    onIncrementClick={() =>
                        changeProductQuantity(product.id, productCount + 1)
                    }
                    minCount={0}
                />
                <Button
                    variant="contained"
                    style={{ marginLeft: '15px', marginBottom: '20px' }}
                    onClick={() => removeProductFromCart(product.id)}
                >
                    <DeleteIcon />
                </Button>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtend
