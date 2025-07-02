import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function POST(request) {
  const data = await prisma.folioProduct.findMany({
    include: {
      stock: true,
    },
  })

  return NextResponse.json({ success: true, data })
}

export async function PUT(request) {
  const body = await request.json()

  const { currentBookId, wishlistChoice } = body
  console.log(
    `Current Book ID: ${currentBookId}, Wishlist Choice: ${wishlistChoice}`,
  )

  try {
    const data = await prisma.folioStock.update({
      where: { book_id: currentBookId },
      data: { myWishlist: wishlistChoice },
    })
  } catch (err) {
    console.error(`____________PRISMA [ERROR]____________ 
      ${err.message}
    `)
  }

  return NextResponse.json({ success: true })
}
