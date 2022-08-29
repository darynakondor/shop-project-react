import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import Main from '../Main/Main';

type productsInCartProps = {
  [id: number]: number
}

const App = () => {
  const [productsInCart, setProductsInCart] = useState<productsInCartProps> ({
    1: 1,
    2: 1,
  })

  const addProductToCart = () => {
    console.log('test')
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
