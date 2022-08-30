import React from 'react'
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
            {productsArray.map(({id, name}) => (
            <div   key={id}>

                    {name}:  
                    <span style={{ marginLeft: "7px", fontWeight: "700", color: "rgb(255, 139, 400)"}}>{productsInCart[id]}</span> 

                </div>
            ))}
        </div>
    )
}

export default CartHeader