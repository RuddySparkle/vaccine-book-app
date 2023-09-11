import Image from 'next/image'
import InteractCard from './InteractCard';

export default function Card({hospitalName,imgSrc}:{hospitalName:string,imgSrc:string}) {
    return (
        <InteractCard contentName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='vaccineimage' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[15px] relative'>
                <div>{hospitalName}</div>
            </div>
        </InteractCard>
    );
}