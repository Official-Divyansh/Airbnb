import { HeartIcon } from "@heroicons/react/solid"
import Image from "next/image"

export default function InfoCard({img,location,title,description,star,price,total}) {
  return (
    <div className='flex'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image 
            alt='card'
            src={img}
            layout="fill"
            objectFit='cover'
    className='rounded-md'
            />

        </div>
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
         <p>{location}</p>
         <HeartIcon className='h-7 cursor-pointer'/>

        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
        </div>
    </div>
  )
}
