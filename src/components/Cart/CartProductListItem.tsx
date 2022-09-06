import { Product } from 'components/Manu/Products/productsArray'
import React from 'react'

type Props = {
    productCount: number
    product: Product
}

const CartProductListItem = ({productCount, product}: Props) => {
  return (
    <div>
        {product.name}: {' '}
        {productCount}
    </div>
  )
}

export default CartProductListItem