import Image from "next/image"
function MediumCard({img, title}) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">

     <div className="relative h-80 w-80">
        <Image
        alt="Medium Card"
        src={img}
        layout="fill"
        className="rounded-xl"
        />
        <h3 className='text-2xl mt-3'>{title}</h3>
     </div>
    </div>
  )
}

export default MediumCard