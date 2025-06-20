import Link from 'next/link'

const FooterBar = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'books'}>Books</Link>
        </li>
      </ul>
    </footer>
  )
}

export default FooterBar
