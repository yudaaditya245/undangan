import { supabase } from "../lib/supabaseClient";

export default function Home({ users }) {
    return (
        <div>
            supa
            <br />
            {users.map((d) => (
                <div key={d.id}>{d.merk}</div>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    const readUsers = await supabase.from("mobils").select();

    console.log(readUsers);
    return {
        props: {
            users: readUsers.data,
        },
    };
}
