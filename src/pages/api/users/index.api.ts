import { NextApiRequest, NextApiResponse } from 'next'
import { primsa } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  const user = await primsa.user.create({
    data: {
      name,
      username,
    },
  })

  return res.status(201).json(user)
}
