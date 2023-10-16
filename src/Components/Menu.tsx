import MenuItem from './MenuItem'
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Menu() {

    const session = await getServerSession( authOptions )

    return (
        <div className='h-[75px] p-[9px] bg-blue-50 fixed top-0 inset-x-0 z-[30] border-b border-t flex flex-row'>
            
            <div className='grow flex flex-row justify-start gap-10 ml-5 place-items-center'>
            {
                session? 
                <div>
                <MenuItem title={`Sign-Out of ${session.user?.name}`} pageRef='/api/auth/signout'/>
                </div>
                :
                <div>
                    <MenuItem title='Sign-In' pageRef='/api/auth/signin'/>
                </div>
            }
            </div>

            <div className='grow flex flex-row justify-end gap-10 mr-5 h-[100%] place-items-center'>
                <div>
                    <MenuItem title="Booking" pageRef="/booking"/>
                </div>
                
                <Link href="/" className='h-[100%]'>
                    <Image  src="/image/logo.png" className='h-[100%] w-auto' 
                            alt="logo" width={0} height={0} sizes='100vh'/>
                </Link>
            </div>

        </div>
    )
}