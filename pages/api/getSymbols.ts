import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if(req.method === 'GET'){
            const data = await axios.get(`https://hacktoberfest2021-backend.herokuapp.com/prod/symbols`)
            res.status(200).json({data: data.data})
        }else{
            res.status(200).json({data: 'no request'})
        }
    } catch (error: any) {
        console.log(error.message)
    }
}