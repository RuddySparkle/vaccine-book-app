import Image from 'next/image'
import InteractCard from './InteractCard';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function Card({ hospitalName, ratingMap, imgSrc, onCompare}:{ hospitalName: string, ratingMap: Map<string,number>, imgSrc:string, onCompare:Function}) {

    return (
        <InteractCard contentName={hospitalName} >
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='vaccineimage' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[15px] relative'>
                <div>{hospitalName}</div>
                
            </div>
            <Box className='block h-[10%] px-[15px]'>
                <Rating name="simple-controlled" value={ratingMap.get(hospitalName) || 0}
                onChange={(e,newValue) => {
                    if (newValue) {        
                        onCompare(hospitalName, newValue);
                    }
                }}
                onClick={(e) => {e.stopPropagation();}}
                />                
            </Box> 
        </InteractCard>
    );
}