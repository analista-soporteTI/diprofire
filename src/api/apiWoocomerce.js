import axios from 'axios'

const publicKey = import.meta.env.PUBLIC_WC_READ_KEY
const passwordKey = import.meta.env.PUBLIC_WC_READ_PASSWORD

const Authorization = 'Basic ' + btoa(publicKey + ':' + passwordKey)

const API_WC = 'https://diprofirechile.wpcomstaging.com/wp-json/wc/v3'

const FETCH_API_WC = axios.create({
  baseURL: API_WC,
  headers: {
    Authorization
  }
})

const endpoints_wc = {
  PRODUCTS: `${API_WC}/products?per_page=100`,
  PRODUCTS_CATEGORIES: `${API_WC}/products/categories`,
  PRODUCTS_TAGS: `${API_WC}/products/tags`
}

export const getProducts = async () => {
  try {
    let allProducts = []
    let page = 1
    let perPage = 100
    let totalProducts = 0

    do {
      const response = await FETCH_API_WC.get(endpoints_wc.PRODUCTS, {
        params: {
          per_page: perPage,
          page: page
        }
      })

      const products = response.data
      totalProducts = parseInt(response.headers['x-wp-total'], 10)
      allProducts = [...allProducts, ...products]

      page++
    } while (allProducts.length < totalProducts)

    return allProducts
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
