'use client'
import { useState } from 'react'
import Image from 'next/image'
import BookShelf from '@/components/hardware/BookShelf'

const Books = () => {
  const [books, setBooks] = useState([])

  // makes a call to the /product-db endpoint to push newest data to FolioProduct table
  const fetchProducts = async () => {
    const res = await fetch(`/api/books/folio-society/product-db`)
    const results = await res.json()

    if (results.success === true) {
      fetchStock()
      console.log(`Product-Success: ${results.success}`)
    }
  }

  const fetchStock = async () => {
    const res = await fetch(`/api/books/folio-society/stock-db`)
    const results = await res.json()

    if (results.success === true) {
      console.log(`Stock-Success: ${results.success}`)
    }
  }

  const fetchAllData = async () => {
    const res = await fetch(`./api/books/folio-society`)
    const response = await res.json()

    if (response.success === true) {
      setBooks(response.data)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-6xl'>BOOKS</h1>
      <div className='mt-10'>
        <button
          onClick={() => fetchProducts()}
          className='rounded-3xl border-4 border-gray-800 bg-teal-400 p-4 hover:cursor-pointer'
        >
          ADD TO DB
        </button>
      </div>
      <div className='mt-20'>
        <button
          onClick={() => fetchAllData()}
          className='rounded-3xl border-4 border-gray-800 bg-lime-400 p-4 hover:cursor-pointer'
        >
          PULL FROM DB
        </button>
      </div>
      <div className='flex justify-between gap-x-8'>
        <span className='relative w-1/2'>
          <Image
            src={'/images/undraw_book-lover_f1dq.svg'}
            alt='Book Lover Image'
            fill
            className='w-full'
          />
        </span>
        <BookShelf
          books={books}
          shelfStyling={
            'mt-10 grid h-[600px] w-1/2 grid-cols-12 gap-x-8 gap-y-4 overflow-y-scroll scrollbar scrollbar-thumb-amber-400 scrollbar-track-black/60 scrollbar-thin'
          }
        />
      </div>
    </div>
  )
}

export default Books
