import Image from 'next/image'

export default function Banner() {
    return (
        <div className='relative block m-0 p-[5px] w-screen h-96'>
            <Image src="/image/background.png" alt="background" fill={true} objectFit='cover' priority/>
            <div className='relative top-[35%] z-20 text-center'>
                <h1 className='text-4xl font-bold'>Empowering Health through Vaccines</h1>
                <h2 className='text-2xl font-serif'>Protecting Today for a Safer Tomorrow</h2>
            </div>
        </div>
    );
}