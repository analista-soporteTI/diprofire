export const mailtoDetailProductGmail = (product: any) => {
  const subject = encodeURIComponent(`Cotización de ${product.name}`)
  const body = encodeURIComponent(
    `Hola, me gustaría cotizar.\n\n` +
      `Producto: ${product.name}\n\n` +
      `SKU: ${product.sku}\n\n` +
      `${
        product.model
          ? `Modelo: ${product.model}\n\n`
          : 'Sin modelo especificado\n\n'
      }` +
      `${
        product.brand
          ? `Marca: ${product.brand}\n\n`
          : 'Sin marca especificada\n\n'
      }` +
      `Cantidad: ${product.quantity}`
  )

  return `https://mail.google.com/mail/?view=cm&fs=1&to=ventas@diprofire.cl&su=${subject}&body=${body}`
}

export const mailtoDetailProductHotmail = (product: any) => {
  const subject = encodeURIComponent(`Cotización de ${product.name}`)
  const body = encodeURIComponent(
    `Hola, me gustaría cotizar.\n\n` +
      `Producto: ${product.name}\n\n` +
      `SKU: ${product.sku}\n\n` +
      `${
        product.model
          ? `Modelo: ${product.model}\n\n`
          : 'Sin modelo especificado\n\n'
      }` +
      `${
        product.brand
          ? `Marca: ${product.brand}\n\n`
          : 'Sin marca especificada\n\n'
      }` +
      `Cantidad: ${product.quantity}`
  )

  return `https://outlook.live.com/owa/?path=/mail/action/compose&to=ventas@diprofire.cl&subject=${subject}&body=${body}`
}

export const mailtoCartProductsGmail = (cart: any) => {
  let body = cart.reduce((acc: any, item: any) => {
    return (
      `${acc}\n\n` +
      `${item.name} - SKU: ${item.sku} - ` +
      `${item.model ? item.model : 'Sin modelo'} - ` +
      `${item.brand ? item.brand : 'Sin marca'} - ` +
      `${item.quantity} unidad(es)`
    )
  }, '')

  const subject = encodeURIComponent(`Cotización de productos`)
  const bodyText = encodeURIComponent(
    `Hola, me gustaría cotizar los siguientes productos:${body}`
  )

  return `https://mail.google.com/mail/?view=cm&fs=1&to=ventas@diprofire.cl&su=${subject}&body=${bodyText}`
}

export const mailtoCartProductsHotmail = (cart: any) => {
  let body = cart.reduce((acc: any, item: any) => {
    return (
      `${acc}\n\n` +
      `${item.name} - SKU: ${item.sku} - ` +
      `${item.model ? item.model : 'Sin modelo'} - ` +
      `${item.brand ? item.brand : 'Sin marca'} - ` +
      `${item.quantity} unidad(es)`
    )
  }, '')

  const subject = encodeURIComponent(`Cotización de productos`)
  const bodyText = encodeURIComponent(
    `Hola, me gustaría cotizar los siguientes productos:${body}`
  )

  return `https://outlook.live.com/owa/?path=/mail/action/compose&to=ventas@diprofire.cl&subject=${subject}&body=${bodyText}`
}
