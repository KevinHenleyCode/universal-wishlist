import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function GET() {
  let fromNumber = 1
  let toNumber = 50

  const rangeArray = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start)

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  while (toNumber <= 200) {
    const bookList = rangeArray(fromNumber, toNumber)
    const url = `${process.env.FOLIO_SOCIETY_API_URL}stock&verbosity=1&ids=${bookList}&pushDeps=true`

    console.log(`Book List: ${bookList[0]} - ${bookList[bookList.length - 1]}`)

    const res = await fetch(url)
    const data = await res.json()

    try {
      for (const stock of data.result) {
        await prisma.folioStock.upsert({
          where: { book_id: stock.id },
          update: {
            is_out_temp: stock.isOutTemp ?? false,
            quantity: stock.qty ?? 12345678,
          },
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

    fromNumber += 50
    toNumber += 50

    await sleep(3000)
  }

  return NextResponse.json({ success: true })
}
