import React from 'react'
import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productArray from './productsArray'
import {ProductProps} from './ProductListItem'


type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography variant='h4' textAlign='center' margin={3}>
                Product List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {productArray.map(({id, name, description, capacity, type, price}: ProductProps) =>
                    (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem 
                                name={name}
                                description={description}
                                capacity={capacity} 
                                type={type} 
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductList