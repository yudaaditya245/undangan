import Link from "next/link";
import MainLayout from "../../layout/main";
import { supabase } from "../../lib/supabaseClient";

export default function Dashboard({ undangans }) {
    
    return (
        <>
        <div className="">
            <Link href="/undangan/themes" className="bg-main-1 px-4 py-2 inline-block mb-5">buat undangan baru</Link>
            <div className="grid grid-cols-4">
                {undangans && 
                    undangans.map((d) => (
                        <div key={d.id} className="bg-dark-2 p-5">
                            <div className="mb-5">
                                Theme : {d.themes.nama} <br />
                                {d.pria} x {d.wanita}
                            </div>
                            <Link href={`/undangan/edit/${d.id}`} className="bg-neutral-500 px-4 py-2">Edit</Link>
                        </div>
                    ))
                }
                {!undangans && <div className="mb-5">Belum ada undangan.</div>}
            </div>
        </div>
        </>
    );
}

export async function getServerSideProps() {

    const readUndangan = await supabase.from('undangans').select(`*, themes(*)`)

    console.log(readUndangan);
    return {
        props: {
            undangans : readUndangan.data
        },
    };
}

Dashboard.getLayout = function getLayout(page) {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    )
  }