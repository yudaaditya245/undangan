
import Link from 'next/link';
import {CgArrowLongRight} from 'react-icons/cg'
import HomeLayout from '../layout/home';

export default function Home({ users }) {
    return (
        <div>
            <div className='mb-3'>Ini index</div>
            <Link href="/dashboard" className='flex items-center'>
                Got to dashboard <CgArrowLongRight size={20} className='ml-3'/>
            </Link>
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return <HomeLayout>{page}</HomeLayout>;
};
