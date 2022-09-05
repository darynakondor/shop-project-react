import React from 'react'
import {keys} from 'lodash'
import productsArray, { getProductsObject, Product } from '../Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number,
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart, productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
            <div   key={productId}>

                {productsObject[parseInt(productId)].name}:
                <span style={{ marginLeft: "5px", fontWeight: "700", color: "rgb(255, 139, 400)"}}>{productsInCart[parseInt(productId)]}</span> 

            </div>
               
            ))}
            <div> Total {keys(productsInCart).reduce((total, productId) => (total + productsObject[parseInt(productId)].price * productsInCart[parseInt(productId)]), 0)} $ </div>
        </div>
    )
}

export default CartHeader