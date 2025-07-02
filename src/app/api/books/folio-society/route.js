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
