import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "GET") {
            const { id } = req.query
            res.status(200).json({ status: true, data: { id } })
        }

        res.status(400).json({ status: false, data: 'method does not exist' })
    } catch (error: any) {
        console.log(error.message)
        res.status(400).json({ status: false, data: error.message })
    }
}