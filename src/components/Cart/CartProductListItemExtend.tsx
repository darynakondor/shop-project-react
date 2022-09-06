import { Product } from 'components/Manu/Products/productsArray'
import { Grid, Card, CardContent, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
}

const CartProductListItemExtend = ({
    productCount,
    product,
    removeProductFromCart,
}: Props) => {
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
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
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
