import React from 'react'
import {keys} from 'lodash'
import productsArray from '../Products/productsArray'
import { count } from 'console'
import { color } from '@mui/system'

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