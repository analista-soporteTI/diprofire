import { StatusMessage } from '@components/status/StatusMessage'

export const Aside = ({
  handleCategories = '',
  categories,
  errorCategories
}) => {
  return (
    <div>
      <aside className='block lg:hidden pt-[6.5rem] px-4'>
        <nav>
          <div className='relative'>
            <h2 className='block w-full max-w-sm mx-auto mb-2 font-bold'>
              Filtrar por
            </h2>
            <select
              onChange={e => handleCategories(e.target.value)}
              className='block w-full max-w-sm mx-auto border px-3 py-2 rounded-md bg-zinc-200 duration-200'
            >
              <option value=''>Todos los productos</option>
              {categories &&
                categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
            </select>
            {errorCategories && (
              <StatusMessage
                message='Error al cargar las categorías'
                className='w-fit'
              />
            )}
          </div>
        </nav>
      </aside>
      <aside className='hidden lg:block pt-[6.5rem] pb-10 w-fit min-w-[300px] min-h-screen border-r border-black/20'>
        <nav className='max-w-[300px] w-full h-full px-4'>
          <h2 className='mb-4 font-semibold'>Categorías</h2>
          <ul>
            {categories && (
              <>
                <li className='mb-2 hover:bg-black/5 duration-200 rounded-md'>
                  <button
                    {...(handleCategories === '' && { disabled: true })}
                    onClick={() => handleCategories('')}
                    className='block w-full text-start px-4 py-1.5'
                  >
                    Todos los productos
                  </button>
                </li>

                {categories.map(category => (
                  <li
                    key={category.name}
                    className='mb-2 hover:bg-black/5 duration-200 rounded-md'
                  >
                    <button
                      onClick={() => handleCategories(category.name)}
                      className='block w-full text-start px-4 py-1.5'
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </>
            )}
            {errorCategories && (
              <StatusMessage
                message='Error al cargar las categorías'
                className='w-fit'
              />
            )}
          </ul>
        </nav>
      </aside>
    </div>
  )
}
