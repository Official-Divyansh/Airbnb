import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRouter } from 'next/router';
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import MapUi from "../components/MapUi";
function Search({searchResults}) {
    const router = useRouter()
    console.log(router.query)
    const {location, endDate, startDate,guest} = router.query
  
    
    // var formatStartDate = format(
    //     new Date(startDate),
    //     'MM/dd/YYYY'
    //   )
    // const formatEndDate = format(new Date(endDate), "MM/dd/YYYY")

    const range = `${startDate} - ${endDate}`
  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${guest}`} />
        <main className="flex">
    <section className="flex-grow pt-14 px-6">
        <p className="text-xs">
            300+ Stays - {range} - for {guest} number of Guests
        </p>
        <h1 className="text-3xl font-semibold mt-2 rb-6">Stays in {location}</h1>
        <div>
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Bed</p>
            <p className="button">More filters</p>
        </div>

        {
            searchResults.map((item,index) =>(
        <div className="mb-10" key={index}>
                <InfoCard
                
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                totle={item.totle}
                />
            </div>
                ))
            }
    </section>
    <section className="hidden md:inline-flex xl:min-w-[600px]">

    <MapUi/>
    </section>
        </main>
        <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then((res)=> res.json())

    return {
        props:{
            searchResults
        }
    }
}