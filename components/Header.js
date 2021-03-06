import Image from "next/image"
import logo from "./assets/logo.png"
import {SearchIcon,GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon} from '@heroicons/react/solid'
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [search, setSearch] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuest, setNoOfGuest] = useState("")
  const router = useRouter()
 function handleSelect(ranges){
  setStartDate(ranges.selection.startDate)
  setEndDate(ranges.selection.endDate)
    }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const searchQuery = ()=>{
    router.push({
      pathname: "/search",
      query: {
        location:search,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guest: noOfGuest
      }
    })
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center  h-10 cursor-pointer my-auto'
       >
        <Image
        alt='Header'
         src={logo}
         layout="fill"
         objectFit='contain'
         objectPosition="left"
         onClick={()=> router.push("/")}
        />
       
        
        </div>

        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm '>
            <input type={search} placeholder="Start your search"
            onChange={(e)=> setSearch(e.target.value)}
            className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-600 ' />
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>

        <div className=' flex items-center space-x-4 justify-end text-gray-500'>
            <p className='hidden md:inline'> Become a Host</p>
            <GlobeAltIcon className='h-6 cursor-pointer hidden md:block' />
            
            <div className='flex items-center space-x-0 border-2 p-2 rounded-full'>
               <MenuIcon className='  h-6' />
               <UserCircleIcon className='hidden sm:flex h-6' />
            </div>
        </div>
        {
          search && (
            <div className='bg-white  absolute sm:static top-[2cm] flex flex-col col-span-3 mx-auto'>
            <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            />
            <div className=' flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
            Number of Guests
            </h2>
            <UserIcon className='h-5'/>
            <input
            type="number"
            value={noOfGuest}
            onChange={(e)=> setNoOfGuest(e.target.value)}
            min={1}
            className='w-12 pl-2 text-lg outline-none text-red-900'
            />
            </div>
            <div className='flex'>
              <button onClick={()=> setSearch("")} className='flex-grow text-gray-500'>Cancel</button>
              <button onClick={searchQuery} className='flex-grow text-red-500'>Search</button>
            </div>
            </div>
          )
        }
    </header>
  )
}

export default Header