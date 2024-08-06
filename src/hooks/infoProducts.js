export const createInfoProduct = ({ product, quantity = 0 }) => {
  return {
    id: product.id,
    sku: product.sku,
    name: product.name,
    model: product.model,
    brand: product.brand,
    quantity: quantity,
    img: product.img
  }
}
