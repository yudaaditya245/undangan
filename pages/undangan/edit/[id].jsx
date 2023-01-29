
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgArrowLongLeft } from 'react-icons/cg';
import { supabase } from '../../../lib/supabaseClient'
import {useRouter} from 'next/router';

export default function UndanganEdit({ undangan }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [pria, setPria] = useState('')
    const [wanita, setWanita] = useState('')

    useEffect(() => {
        setPria(undangan.pria)
        setWanita(undangan.wanita)
    },[])

    const handlerSave = async () => {

        setIsLoading(true)

        const save = await axios('/api/undangan/saveEdit',{
            method : "PATCH",
            data : {
                pria, wanita, id: undangan.id
            }
        })

        if (save.status === 200){
            router.push('/dashboard')
        } else {
            setIsLoading(false)
            alert('error!')
        }
        
    }

    return (
        <div className="bg-dark-2 max-w-screen-lg mx-auto">
            <div className='flex flex-row'>
                <div className='p-5'>
                    <label className='mb-4 block'>
                        <div>Pria</div>
                        <input type="text" value={pria} onChange={(e) => setPria(e.target.value)} placeholder="Masukkan nama pria"
                                className='bg-transparent border border-neutral-500 px-3 py-2'/>
                    </label>
                    <label className='mb-4 block'>
                        <div>Wanita</div>
                        <input type="text" value={wanita} onChange={(e) => setWanita(e.target.value)} placeholder="Masukkan nama wanita"
                                className='bg-transparent border border-neutral-500 px-3 py-2'/>
                    </label>
                    {isLoading 
                    ? <span >loading ...</span>
                    : <button onClick={handlerSave}>save</button>
                    }
                </div>
                <div className='p-5'>
                    <div className='border p-10'>
                        <div>{pria !== '' ? pria : undangan.pria}</div>
                        <div>{wanita !== '' ? wanita : undangan.wanita}</div>
                        <div>{undangan.theme}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.id
    const readUndangans = await supabase.from("undangans").select(`*, themes (*)`).eq('id', id)

    // console.log(readUndangans.data[0]);
    return {
        props: {
            undangan: readUndangans.data[0],
        },
    };
}