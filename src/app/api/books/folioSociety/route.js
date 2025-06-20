export async function GET() {
  return new Response(
    JSON.stringify({ message: `Here's the list of Folio Society Books` }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
