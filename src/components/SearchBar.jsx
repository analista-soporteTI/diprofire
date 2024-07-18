import { SearchIcon } from '@icons/Search.jsx'

export const SearchBar = ({
  className = '',
  id = 'searchbar',
  searchTerm,
  handleSearch
}) => {
  return (
    <div
      className={`w-full py-1 pl-2 pr-3 flex items-center gap-2 rounded-md border border-gray-300/80 focus:border-green-500 ${className}`}
    >
      <label htmlFor={id}>
        <SearchIcon className='size-6 text-gray-600' />
      </label>
      <input
        id={id}
        type='text'
        value={searchTerm}
        onChange={handleSearch}
        placeholder='Buscar productos...'
        className='bg-transparent outline-none placeholder-gray-500 text-base w-full'
      />
    </div>
  )
}
