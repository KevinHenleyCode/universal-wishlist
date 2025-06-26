import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../../prisma/generated'
const prisma = new PrismaClient()

export async function GET() {
  const data = await prisma.folioProduct.findMany({
    include: {
      stock: true,
    },
  })

  return NextResponse.json({ success: true, data })
}
