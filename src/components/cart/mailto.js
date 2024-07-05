export const mailtoDetailProduct = product => {
  let parsedDescription = product.description.replace(/<[^>]*>?/gm, '')

  return `mailto:diprofire@diprofire.cl
    ?subject=Detalle de producto ${product.name}
    &body=Hola, me gustaría recibir más información sobre el producto ${product.name}.
    %0D%0A%0D%0A
    Descripción: "${parsedDescription}"
    %0D%0A%0D%0A
    Código/NP: ${product.sku}
    %0D%0A%0D%0A
    Cantidad: ${product.quantity}
  `
}

export const mailtoCartProducts = cart => {
  let body = cart.reduce((acc, item) => {
    return `${acc}
      %0D%0A%0D%0A
      ${item.name} (Código/NP: ${item.sku}) - ${item.quantity} unidad(es)
    `
  }, '')

  return `mailto:
    ?subject=Productos en carrito de cotizaciones
    &body=Hola, me gustaría recibir más información sobre los siguientes productos:
    ${body}
  `
}
