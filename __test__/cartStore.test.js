import { renderHook, act } from '@testing-library/react'
import useCartStore from '../src/hooks/cart'

describe('useCartStore', () => {
  it('should add new products to the cart', () => {
    const { result } = renderHook(() =>
      useCartStore(state => ({
        cart: state.cart,
        addToCart: state.addToCart,
        getLength: state.getLength
      }))
    )

    const products = [
      {
        id: '1',
        sku: '12345',
        name: 'Test Product',
        model: 'Model X',
        brand: 'Brand Y',
        quantity: 1,
        img: 'image_url'
      },
      {
        id: '2',
        sku: '54321',
        name: 'Another Product',
        model: 'Model Y',
        brand: 'Brand Z',
        quantity: 1,
        img: 'image_url'
      }
    ]

    act(() => {
      products.forEach(product => {
        result.current.addToCart(product)
      })
    })

    expect(result.current.getLength()).toBe(2)
    expect(result.current.cart).toEqual(
      expect.arrayContaining([
        expect.objectContaining(products[0]),
        expect.objectContaining(products[1])
      ])
    )
  })

  it('should increment quantity if product already exists', () => {
    const { result } = renderHook(() =>
      useCartStore(state => ({
        cart: state.cart,
        addToCart: state.addToCart,
        getLength: state.getLength,
        clearCart: state.clearCart
      }))
    )

    const product = {
      id: '1',
      sku: '12345',
      name: 'Test Product',
      model: 'Model X',
      brand: 'Brand Y',
      quantity: 1,
      img: 'image_url'
    }

    act(() => {
      result.current.clearCart()
      result.current.addToCart(product)
      result.current.addToCart(product)
    })

    expect(result.current.getLength()).toBe(1)
    expect(result.current.cart[0].quantity).toBe(2)
  })

  it('should remove and clear cart', () => {
    const { result } = renderHook(() =>
      useCartStore(state => ({
        cart: state.cart,
        addToCart: state.addToCart,
        getLength: state.getLength,
        removeFromCart: state.removeFromCart,
        clearCart: state.clearCart
      }))
    )

    const product = {
      id: '1',
      sku: '12345',
      name: 'Test Product',
      model: 'Model X',
      brand: 'Brand Y',
      quantity: 1,
      img: 'image_url'
    }

    act(() => {
      result.current.addToCart(product)
      result.current.clearCart()
      result.current.addToCart(product)
      result.current.removeFromCart('1')
    })

    expect(result.current.getLength()).toBe(0)
    expect(result.current.cart).toEqual([])
  })
})
