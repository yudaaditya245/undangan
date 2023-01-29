import { supabase } from "../../lib/supabaseClient"

export default async function(req, res) {

    // const readUsers = await supabase
    // .from('undangans')
    // .insert({ theme: 3 })

    const str = (new Date().getTime()).toString()
    const randId = parseInt(str.substring(str.length - 8, str.length - 2))
    res.send({
        ori : str,
        then : randId
    })
}