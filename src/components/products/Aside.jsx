export const Aside = ({ handleCategories = '', categories, errorCategories }) => {
  if (errorCategories) {
    return <p>Error al cargar las categorías</p>
  }

  return (
    <aside className='hidden lg:block pt-[6.5rem] pb-10 w-full min-h-screen max-w-[300px] border-r border-black/20 relative'>
      <nav className='max-w-[300px] w-full h-full px-4 fixed'>
        <h2 className='mb-4 font-semibold'>Categorías</h2>
        <ul>
          <li className='mb-2 px-4 py-1.5 hover:bg-black/5 duration-200 rounded-md'>
            <button
              {...(handleCategories === '' && { disabled: true })}
              onClick={() => handleCategories('')}
              className='block w-full text-start'
            >
              Todos los productos
            </button>
          </li>
          {categories.map(category => (
            <li
              key={category.name}
              className='mb-2 px-4 py-1.5 hover:bg-black/5 duration-200 rounded-md'
            >
              <button
                onClick={() => handleCategories(category.name)}
                className='block w-full text-start'
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
