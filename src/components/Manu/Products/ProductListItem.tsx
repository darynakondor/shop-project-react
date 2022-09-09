import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import React, { useState } from 'react'
import './ProductListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
    toggleProductsLiked: (id: number, isLiked: boolean) => void
    isLiked?: boolean
}

const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
    toggleProductsLiked,
    isLiked = false,
}: ProductProps) => {
    const [count, setCount] = useState<number>(1)
    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)
    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)

    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <Button
                    onClick={() => toggleProductsLiked(id, isLiked)}
                    variant="outlined"
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <h3 className="product-title">{name}</h3>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">$ {price}</div>
                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                />
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
