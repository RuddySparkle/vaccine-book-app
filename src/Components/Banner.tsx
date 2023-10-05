'use client'
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Banner() {

    const covers=['/image/cover1.png','/image/cover2.png','/image/cover3.png','/image/cover4.png']
    const [index, setIndex] = useState(0);
    const router = useRouter();

    return (
        <div className='relative block m-0 p-[5px] w-screen h-[640px]' onClick={()=>{setIndex(index+1)}} >
            <Image src={covers[index%4]} alt="background" fill={true} objectFit='cover' priority/>
            <div className='relative top-[30%] z-20 text-center'>
                <h1 className='text-4xl font-bold'>Empowering Health through Vaccines</h1>
                <h2 className='text-2xl font-serif'>Protecting Today for a Safer Tomorrow</h2>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
                font-semibold text-xl py-5 px-5 m-10 rounded-lg z-30 absolute bottom-0 right-0
                hover:bg-cyan-600 hover:text-white hover:border-transparent'
                onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>
                Select the hospital NOW!
            </button>
        </div>
    );
}