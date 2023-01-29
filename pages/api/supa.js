import { supabase } from "../../lib/supabaseClient"

export default async function(req, res) {

    const readUsers = await supabase.from('mobils').select(`*, `)

    res.send(readUsers)
}