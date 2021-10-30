import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "GET") {
            const data = await fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h')
            const reult = await data.json()
            res.status(200).json({ status: true, data: reult })
        }

        res.status(400).json({ status: false, data: 'method does not exist' })
    } catch (error: any) {
        console.log(error.message)
        res.status(400).json({ status: false, data: error.message })
    }
}