export const mailtoDetailProduct = (product: any) => {
  return (
    `mailto:ventas@diprofire.cl` +
    `?subject=Cotización%20de%20${encodeURIComponent(product.name)}` +
    `&body=Hola,%20me%20gustaría%20cotizar.%0D%0A%0D%0A` +
    `Producto:%20${encodeURIComponent(product.name)}%0D%0A%0D%0A` +
    `SKU:%20${encodeURIComponent(product.sku)}%0D%0A%0D%0A` +
    `${
      product.model
        ? `Modelo:%20${encodeURIComponent(product.model)}%0D%0A%0D%0A`
        : 'Sin%20modelo%20especificado%0D%0A%0D%0A'
    }` +
    `${
      product.brand
        ? `Marca:%20${encodeURIComponent(product.brand)}%0D%0A%0D%0A`
        : 'Sin%20marca%20especificada%0D%0A%0D%0A'
    }` +
    `Cantidad:%20${encodeURIComponent(product.quantity)}`
  )
}

export const mailtoCartProducts = (cart: any) => {
  let body = cart.reduce((acc: any, item: any) => {
    return (
      `${acc}%0D%0A%0D%0A` +
      `${encodeURIComponent(item.name)}%20-%20SKU:%20${encodeURIComponent(
        item.sku
      )}%20-%20` +
      `${item.model ? encodeURIComponent(item.model) : 'Sin%20modelo'}%20-%20` +
      `${item.brand ? encodeURIComponent(item.brand) : 'Sin%20marca'}%20-%20` +
      `${encodeURIComponent(item.quantity)}%20unidad(es)`
    )
  }, '')

  return (
    `mailto:ventas@diprofire.cl` +
    `?subject=Cotización%20de%20productos` +
    `&body=Hola,%20me%20gustaría%20cotizar%20los%20siguientes%20productos:` +
    `${body}`
  )
}
