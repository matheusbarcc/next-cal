import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'
import dayjs from 'dayjs'
import { z } from 'zod'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const username = String(req.query.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return res.status(400).json({ message: 'User not provided.' })
  }

  const createSchedulingBody = z.object({
    name: z.string(),
    email: z.string().email(),
    observations: z.string(),
    date: z.string().datetime(),
  })

  const { name, email, observations, date } = createSchedulingBody.parse(
    req.body,
  )

  console.log(date)

  const schedulingDate = dayjs(date).startOf('hour')

  // console.log(schedulingDate)

  if (schedulingDate.isBefore(new Date())) {
    return res.status(400).json({
      message: 'Date is in the past.',
    })
  }

  const conflictiongScheduling = await prisma.scheduling.findFirst({
    where: {
      user_id: user.id,
      date: schedulingDate.toDate(),
    },
  })

  if (conflictiongScheduling) {
    return res.status(400).json({
      message: 'There is another scheduling at the same time.',
    })
  }

  await prisma.scheduling.create({
    data: {
      date: schedulingDate.toDate(),
      name,
      email,
      observations,
      user_id: user.id,
    },
  })

  return res.status(201).end()
}
