import Link from "next/link"
import Card from "./Card"

export default async function HospitalCatalog({hospitalJson}: {hospitalJson: Object}) {

    const hospitalJsonReady = await hospitalJson

    return(
        <>
        Explore {hospitalJsonReady.count} hospitals in our catalog

        <div className='m-[30px] flex flex-row content-around justify-around flex-wrap'>
            {
                hospitalJsonReady.data.map((hospital: Object) => (
                    <Link href={`/hospital/${hospital.id}`} 
                        className='w-[100%] sm:w-[50%] md:w-[33%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8'>
                        <Card hospitalName={hospital.name} ratingMap={new Map()} imgSrc={hospital.picture}/>
                    </Link>
                ))
            }
        </div>
        </>
    )
}