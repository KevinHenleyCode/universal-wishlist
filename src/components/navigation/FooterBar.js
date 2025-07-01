import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const FooterBar = () => {
  return (
    <footer className='bg-custom-green py-2 font-semibold tracking-widest inset-shadow-sm inset-shadow-black'>
      <ul className='flex justify-around'>
        <li className='flex items-center'>
          Developed by:{' '}
          <Link
            href={'https://github.com/KevinHenleyCode'}
            className='text-custom-red hover:text-custom-red/70 flex items-center transition-all duration-200 ease-in-out'
          >
            <IoLogoGithub className='mr-1 text-xl' />
            KevinHenleyCode
          </Link>
        </li>
        <li className='flex items-center'>
          LinkedIn:
          <Link
            href={'https://www.linkedin.com/in/kevin-henley/'}
            className='text-custom-red hover:text-custom-red/70 flex items-center transition-all duration-200 ease-in-out'
          >
            <IoLogoLinkedin className='mr-1 text-xl' /> Kevin Henley
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default FooterBar
