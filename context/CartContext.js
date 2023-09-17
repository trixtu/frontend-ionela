'use client'

import { useLocalStorage } from '@/hooks/useLocaleStorege'
import { createContext, useEffect, useState } from 'react'
import { Client, HydrationProvider } from 'react-hydration-provider'

export const CartContext = createContext({})

export function CartContextProvider({ children }) {
  const ls = typeof window !== 'undefined' ? window.localStorage : null

  const [cartItems, setCartItems] = useState(
    ls?.getItem('cartItems') ? JSON.parse(ls.getItem('cartItems')) : []
  )

  useEffect(() => {
    const items = ls?.getItem('cartItems')
    if (items) {
      setCartItems(JSON.parse(items))
    }
  }, [ls])

  useEffect(() => {
    ls.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems, ls])

  function addProduct(productId) {
    setCartItems((prev) => [...prev, productId])
  }

  function removeProduct(productId) {
    setCartItems((prev) => {
      const pos = prev.indexOf(productId)
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos)
      }

      return prev
    })
  }

  const removeProductFromCart = (productId) => {
    const isItemInCart = cartItems.find(
      (cartProduct) => cartProduct === productId
    )

    setCartItems(cartItems.filter((cartItems) => cartItems !== productId)) // if the quantity of the item is 1, remove the item from the cart
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <HydrationProvider>
      <main>
        <Client>
          <CartContext.Provider
            value={{
              cartItems,
              addProduct,
              removeProduct,
              removeProductFromCart,
              clearCart,
              setCartItems,
            }}
          >
            {children}
          </CartContext.Provider>
        </Client>
      </main>
    </HydrationProvider>
  )
}
