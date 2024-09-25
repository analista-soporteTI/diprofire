interface EmailProductsTemplateProps {
  contact: {
    email: string
    phone: string
  }
  products: any[]
}

export const EmailProductsTemplate = ({
  contact,
  products
}: EmailProductsTemplateProps) => {
  return (
    <>
      <h1>Solicitud de cotización web</h1>
      {contact.email && (
        <p>
          <strong>Correo: </strong>
          {contact.email}
          <br />
        </p>
      )}
      {contact.phone && (
        <p>
          <strong>Teléfono: </strong>
          {contact.phone}
          <br />
        </p>
      )}
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <strong>Producto: </strong>
            {product.name}
            <br />
            <strong>SKU: </strong>
            {product.sku}
            <br />
            {product.model && (
              <>
                <strong>Modelo: </strong>
                {product.model}
                <br />
              </>
            )}
            {product.brand && (
              <>
                <strong>Marca: </strong>
                {product.brand}
                <br />
              </>
            )}
            <strong>Cantidad: </strong>
            {product.quantity}
          </li>
        ))}
      </ul>
    </>
  )
}
