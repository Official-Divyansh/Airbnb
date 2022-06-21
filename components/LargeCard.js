import Image from "next/image"
function LargeCard({img}) {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative h-96 min-w-[300px]'>
          <Image
          alt='Large-Card Image'
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
          />
      </div>
      <div className='absolute top-32 left-12'>
          <h3 className='text-4xl mb-3 w-64'>The Greatest Outdoor</h3>
          <p>Wishlists curated by Airbnb.</p>
          <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>
               Get Inspired
          </button>
      </div>
      

    </section>
  )
}

export default LargeCard