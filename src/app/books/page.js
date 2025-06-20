const getMessage = async () => {
  const res = await fetch(`http://localhost:3000/api/books/folioSociety`, {
    cache: 'no-store',
  })
  const data = await res.json()
  return data.message
}

const Books = async () => {
  const message = await getMessage()
  return (
    <div className='flex flex-col items-center justify-center pt-6'>
      <h1 className='text-6xl'>BOOKS</h1>
      <div className='mt-10'>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Books
