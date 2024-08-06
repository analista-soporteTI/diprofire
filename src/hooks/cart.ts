'use client'

export const getCart = () => {
  if (typeof window !== 'undefined') {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
  }
  return []
}

export const saveCart = (cart: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}

export const addOneToCart = (product: any) => {
  let cart = getCart()
  const productIndex = cart.findIndex((item: any) => item.id === product.id)

  if (productIndex > -1) {
    cart[productIndex].quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  saveCart(cart)
}

export const addToCart = (product: any) => {
  let cart = getCart()
  const productIndex = cart.findIndex((item: any) => item.id === product.id)

  if (productIndex > -1) {
    cart[productIndex].quantity += product.quantity
  } else {
    cart.push({ ...product })
  }

  saveCart(cart)
}

export const removeFromCart = (productId: any) => {
  let cart = getCart()
  cart = cart.filter((item: any) => item.id !== productId)

  saveCart(cart)
}

export const clearCart = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('cart')
  }
}

export const updateQuantity = (productId: any, quantity: any) => {
  let cart = getCart()
  const productIndex = cart.findIndex((item: any) => item.id === productId)

  if (productIndex > -1) {
    cart[productIndex].quantity = quantity
  }

  saveCart(cart)
}
