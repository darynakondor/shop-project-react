import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import Main from '../Main/Main';

type ProductsInCartProps = {
  [id: number]: number,
}


const App = () => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCartProps> ({
    
  })

  const addProductToCart = (id: number, count: number) => {
    setProductsInCart((prevState:ProductsInCartProps) => ( {
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }))
  } 

  

  return (
    <>
        <CssBaseline />
        <Header productsInCart={productsInCart}/>
        <Main addProductToCart={addProductToCart}/>
    </>
  )
}

export default App
