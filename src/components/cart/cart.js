export const getCart = () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}

export const saveCart = cart => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const addOneToCart = product => {
  let cart = getCart()
  const productIndex = cart.findIndex(item => item.id === product.id)

  if (productIndex > -1) {
    cart[productIndex].quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  saveCart(cart)
}

export const addToCart = product => {
  let cart = getCart()
  const productIndex = cart.findIndex(item => item.id === product.id)

  if (productIndex > -1) {
    cart[productIndex].quantity += product.quantity
  } else {
    cart.push({ ...product })
  }

  saveCart(cart)
}

export const removeFromCart = productId => {
  let cart = getCart()
  cart = cart.filter(item => item.id !== productId)

  saveCart(cart)
}

export const clearCart = () => {
  localStorage.removeItem('cart')
}

export const updateQuantity = (productId, quantity) => {
  let cart = getCart()
  const productIndex = cart.findIndex(item => item.id === productId)

  if (productIndex > -1) {
    cart[productIndex].quantity = quantity
  }

  saveCart(cart)
}
