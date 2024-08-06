export const mailtoDetailProduct = product => {
  return `mailto:diprofire@diprofire.cl
    ?subject=Cotización de ${product.name}
    &body=Hola, me gustaría cotizar.
    %0D%0A%0D%0A
    Producto: ${product.name}
    %0D%0A%0D%0A
    SKU: ${product.sku}
    %0D%0A%0D%0A
    ${product.model ? `Modelo: ${product.model}` : ''}
    %0D%0A%0D%0A
    ${product.brand ? `Marca: ${product.brand}` : ''}
    %0D%0A%0D%0A
    Cantidad: ${product.quantity}
  `
}

export const mailtoCartProducts = cart => {
  let body = cart.reduce((acc, item) => {
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
