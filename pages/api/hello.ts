// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
