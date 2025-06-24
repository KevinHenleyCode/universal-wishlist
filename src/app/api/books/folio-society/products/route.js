import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function GET() {
  let id = 16
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
        type: product.type,
        book_id: product.id,
        sku: product.sku,
        title: product.name,
        author: product.author,
        illustrator: product.illustrator,
        introduced_by: product.introduced_by ?? 'No Introduction',
        short_description: product.short_description,
        editor_note_description: product.editor_note_description,
        category: product.category_path,
        bestseller: product.bestseller ?? 0, //Remove
        created_at: product.created_at,
        price: product.price,
        url: product.url,
        main_image: product.main_image ?? 'No Main Image', //Remove
        main_image_label: product.main_image_label ?? 'No Main Image Label', //Remove
        thumbnail_image: product.thumbnail,
        thumbnail_label: product.thumbnail_label ?? 'No thumbnail Label', //Remove
        swatch_image: product.swatch_image,
        media: product.media,
        breadcrumbs: product.breadcrumbs,
        visibility: product.visibility,
        stock_status: product.stock_status,
        store: product.store,
        verbosity: product.verbosity,
        // TODO add _updated_at, pages, publication_date, meta
      },
    })
  }

  return NextResponse.json({ success: true })
}
