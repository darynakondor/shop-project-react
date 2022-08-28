import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type'
import React, { Component } from 'react'
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

type State = {
    count: number
}

class ProductListItem extends Component<ProductProps> {
    state = {
        count: 1,
    }

    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }

    render () {
        const {
            image,
            name,
            description,
            type,
            capacity,
            price
        } = this.props
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
                        <Button variant='contained' onClick={this.onDecrementClick}>-</Button>
                        <TextField size='small' value={this.state.count} variant='outlined' />
                        <Button variant='contained'>+</Button>
                    </div>
                </CardContent>
                <CardActions className='btn-wrap'>
                    <Button variant='outlined'>Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductListItem