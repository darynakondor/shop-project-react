import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import React, { useState } from 'react'
import './ProductListItem.scss'

type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
    addProductToCart: ( id: number, count: number) => void
}


const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart

}: ProductProps) => {
    const [count, setCount] = useState<number>(1)
    const onIncrementClick = () => (setCount((prevState:number) => prevState + 1))
    const onDecrementClick = () => (setCount((prevState:number) => prevState - 1))
    
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
                <div className="product-quantity">
                    <Button variant='contained' onClick={onDecrementClick} disabled={count <= 1}>-</Button>
                    <TextField size='small' value={count} variant='outlined' />
                    <Button variant='contained' onClick={onIncrementClick} disabled={count >= 10}>+</Button>
                </div>
            </CardContent>
            <CardActions className='btn-wrap'>
                <Button variant='outlined' onClick={() => addProductToCart(id, count)}>Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem