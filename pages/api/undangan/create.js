import { supabase } from "../../../lib/supabaseClient";

export default async function (req, res) {
    
    if (req.method !== "POST") {
        return res.status(403).send({message : "salah dong"})
    }
    const body = req.body

    const str = (new Date().getTime()).toString()
    const randId = parseInt(str.substring(str.length - 8, str.length - 2))

    const { error } = await supabase.from('undangans')
    .insert({ id: randId, theme: body.id, pria: "", wanita: "" })
    
    if (!error) {
        return res.status(200).send({id:randId, message : "sip"})
    } else {
        return res.status(400).send({id:randId, message: error})
    }
}