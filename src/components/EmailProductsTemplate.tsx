interface EmailProductsTemplateProps {
  contact: {
    name: string
    email: string
    enterprise: string
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
      {contact.name && (
        <p>
          <strong>Nombre: </strong>
          {contact.name}
          <br />
        </p>
      )}
      {contact.email && (
        <p>
          <strong>Email: </strong>
          {contact.email}
          <br />
        </p>
      )}
      {contact.enterprise && (
        <p>
          <strong>Empresa: </strong>
          {contact.enterprise}
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
