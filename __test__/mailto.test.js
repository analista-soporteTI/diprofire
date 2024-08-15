import { mailtoDetailProduct, mailtoCartProducts } from '../src/hooks/mailto'

describe('mailtoDetailProduct', () => {
  it('should generate a mailto link for a single product', () => {
    const product = {
      name: 'Test Product',
      sku: '12345',
      model: 'Model X',
      brand: 'Brand Y',
      quantity: 1
    }

    const expectedLink =
      'mailto:diprofire@diprofire.cl' +
      '?subject=Cotización%20de%20Test%20Product' +
      '&body=Hola,%20me%20gustaría%20cotizar.%0D%0A%0D%0A' +
      'Producto:%20Test%20Product%0D%0A%0D%0A' +
      'SKU:%2012345%0D%0A%0D%0A' +
      'Modelo:%20Model%20X%0D%0A%0D%0A' +
      'Marca:%20Brand%20Y%0D%0A%0D%0A' +
      'Cantidad:%201'

    expect(mailtoDetailProduct(product)).toBe(expectedLink)
  })

  it('should handle missing model and brand', () => {
    const product = {
      name: 'Test Product',
      sku: '12345',
      quantity: 1
    }

    const expectedLink =
      'mailto:diprofire@diprofire.cl' +
      '?subject=Cotización%20de%20Test%20Product' +
      '&body=Hola,%20me%20gustaría%20cotizar.%0D%0A%0D%0A' +
      'Producto:%20Test%20Product%0D%0A%0D%0A' +
      'SKU:%2012345%0D%0A%0D%0A' +
      'Sin%20modelo%20especificado%0D%0A%0D%0A' +
      'Sin%20marca%20especificada%0D%0A%0D%0A' +
      'Cantidad:%201'

    expect(mailtoDetailProduct(product)).toBe(expectedLink)
  })
})

describe('mailtoCartProducts', () => {
  it('should generate a mailto link for multiple products in the cart', () => {
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

    const expectedLink =
      'mailto:diprofire@diprofire.cl' +
      '?subject=Cotización%20de%20productos' +
      '&body=Hola,%20me%20gustaría%20cotizar%20los%20siguientes%20productos:%0D%0A%0D%0A' +
      'Product%201%20-%20SKU:%2011111%20-%20Model%20A%20-%20Brand%20A%20-%202%20unidad(es)%0D%0A%0D%0A' +
      'Product%202%20-%20SKU:%2022222%20-%20Model%20B%20-%20Brand%20B%20-%201%20unidad(es)'

    const actualLink = mailtoCartProducts(cart)
    console.log(`Generated link: ${actualLink}`)
    console.log(`Expected link: ${expectedLink}`)

    expect(actualLink).toBe(expectedLink)
  })
})
