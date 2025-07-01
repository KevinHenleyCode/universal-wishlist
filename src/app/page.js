import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center pt-6'>
      <h1 className='text-custom-white text-6xl tracking-wider'>WELCOME</h1>
      <section className='mt-20 flex justify-center'>
        <p className='text-custom-white w-3/4 text-justify text-lg tracking-widest'>
          I know firsthand how challenging it can be to keep track of all your
          different wishlists across multiple sites—especially when you’re
          collecting niche treasures like rare or limited-edition books. This
          app is here to make things easier by bringing all your wishlists into
          one place. You can track your favorite items and see up-to-date
          information about the quantity available from select sites, so you can
          spend less time juggling tabs and more time enjoying your collection.
        </p>
      </section>
    </div>
  )
}
