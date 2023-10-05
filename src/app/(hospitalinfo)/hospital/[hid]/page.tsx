import Image from 'next/image';

export default function HospitalInfoPage({params} : {params: {hid: string}}) {

    const mockHopitalRepo = new Map();
    mockHopitalRepo.set('001', {name: 'Chulalongkorn Hospital', rating: 4, imgSrc: '/image/chula.jpg'});
    mockHopitalRepo.set('002', {name: 'Rajavithi Hospital', rating: 4, imgSrc: '/image/rajavithi.jpg'});
    mockHopitalRepo.set('003', {name: 'Thammasat University Hospital', rating: 4, imgSrc: '/image/thammasat.jpg'});

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">
                Hospital ID : {params.hid}
            </h1>
            <div className="flex flex-row my-5">
                <Image src={(mockHopitalRepo.get(params.hid).imgSrc)} alt='Hospital Image'
                    width={0} height={0} sizes='100vw' className='rounded-lg shadow-lg w-[30%]'
                />
                <div className='text-md mx-5'>
                    {mockHopitalRepo.get(params.hid).name}
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [{hid:'001'}, {hid:'002'}, {hid:'003'}]
}