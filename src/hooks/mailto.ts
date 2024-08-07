export const mailtoDetailProduct = (product: any) => {
  return `mailto:diprofire@diprofire.cl
    ?subject=Cotización de ${product.name}
    &body=Hola, me gustaría cotizar.
    %0D%0A%0D%0A
    Producto: ${product.name}
    %0D%0A%0D%0A
    SKU: ${product.sku}
    %0D%0A%0D%0A
    ${product.model ? `Modelo: ${product.model}` : 'Sin modelo especificado'}
    %0D%0A%0D%0A
    ${product.brand ? `Marca: ${product.brand}` : 'Sin marca especificada'}
    %0D%0A%0D%0A
    Cantidad: ${product.quantity}
  `
}

export const mailtoCartProducts = (cart: any) => {
  let body = cart.reduce((acc: any, item: any) => {
    return `${acc}
      %0D%0A%0D%0A
      ${item.name} - SKU: ${item.sku} - ${
      item.model ? item.model : 'Sin modelo'
    } - ${item.brand ? item.brand : `Sin marca`} - ${item.quantity} unidad(es)
    `
  }, '')

  return `mailto:diprofire@diprofire.cl
    ?subject=Cotización de productos
    &body=Hola, me gustaría cotizar los siguientes productos:
    ${body}
  `
}
