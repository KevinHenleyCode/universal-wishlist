import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='bg-custom-yellow sticky top-0 z-50 px-2 py-4 shadow-sm shadow-black'>
      <ul className='flex text-xl font-semibold [&>li]:mx-2'>
        <li>
          <Link
            href={'/'}
            className='transition-all duration-200 ease-in-out hover:text-black/50'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={'/books'}
            className='transition-all duration-200 ease-in-out hover:text-black/50'
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            href={'/wishlist'}
            className='transition-all duration-200 ease-in-out hover:text-black/50'
          >
            Wishlist
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
