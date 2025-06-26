import { NextResponse } from 'next/server'
import convertDate from '@/lib/utils/convertDate'
import convertDateWTime from '@/lib/utils/convertDateWTime'
import { PrismaClient } from '../../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function GET() {
  const id = 16
  const url = `${process.env.FOLIO_SOCIETY_API_URL}product&verbosity=3&ids=${id}&pushDeps=true`

  // fetches from Folio Society's API
  const res = await fetch(url)
  const data = await res.json()

  // attempts to add data to database and has several fallbacks date sanitization
  try {
    for (const product of data.result) {
      await prisma.folioProduct.upsert({
        where: { book_id: product.id },
        update: {
          editor_note_description: product.editor_note_description ?? 'NULL',
          updated_at: convertDateWTime(product._updated_at),
          price: product.price ?? 12345678.99,
          visibility: product.visibility ?? {},
          stock_status: product.stock_status ?? 12345678,
          verbosity: product.verbosity ?? 12345678,
        },
        create: {
          type: product.type ?? 'NULL',
          book_id: product.id,
          sku: product.sku ?? 'NULL',
          title: product.name ?? 'NULL',
          author: product.author ?? {},
          illustrator: product.illustrator ?? {},
          introduced_by: product.introduced_by ?? {},
          afterword_by: product.afterword_by ?? {},
          pages: product.pages ?? 'NULL',
          short_description: product.short_description ?? 'NULL',
          editor_note_description: product.editor_note_description ?? 'NULL',
          collection_text: product.collection_text ?? 'NULL',
          category: product.category_path ?? 'NULL',
          publication_date: convertDate(product.publication_date),
          updated_at: convertDateWTime(product._updated_at),
          price: product.price ?? 12345678.99,
          url: product.url ?? 'NULL',
          main_image: product.swatch_image ?? 'NULL',
          thumbnail_image: product.thumbnail ?? 'NULL',
          media: product.media ?? {},
          visibility: product.visibility ?? {},
          stock_status: product.stock_status ?? 12345678,
          store: product.store ?? 12345678,
          verbosity: product.verbosity ?? 12345678,
        },
      })
    }
  } catch (err) {
    // if for some reason an error occurs, this will print a readable version. Helps keep Prisma errors from being too loud
    console.error(`____________[PRISMA ERROR]____________
    ${err.message}  
  `)
  }

  return NextResponse.json({ success: true })
}
