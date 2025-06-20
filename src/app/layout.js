import './globals.css'
import { Orbitron } from 'next/font/google'
import NavBar from '@/components/navigation/NavBar'
import FooterBar from '@/components/navigation/FooterBar'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata = {
  title: 'Universal Wishlist',
  description: 'A wishlist for all your apps.',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en' className={orbitron.variable}>
      <body className={'antialiased'}>
        <NavBar />
        <main className='h-screen bg-gray-600'>{children}</main>
        <FooterBar />
      </body>
    </html>
  )
}

export default RootLayout
