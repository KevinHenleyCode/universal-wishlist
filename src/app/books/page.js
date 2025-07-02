'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CiImport } from 'react-icons/ci'
import BookShelf from '@/components/hardware/BookShelf'
import { BarLoader } from 'react-spinners'

const Books = () => {
  const [books, setBooks] = useState([])
  const [wishlistData, setWishlistData] = useState([])
  const [loading, setLoading] = useState(true)

  // makes a call to the /product-db endpoint to push newest data to FolioProduct table
  const fetchProducts = async () => {
    setLoading(true)

    const res = await fetch(`/api/books/folio-society/product-db`, {
      method: 'GET',
    })
    const results = await res.json()

    if (results.success === true) {
      fetchStock()
      console.log(`Product-Success: ${results.success}`)
    }
  }

  const fetchStock = async () => {
    const res = await fetch(`/api/books/folio-society/stock-db`, {
      method: 'GET',
    })
    const results = await res.json()

    if (results.success === true) {
      console.log(`Stock-Success: ${results.success}`)

      fetchAllData()
    }
  }

  const fetchAllData = async () => {
    const res = await fetch(`./api/books/folio-society`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
    const response = await res.json()

    if (response.success === true) {
      setBooks(response.data)
      setLoading(false)
    }
  }

  const updateWishlist = async (id, currentChoice) => {
    const res = await fetch(`/api/books/folio-society/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currentBookId: id,
        wishlistChoice: !currentChoice,
      }),
    })
    const response = await res.json()

    if (response.success === true) {
      console.log(`Success = ${response.success}!`)
      setWishlistData(response)
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [wishlistData])

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-custom-white text-6xl tracking-wider'>BOOKS</h1>
      <div className='mt-10 flex w-full items-center justify-end'>
        <b className='text-custom-white mr-4 tracking-widest'>
          Import Folio Books
        </b>
        <button
          onClick={() => fetchProducts()}
          className='bg-custom-green hover:bg-custom-green/80 border-custom-yellow hover:border-custom-yellow/70 hover:[&>svg]:text-custom-white/70 rounded-2xl border-2 p-2 shadow-md shadow-black transition-all duration-200 ease-in-out hover:cursor-pointer hover:shadow-sm hover:shadow-black/70'
        >
          <CiImport className='text-2xl transition-all duration-200 ease-in-out' />
        </button>
      </div>
      <div className='flex w-4/5 justify-between gap-x-8'>
        <span className='relative w-1/4'>
          <Image
            src={'/images/undraw_book-lover_f1dq.svg'}
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
        ) : books.length === 0 ? (
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
              books={books}
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

export default Books
