import React from 'react'
import {keys} from 'lodash'
import productsArray from '../Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number,
    }
}

const CartHeader = ({
    productsInCart
}: Props) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
            <div   key={productId}>

                    {productsArray[parseInt(productId) - 1].name}: {' '} 
                    <span style={{ marginLeft: "5px", fontWeight: "700", color: "rgb(255, 139, 400)"}}>{productsInCart[parseInt(productId)]}</span> 

                </div>
            ))}
        </div>
    )
}

export default CartHeader