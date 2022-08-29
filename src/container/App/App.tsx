import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import Main from '../Main/Main';

type CartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = () => {
  const [cartData, setCartData] = useState<CartDataProps>({
    totalCount: 0,
    totalPrice: 0,
  })

  const addProductToCart = () => setCartData((prevState) => ({
    ...prevState,
    totalCount: prevState.totalCount + 1,
    totalPrice: prevState.totalPrice + 100,
  }))

  return (
    <>
        <CssBaseline />
        <Header cartData={cartData}/>
        <button onClick={() => addProductToCart()}>add to cart</button>
        <Main addProductToCart={addProductToCart}/>
    </>
  )
}

export default App
