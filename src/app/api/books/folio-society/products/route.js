import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function GET() {
  let id = 2251
  const url = `${process.env.FOLIO_SOCIETY_API_URL}product&verbosity=2&ids=${id}&pushDeps=true`

  const res = await fetch(url)
  const data = await res.json()
  console.log(`
    __________________Here's the DATA________________________
    ${data.result[0].name}`)

  for (const product of data.result) {
    await prisma.folioProduct.upsert({
      where: { book_id: product.id },
      update: {
        type: product.type,
      },
      create: {
        book_id: product.id,
        type: product.type,
      },
    })
  }

  return NextResponse.json({ success: true })
}
