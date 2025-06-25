import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function GET() {
  // sanitizes the date since it isn't always consistent
  const convertDate = (dateData) => {
    if (!dateData || typeof dateData !== 'string') return null

    const [day, month, year] = dateData.split('/')
    if (!day || !month || !year) return null

    const d = parseInt(day, 10)
    const m = parseInt(month, 10) - 1
    const y = parseInt(year, 10)

    // checks to make sure dates are realistic
    if (y < 1900 || y > 2100 || m < 0 || m > 11 || d < 1 || d > 31) {
      return null
    } else if (!/^\d{4}$/.test(y)) {
      return null
    }

    const isoString = new Date(Date.UTC(y, m, d))
    return isNaN(isoString.getTime()) ? null : isoString
  }

  const id = 16
  const url = `${process.env.FOLIO_SOCIETY_API_URL}product&verbosity=3&ids=${id}&pushDeps=true`

  const res = await fetch(url)
  const data = await res.json()

  // attempts to add data to database and has several fallbacks date sanitization
  try {
    for (const product of data.result) {
      await prisma.folioProduct.upsert({
        where: { book_id: product.id },
        update: {
          type: product.type,
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
