import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/Components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import AddHospitalForm from "@/Components/AddHospitalForm";

export default async function Hospital() {

    const hospitals = getHospitals()
    const session = await getServerSession( authOptions )
    const profile = session? await getUserProfile(session.user.token) : null

    return (
        <main className="p-5 bg-[#d5e3f0] min-h-screen">

            <div className="text-center">
                <h1 className="text-xl font-medium">Select Your Hospital</h1>
                <Suspense fallback={<p> Loading ... <LinearProgress/></p>}>
                    <HospitalCatalog hospitalJson={hospitals}/>
                </Suspense>
            </div>

            <hr className="my-8 border-[px] border-[#000000]"/>
            {
                (profile?.data.role == 'admin') ?
                <AddHospitalForm/>
                : 
                null
            }

        </main>
    );
}