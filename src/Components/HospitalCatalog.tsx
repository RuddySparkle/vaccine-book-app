import Link from "next/link"
import Card from "./Card"

export default async function HospitalCatalog({hospitalJson}: {hospitalJson: Object}) {

    const hospitalJsonReady = await hospitalJson

    return(
        <>
        Explore {hospitalJsonReady.count} models in our catalog

        <div className='m-[30px] flex flex-row content-around justify-around flex-wrap'>
            {
                hospitalJsonReady.data.map((hospital: Object) => (
                    <Link href={`/hospital/${hospital.id}`} className='w-1/4'>
                        <Card hospitalName={hospital.name} ratingMap={new Map()} imgSrc={hospital.picture}/>
                    </Link>
                ))
            }
        </div>
        </>
    )
}