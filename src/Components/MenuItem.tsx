import Link from "next/link";

export default function MenuItem( {title, pageRef} : {title: string, pageRef: string}) {
    return (
        <Link href={pageRef} className='w-32 center font-semibold font-sans'>
            {title}
        </Link>
    );
}