import Link from "next/link";

export default function MenuItem( {title, pageRef} : {title: string, pageRef: string}) {
    return (
        <Link href={pageRef} className='w-32 center my-auto font-semibold font-sans'>
            {title}
        </Link>
    );
}