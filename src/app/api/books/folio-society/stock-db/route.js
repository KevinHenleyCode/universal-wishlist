import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function GET() {
  let fromNumber = 1
  let toNumber = 50

  const rangeArray = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start)

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const recordsChecked = []

  while (toNumber <= 200) {
    const bookList = rangeArray(fromNumber, toNumber)
    const url = `${process.env.FOLIO_SOCIETY_API_URL}stock&verbosity=1&ids=${bookList}&pushDeps=true`

    console.log(`Book List: ${bookList[0]} - ${bookList[bookList.length - 1]}`)

    const res = await fetch(url)
    const data = await res.json()

    try {
      // checks existing book_ids that match the current array to keep Prisma from throwing errors
      const existingProducts = await prisma.folioProduct.findMany({
        where: {
          book_id: { in: data.result.map((s) => s.id) },
        },
        select: { book_id: true },
      })

      const existingIds = new Set(existingProducts.map((p) => p.book_id))
      const validStock = data.result.filter((s) => existingIds.has(s.id))

      console.log(`Total existing books in this batch: ${validStock.length}`)

      recordsChecked.push(...validStock)

      for (const stock of validStock) {
        await prisma.folioStock.upsert({
          where: { book_id: stock.id },
          update: {
            is_out_temp: stock.isOutTemp ?? false,
            isOut: stock.isOut ?? false,
            quantity: stock.qty ?? 12345678,
          },
          create: {
            type: stock.type ?? 'NULL',
            book_id: stock.id,
            is_out_temp: stock.isOutTemp ?? false,
            isOut: stock.isOut ?? false,
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
  const totalRecordsChecked = recordsChecked.length

  return NextResponse.json({ success: true, totalRecordsChecked })
}
