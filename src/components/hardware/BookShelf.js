import { TbStar, TbStarFilled } from 'react-icons/tb'

const BookShelf = ({ books, shelfStyling, handleUpdateWishlist }) => {
  return (
    <div className={shelfStyling}>
      {books.map((book) => (
        <span
          key={book.book_id}
          className='bg-custom-green hover:bg-custom-green/80 col-span-6 flex min-h-32 flex-col justify-between rounded-sm p-4 shadow-md shadow-black transition-all duration-200 ease-in-out'
        >
          <span className='flex justify-between'>
            <h3 className='text-xl font-bold'>{book.title}</h3>
            <button
              onClick={() =>
                handleUpdateWishlist(book.book_id, book.stock.myWishlist)
              }
            >
              {book.stock.myWishlist === false ? (
                <>
                  <TbStar className='text-xl' />
                </>
              ) : (
                <>
                  <TbStarFilled className='text-custom-blue text-xl' />
                </>
              )}
            </button>
          </span>
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
