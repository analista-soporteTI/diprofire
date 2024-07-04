import axios from 'axios'

const publicKey = import.meta.env.PUBLIC_WC_READ_KEY
const passwordKey = import.meta.env.PUBLIC_WC_READ_PASSWORD

const Authorization = 'Basic ' + btoa(publicKey + ':' + passwordKey)

const API_WC = 'https://diprofirechile.wpcomstaging.com/wp-json/wc/v3'

export const FETCH_API_WC = axios.create({
  baseURL: API_WC,
  headers: {
    Authorization
  }
})

export const endpoints_wc = {
  PRODUCTS: `${API_WC}/products`,
  PRODUCTS_CATEGORIES: `${API_WC}/products/categories`,
  PRODUCTS_TAGS: `${API_WC}/products/tags`
}

export const getProducts = async () => {
  const response = await FETCH_API_WC.get(endpoints_wc.PRODUCTS)
  return response.data
}

export const getCategories = async () => {
  const response = await FETCH_API_WC.get(endpoints_wc.PRODUCTS_CATEGORIES)
  return response.data
}

export const getTags = async () => {
  const response = await FETCH_API_WC.get(endpoints_wc.PRODUCTS_TAGS)
  return response.data
}

export async function getPathsProducts () {
  try {
    const response = await FETCH_API_WC.get(`${API_WC}/products`)
    const products = response.data

    const paths = products.reduce((acc, product) => {
      acc[product.slug] = product;
      return acc;
    }, {});

    return { paths }
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
