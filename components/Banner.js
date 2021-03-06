import Image from "next/image"

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image
        alt='Banner Image'
        src={"https://a0.muscache.com/im/pictures/8aa32150-e831-40aa-98f5-b743b44c6b27.jpg?im_w=960"}
        layout='fill'
        objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <h1 className='text-xl sm:text-md font-medium text-purple-300 '>Not sure where to go?</h1>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I am flexible</button >
        </div>
    </div>
  )
}

export default Banner