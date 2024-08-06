import algoliasearch from 'algoliasearch'

const applicationID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
const apiKey = process.env.SECRET_ALGOLIA_ADMIN_KEY
const indexAlgolia = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME

const client = algoliasearch(applicationID ?? '', apiKey ?? '')
const index = client.initIndex(indexAlgolia ?? '')

export async function getAllProductIDs () {
  const productIDs = []
  let page = 0
  const hitsPerPage = 1000
  let hasMore = true

  while (hasMore) {
    try {
      const response = await index.search('', {
        attributesToRetrieve: ['objectID'],
        hitsPerPage,
        page
      })

      const hits = response.hits.map(hit => hit.objectID)
      productIDs.push(...hits)

      hasMore = response.page + 1 < response.nbPages
      page++
    } catch (error) {
      console.error('Error fetching product IDs:', error)
      hasMore = false
    }
  }

  return productIDs
}

export async function getAllProducts () {
  const products = []
  let page = 0
  const hitsPerPage = 1000
  let hasMore = true

  while (hasMore) {
    try {
      const response = await index.search('', {
        hitsPerPage,
        page
      })

      const hits = response.hits
      products.push(...hits)

      hasMore = response.page + 1 < response.nbPages
      page++
    } catch (error) {
      console.error('Error fetching products:', error)
      hasMore = false
    }
  }

  return products
}
