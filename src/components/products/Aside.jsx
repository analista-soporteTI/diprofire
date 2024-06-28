import { getCollection } from 'astro:content'
const allProducts = await getCollection('products')

export const Aside = ({ handleCategories = '' }) => {
  const categories = [
    ...new Set(allProducts.map(product => product.data.tags).flat())
  ]

  return (
    <aside className='hidden lg:block pt-24 pb-10 w-full min-h-screen max-w-[300px] border-r border-black/20 relative'>
      <nav className='max-w-[300px] w-full h-full px-4 fixed'>
        <h2 className='mb-4 font-semibold'>Categorías</h2>
        <ul>
          <li className='mb-2 px-4 py-1.5 hover:bg-black/5 duration-200 rounded-md'>
            <button
              {...(handleCategories === '' && { disabled: true })}
              onClick={() => handleCategories()}
              className='block w-full text-start'
            >
              Todos los productos
            </button>
          </li>
          {categories.map(tag => (
            <li className='mb-2 px-4 py-1.5 hover:bg-black/5 duration-200 rounded-md'>
              <button
                onClick={() => handleCategories(tag)}
                className='block w-full text-start'
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
