const BookShelf = ({ books, shelfStyling }) => {
  return (
    <div className={shelfStyling}>
      {books.map((book) => (
        <span
          key={book.book_id}
          className='bg-custom-green hover:bg-custom-green/80 col-span-6 flex min-h-32 flex-col justify-between rounded-sm p-4 shadow-md shadow-black transition-all duration-200 ease-in-out'
        >
          <h3 className='text-xl font-bold'>{book.title}</h3>
          <span className='flex font-semibold'>
            <b className='mr-2'>Quantity: </b>

            {book.stock.quantity === null ? (
              <p className='text-custom-red'>Out of Stock</p>
            ) : (
              <p className='text-custom-blue'>{book.stock.quantity}</p>
            )}
          </span>
        </span>
      ))}
    </div>
  )
}

export default BookShelf
