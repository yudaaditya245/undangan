import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { CgArrowLongLeft } from 'react-icons/cg';
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/router';

export default function UndanganThemes({themes}) {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handlerCreate = async (id) => {
        setIsLoading(true)

        const create = await axios('/api/undangan/create', {
            method: "POST",
            data : {
                id
            }
        })    

        if (create.status === 200) {
            router.push(`/undangan/edit/${create.data.id}`)
        } else {
            isLoading(false)
            alert('gagal')
        }
    }

    return (
        <div className="bg-dark-2 max-w-screen-lg mx-auto p-5">
            <Link href="/dashboard" className="mr-3">
                <CgArrowLongLeft size={20} />
            </Link>
            <div className='mb-5'>
                THEMES {isLoading && "- Loading....."}
            </div>
                
            <div className='grid grid-cols-4 gap-5'>
                {themes.map((d) => (
                    <button key={d.id} className='bg-neutral-500 p-5' onClick={() => handlerCreate(d.id)}>
                        {d.nama}
                    </button>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const readThemes = await supabase.from("themes").select().order('id');

    // console.log(readThemes);
    return {
        props: {
            themes: readThemes.data,
        },
    };
}