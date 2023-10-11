import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/Components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CardPanel from "@/Components/CardPanel";

export default function Hospital() {

    const hospitals = getHospitals()

    return (
        <main className="text-center p-5 h-screen">
            <h1 className="text-xl font-medium">Select Your Hospital</h1>
            <Suspense fallback={<p> Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>

            <hr className="my-5"/>

            {/* <div> Test CardPanel Loading ... </div>
            <CardPanel/> */}

        </main>
    );
}