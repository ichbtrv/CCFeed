import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/react'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content, mediaUrl, showContentValue } = req.body
  console.log(title)

  const session = await getSession({ req })
  if (session) {
    //@ts-ignore
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        mediaContentUrl: mediaUrl,
        showContent: showContentValue,
        author: { connect: { email: session?.user?.email } },
      },
    })
    res.json(result)
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
