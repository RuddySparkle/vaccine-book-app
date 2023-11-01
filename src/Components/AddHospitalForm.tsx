import Hospital from '@/db/models/Hospital'
import { dbConnect } from '@/db/dbConnect'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function AddHospitalForm(){

    const addHospital = async (addHospitalForm: FormData) => {
        'use server'
        const hospitalName = addHospitalForm.get('hospitalName')
        const address = addHospitalForm.get('address')
        const district = addHospitalForm.get('district')
        const province = addHospitalForm.get('province')
        const postalCode = addHospitalForm.get('postalCode')
        const telNum = addHospitalForm.get('telNum')
        const pictureURL = addHospitalForm.get('pictureURL')

        try {
            await dbConnect()
            const hospital = await Hospital.create(
                {
                    'name': hospitalName,
                    'address': address,
                    'district': district,
                    'province': province,
                    'postalcode': postalCode,
                    'tel': telNum,
                    'picture': pictureURL
                }
            )
        } catch (error) {
            console.log(error)
        }
        revalidateTag('hospitals')
        redirect('/hospital')
    }

    return (
        <form action={addHospital}>
        <div className="text-xl text-blue-700 font-semibold m-5 text-center"> Add New Hospital </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-4 flex justify-start">
            
                <div className="sm:col-span-full">
                    <label htmlFor="hospitalName" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Hospital Name
                    </label>
                    <input 
                        required
                        type="text" 
                        name='hospitalName' 
                        id='hospitalName'
                        placeholder="Hospital Name"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Address
                    </label>
                    <input 
                        required
                        type="text" 
                        name='address' 
                        id='address'
                        placeholder="Address"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        District
                    </label>
                    <input 
                        required
                        type="text" 
                        name='district' 
                        id='district'
                        placeholder="District" 
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Province
                    </label>
                    <input 
                        required
                        type="text" 
                        name='province' 
                        id='province'
                        placeholder="Province"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Postal Code
                    </label>
                    <input 
                        required
                        type="text" 
                        name='postalCode' 
                        id='postalCode'
                        placeholder="Postal Code"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="telNum" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Tel.
                    </label>
                    <input 
                        required
                        type="text" 
                        name='telNum' 
                        id='telNum'
                        placeholder="0XX-XXX-XXXX"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="pictureURL" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                        Picture URL
                    </label>
                    <input 
                        required
                        type="text" 
                        name='pictureURL' 
                        id='pictureURL'
                        placeholder="Picture URL"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <button type="submit"
                    className="sm:col-span-full place-self-center rounded-md bg-indigo-600 mt-5 px-3 py-2 text-sm 
                    font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                    Add Hospital
                </button>
                
            </div>
        
        </form>
    )
}