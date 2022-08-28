import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import './ProductListItem.scss'

export type ProductProps = {
    id?: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image

}: ProductProps) => {

  return (
    <Card>
        <CardContent>
            <div className='product-img'>
                <img src={image} alt="" />
            </div>
            <h3 className='product-title'>{name}</h3>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}Gb</div>
            <div className="product-price">$ {price}</div>
        </CardContent>
        <CardActions className='btn-wrap'>
            <Button variant='outlined'>Add to cart</Button>
        </CardActions>
    </Card>
  )
}

export default ProductListItem