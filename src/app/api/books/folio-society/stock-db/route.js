import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function GET() {
  const id = 16
  const url = `${process.env.FOLIO_SOCIETY_API_URL}stock&verbosity=3&ids=${id}&pushDeps=true`

  const res = await fetch(url)
  const data = await res.json()

  try {
    for (const stock of data.result) {
      await prisma.folioStock.upsert({
        where: { book_id: stock.id },
        update: { type: stock.type },
        create: {
          type: stock.type ?? 'NULL',
          book_id: stock.id,
          is_out_temp: stock.isOutTemp ?? false,
          quantity: stock.qty ?? 12345678,
        },
      })
    }
  } catch (err) {
    console.error(`______________[PRISMA ERROR]______________ 
    ${err.message}
    `)
  }

  return NextResponse.json({ success: true })
}
