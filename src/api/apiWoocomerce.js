import axios from 'axios'
import algoliasearch from 'algoliasearch'
import useProductsStore from '@hooks/storeProducts'

const publicKey = import.meta.env.PUBLIC_WC_READ_KEY
const passwordKey = import.meta.env.SECRET_WC_READ_PASSWORD

const appId = import.meta.env.PUBLIC_ALGOLIA_APP_ID
const adminKey = import.meta.env.SECRET_ALGOLIA_ADMIN_KEY
const indexName = import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME

const Authorization =
  'Basic ' + Buffer.from(publicKey + ':' + passwordKey).toString('base64')

const API_WC = 'https://diprofirechile.wpcomstaging.com/wp-json/wc/v3'
const FETCH_API_WC = axios.create({
  baseURL: API_WC,
  headers: { Authorization }
})
const endpoints_wc = {
  PRODUCTS: `${API_WC}/products`
}

const client = algoliasearch(appId, adminKey)
const index = client.initIndex(indexName)

async function fetchProductsFromAPI () {
  let allProducts = []
  let page = 1
  const perPage = 100
  let totalProducts = 0

  do {
    const response = await FETCH_API_WC.get(endpoints_wc.PRODUCTS, {
      params: { per_page: perPage, page }
    })

    const products = response.data
    totalProducts = parseInt(response.headers['x-wp-total'], 10)

    const filteredProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      categories: product.categories,
      tags: product.tags,
      images: product.images,
      description: product.description,
      short_description: product.short_description,
      sku: product.sku
    }))

    allProducts = [...allProducts, ...filteredProducts]
    page++
  } while (allProducts.length < totalProducts)

  return allProducts
}

async function uploadProductsToAlgolia (products) {
  try {
    const { objectIDs } = await index.saveObjects(products, {
      autoGenerateObjectIDIfNotExist: true
    })
    console.log('Products uploaded to Algolia:', objectIDs)
  } catch (err) {
    console.error('Error uploading products to Algolia:', err)
  }
}

export const getProducts = async () => {
  const store = useProductsStore.getState()
  return store.getProducts(fetchProductsFromAPI)
}

;(async () => {
  const products = await fetchProductsFromAPI()
  await uploadProductsToAlgolia(products)
})()
