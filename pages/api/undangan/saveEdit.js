import { supabase } from "../../../lib/supabaseClient";

export default async function (req, res) {

    if (req.method !== "PATCH") {
        return res.status(403).send({message : "salah dong"})
    }
    const body = req.body


    const {error} = await supabase.from('undangans')
    .update({ pria : body.pria, wanita: body.wanita }).eq('id', body.id)
    
    if (!error) {
        return res.status(200).send({message : "sip"})
    } else {
        return res.status(400).send({message: error})
    }
}