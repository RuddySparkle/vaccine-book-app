import Image from 'next/image';
import getHospital from '@/libs/getHospital';

export default async function HospitalInfoPage({params} : {params: {hid: string}}) {

    const hospitalDetail = await getHospital(params.hid);

    // const mockHospitalRepo = new Map();
    // mockHospitalRepo.set('001', {name: 'Chulalongkorn Hospital', rating: 4, imgSrc: '/image/chula.jpg'});
    // mockHospitalRepo.set('002', {name: 'Rajavithi Hospital', rating: 4, imgSrc: '/image/rajavithi.jpg'});
    // mockHospitalRepo.set('003', {name: 'Thammasat University Hospital', rating: 4, imgSrc: '/image/thammasat.jpg'});

    return (
        <main className="text-center p-5">
            <div className="flex my-5">
                <Image src={hospitalDetail.data.picture} alt='Hospital Image'
                    width={0} height={0} sizes='100vw' className='rounded-lg shadow-lg w-[30%]'
                />
                <div className='text-left mx-5'>
                    <h1 className='text-3xl font-medium mx-5 mt-5 mb-10'>{hospitalDetail.data.name} </h1>
                    <div className='text-lg mx-5'>Address: {hospitalDetail.data.address} </div>
                    <div className='text-lg mx-5'>District: {hospitalDetail.data.district} </div>
                    <div className='text-lg mx-5'>Province: {hospitalDetail.data.province} </div>
                    <div className='text-lg mx-5'>Postal Code: {hospitalDetail.data.postalcode} </div>
                    <div className='text-lg mx-5'>Telephone: {hospitalDetail.data.tel} </div>
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [{hid:'001'}, {hid:'002'}, {hid:'003'}]
}