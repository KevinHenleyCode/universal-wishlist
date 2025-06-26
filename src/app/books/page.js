'use client'
import { useState } from 'react'

const Books = () => {
  const [library, setLibrary] = useState([])

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
      setLibrary(response.data)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center pt-6'>
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
      <div className=''>
        <div className='mt-10 grid grid-cols-12 gap-4'>
          {library.map((book) => (
            <span
              key={book.book_id}
              className='col-span-6 rounded-lg border-2 border-yellow-400 bg-gray-300 p-8'
            >
              <h3 className='text-2xl font-bold'>{book.title}</h3>
              <p className='font-semibold text-teal-600'>
                <b className='text-black'>Quantity: </b>
                {book.stock.quantity}
              </p>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Books
