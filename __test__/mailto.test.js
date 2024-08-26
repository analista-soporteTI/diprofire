import {
  mailtoDetailProductGmail,
  mailtoDetailProductHotmail,
  mailtoCartProductsGmail,
  mailtoCartProductsHotmail
} from '../src/hooks/mailto'

describe('mailtoDetailProductGmail', () => {
  it('should generate a Gmail mailto link for a single product', () => {
    const product = {
      name: 'Test Product',
      sku: '12345',
      model: 'Model X',
      brand: 'Brand Y',
      quantity: 1
    }

    const subject = encodeURIComponent(`Cotización de ${product.name}`)
    const body = encodeURIComponent(
      `Hola, me gustaría cotizar.\n\nProducto: ${product.name}\n\nSKU: ${product.sku}\n\nModelo: ${product.model}\n\nMarca: ${product.brand}\n\nCantidad: ${product.quantity}`
    )

    const expectedLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ventas@diprofire.cl&su=${subject}&body=${body}`

    expect(mailtoDetailProductGmail(product)).toBe(expectedLink)
  })

  it('should handle missing model and brand for Gmail', () => {
    const product = {
      name: 'Test Product',
      sku: '12345',
      quantity: 1
    }

    const subject = encodeURIComponent(`Cotización de ${product.name}`)
    const body = encodeURIComponent(
      `Hola, me gustaría cotizar.\n\nProducto: ${product.name}\n\nSKU: ${product.sku}\n\nSin modelo especificado\n\nSin marca especificada\n\nCantidad: ${product.quantity}`
    )

    const expectedLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ventas@diprofire.cl&su=${subject}&body=${body}`

    expect(mailtoDetailProductGmail(product)).toBe(expectedLink)
  })
})

describe('mailtoDetailProductHotmail', () => {
  it('should generate a Hotmail mailto link for a single product', () => {
    const product = {
      name: 'Test Product',
      sku: '12345',
      model: 'Model X',
      brand: 'Brand Y',
      quantity: 1
    }

    const subject = encodeURIComponent(`Cotización de ${product.name}`)
    const body = encodeURIComponent(
      `Hola, me gustaría cotizar.\n\nProducto: ${product.name}\n\nSKU: ${product.sku}\n\nModelo: ${product.model}\n\nMarca: ${product.brand}\n\nCantidad: ${product.quantity}`
    )

    const expectedLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=ventas@diprofire.cl&subject=${subject}&body=${body}`

    expect(mailtoDetailProductHotmail(product)).toBe(expectedLink)
  })

  it('should handle missing model and brand for Hotmail', () => {
    const product = {
      name: 'Test Product',
      sku: '12345',
      quantity: 1
    }

    const subject = encodeURIComponent(`Cotización de ${product.name}`)
    const body = encodeURIComponent(
      `Hola, me gustaría cotizar.\n\nProducto: ${product.name}\n\nSKU: ${product.sku}\n\nSin modelo especificado\n\nSin marca especificada\n\nCantidad: ${product.quantity}`
    )

    const expectedLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=ventas@diprofire.cl&subject=${subject}&body=${body}`

    expect(mailtoDetailProductHotmail(product)).toBe(expectedLink)
  })
})

describe('mailtoCartProductsGmail', () => {
  it('should generate a Gmail mailto link for multiple products in the cart', () => {
    const cart = [
      {
        name: 'Product 1',
        sku: '11111',
        model: 'Model A',
        brand: 'Brand A',
        quantity: 2
      },
      {
        name: 'Product 2',
        sku: '22222',
        model: 'Model B',
        brand: 'Brand B',
        quantity: 1
      }
    ]

    const subject = encodeURIComponent('Cotización de productos')
    const body = encodeURIComponent(
      `Hola, me gustaría cotizar los siguientes productos:\n\n` +
        `Product 1 - SKU: 11111 - Model A - Brand A - 2 unidad(es)\n\n` +
        `Product 2 - SKU: 22222 - Model B - Brand B - 1 unidad(es)`
    )

    const expectedLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ventas@diprofire.cl&su=${subject}&body=${body}`

    expect(mailtoCartProductsGmail(cart)).toBe(expectedLink)
  })
})

describe('mailtoCartProductsHotmail', () => {
  it('should generate a Hotmail mailto link for multiple products in the cart', () => {
    const cart = [
      {
        name: 'Product 1',
        sku: '11111',
        model: 'Model A',
        brand: 'Brand A',
        quantity: 2
      },
      {
        name: 'Product 2',
        sku: '22222',
        model: 'Model B',
        brand: 'Brand B',
        quantity: 1
      }
    ]

    const subject = encodeURIComponent('Cotización de productos')
    const body = encodeURIComponent(
      `Hola, me gustaría cotizar los siguientes productos:\n\n` +
        `Product 1 - SKU: 11111 - Model A - Brand A - 2 unidad(es)\n\n` +
        `Product 2 - SKU: 22222 - Model B - Brand B - 1 unidad(es)`
    )

    const expectedLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=ventas@diprofire.cl&subject=${subject}&body=${body}`

    expect(mailtoCartProductsHotmail(cart)).toBe(expectedLink)
  })
})
