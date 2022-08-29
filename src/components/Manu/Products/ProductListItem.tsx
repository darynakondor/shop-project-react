import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { useState } from 'react'
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
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => (setCount((prevState:number) => prevState + 1))
    const onDecrementClick = () => (setCount((prevState:number) => prevState - 1))

    const [color, setColor] = useState<string>('green')
    const toggleChangeColor = () => (setColor((prevState:string) => prevState === 'red' ? 'green' : 'red'))

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
                    <Button variant='contained' onClick={onDecrementClick}>-</Button>
                    <TextField size='small' value={count} variant='outlined' />
                    <Button variant='contained' onClick={onIncrementClick}>+</Button>
                </div>
                <p>Color: {color}</p>
                <button onClick={toggleChangeColor}>Change color</button>
            </CardContent>
            <CardActions className='btn-wrap'>
                <Button variant='outlined'>Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem