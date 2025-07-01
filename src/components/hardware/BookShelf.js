const BookShelf = ({ books, shelfStyling }) => {
  return (
    <div className={shelfStyling}>
      {books.map((book) => (
        <span
          key={book.book_id}
          className='col-span-6 rounded-lg border-2 border-yellow-400 bg-gray-300 p-8'
        >
          <h3 className='text-2xl font-bold'>{book.title}</h3>
          <span className='flex font-semibold'>
            <b className='mr-2'>Quantity: </b>

            {book.stock.quantity === null ? (
              <p className='text-orange-800'>Out of Stock</p>
            ) : (
              <p className='text-teal-600'>{book.stock.quantity}</p>
            )}
          </span>
        </span>
      ))}
    </div>
  )
}

export default BookShelf
