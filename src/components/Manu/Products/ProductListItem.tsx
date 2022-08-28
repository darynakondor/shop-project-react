import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
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

class ProductListItem extends Component<ProductProps> {
    render () {
        return (
            <Card>
                <CardContent>
                    <div className='product-img'>
                        <img src={this.props.image} alt="" />
                    </div>
                    <h3 className='product-title'>{this.props.name}</h3>
                    <div className="product-description">{this.props.description}</div>
                    <div className="product-features">Type: {this.props.type}</div>
                    <div className="product-features">Capacity: {this.props.capacity}Gb</div>
                    <div className="product-price">$ {this.props.price}</div>
                    <div className="product-quantity">
                        <Button variant='contained'>-</Button>
                        <TextField size='small' value={1} variant='outlined' />
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