'use client'

const Books = () => {
  // makes a call to the /product-db endpoint to push newest data to FolioProduct table
  const fetchProducts = async () => {
    const res = await fetch(`/api/books/folio-society/product-db`)
    results = await res.json()

    console.log(results)
  }

  return (
    <div className='flex flex-col items-center justify-center pt-6'>
      <h1 className='text-6xl'>BOOKS</h1>
      <div className='mt-10'>
        <button
          onClick={() => fetchProducts()}
          className='rounded-3xl border-4 border-gray-800 bg-teal-400 p-4 hover:cursor-pointer'
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default Books
