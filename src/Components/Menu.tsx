import MenuItem from './MenuItem'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {
    return (
        <div className='h-[75px] p-[9px] bg-blue-50 fixed top-0 inset-x-0 z-[30] border-b border-t flex flex-row justify-end'>
            <MenuItem title="Booking" pageRef="/booking"/>
            <Link href="/">
            <Image src="/image/logo.png" className='h-[100%] w-auto mr-8' alt="logo" width={0} height={0} sizes='100vh'/>
            </Link>
        </div>
    )
}