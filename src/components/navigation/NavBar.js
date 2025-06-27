import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-amber-400 px-2 py-4'>
      <ul className='flex text-xl font-semibold [&>li]:mx-2'>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/books'}>Books</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
