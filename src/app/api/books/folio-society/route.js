import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function POST(request) {
  const body = await request.json()
  const { wishlistPage } = body

  const data = await prisma.folioProduct.findMany({
    include: {
      stock: true,
    },
    where: wishlistPage
      ? {
          stock: {
            is: {
              myWishlist: true,
            },
          },
        }
      : undefined,
  })

  return NextResponse.json({ success: true, data })
}

export async function PUT(request) {
  const body = await request.json()

  const { wishlistBookId, wishlistBookTitle, wishlistChoice } = body
  console.log(
    `Current Book ID: ${wishlistBookId}, Current Book Title: ${wishlistBookTitle}, Wishlist Choice: ${wishlistChoice}`,
  )

  try {
    const data = await prisma.folioStock.update({
      where: { book_id: wishlistBookId },
      data: { myWishlist: wishlistChoice },
    })
  } catch (err) {
    console.error(`____________PRISMA [ERROR]____________ 
      ${err.message}
    `)
  }

  return NextResponse.json({
    success: true,
    updatedBookTitle: wishlistBookTitle,
    updatedWishlistChoice: wishlistChoice,
  })
}
