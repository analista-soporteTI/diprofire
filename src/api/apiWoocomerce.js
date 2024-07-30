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
  PRODUCTS: `${API_WC}/products?per_page=100`,
  PRODUCTS_CATEGORIES: `${API_WC}/products/categories`,
  PRODUCTS_TAGS: `${API_WC}/products/tags`
}

export const getProducts = async () => {
  const allProducts = [];
  let page = 1;
  let response;
  
  response = await FETCH_API_WC.get(`${endpoints_wc.PRODUCTS}&page=${page}`);
  allProducts.push(...response.data);
  const totalPages = parseInt(response.headers['x-wp-totalpages'], 10);

  const requests = [];
  for (page = 2; page <= totalPages; page++) {
    requests.push(FETCH_API_WC.get(`${endpoints_wc.PRODUCTS}&page=${page}`));
  }

  const results = await Promise.all(requests);
  results.forEach(result => allProducts.push(...result.data));

  return allProducts;
}

export const getCategories = async () => {
  const response = await FETCH_API_WC.get(endpoints_wc.PRODUCTS_CATEGORIES)
  return response.data
}

export const getTags = async () => {
  const response = await FETCH_API_WC.get(endpoints_wc.PRODUCTS_TAGS)
  return response.data
}
