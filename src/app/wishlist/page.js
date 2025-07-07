'use client'
import BookShelf from '@/components/hardware/BookShelf'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BarLoader } from 'react-spinners'

const Wishlist = () => {
  const [wishlistBooks, setWishlistBooks] = useState([])
  const [wishlistData, setWishlistData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchAllWishlist = async () => {
    setLoading(true)
    const res = await fetch(`/api/books/folio-society`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wishlistPage: true }),
    })

    const results = await res.json()

    if (results.success === true) {
      setWishlistBooks(results.data)
      setLoading(false)
    }
  }

  const updateWishlist = async (id, currentChoice) => {
    const res = await fetch(`/api/books/folio-society`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currentBookId: id,
        wishlistChoice: !currentChoice,
      }),
    })

    const results = await res.json()

    if (results.success === true) {
      setWishlistData(results)
    }
  }

  useEffect(() => {
    fetchAllWishlist()
  }, [wishlistData])

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-custom-white text-6xl tracking-wider'>WISHLIST</h1>
      <div className='mt-10 flex w-4/5 justify-between gap-x-8'>
        <span className='relative w-1/4'>
          <Image
            src={'/images/undraw_to-do.svg'}
            alt='Book Lover Image'
            fill
            className='w-full'
          />
        </span>
        {loading ? (
          <div className='bg-custom-gray mt-10 flex h-[600px] w-3/4 flex-col items-center justify-center rounded-md p-4 inset-shadow-sm inset-shadow-black [&>*]:my-4'>
            <h3 className='text-custom-yellow/80 text-6xl font-semibold tracking-widest'>
              LOADING
            </h3>
            <BarLoader color='#ffb900' width={400} height={6} />
          </div>
        ) : wishlistBooks.length === 0 ? (
          <>
            <div className='bg-custom-gray mt-10 flex h-[600px] w-3/4 items-center justify-center rounded-md p-4 inset-shadow-sm inset-shadow-black'>
              <h3 className='text-custom-yellow/70 text-6xl font-semibold tracking-widest'>
                NO BOOKS YET...
              </h3>
            </div>
          </>
        ) : (
          <>
            <BookShelf
              books={wishlistBooks}
              shelfStyling={
                'h-[600px] w-3/4 grid grid-cols-12 gap-x-6 gap-y-4 bg-custom-gray mt-10 p-4 rounded-md inset-shadow-sm inset-shadow-black overflow-y-scroll scrollbar scrollbar-thumb-amber-400 scrollbar-track-black/60 scrollbar-thin'
              }
              handleUpdateWishlist={updateWishlist}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Wishlist
