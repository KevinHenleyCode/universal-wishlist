import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function GET() {
  const id = 16
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
        publication_date: product.publication_date ?? new Date('01/01/1900'),
        created_at: product.created_at ?? new Date('01/01/1900'),
        updated_at: product._updated_at ?? new Date('01/01/1900'),
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

  return NextResponse.json({ success: true })
}
