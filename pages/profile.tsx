import AccessDenied from 'components/auth/AccessDenied'

import Image from 'next/image'

import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Layout from '../components/layout/Layout'

import { useSession, getSession } from 'next-auth/react'
import prisma from '../lib/prisma'
import PostFeed from '../components/post/PostFeed'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { drafts: [] } }
  }
  //@ts-ignore
  const myFeed = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return {
    props: { myFeed: JSON.parse(JSON.stringify(myFeed)) },
  }
}

export default function ProfilePage({
      myFeed,
    }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    return <AccessDenied />
  }

  return (
    <>
      <div className={'lg:my-12'}>
        <Image
          src={session.user.image}
          height="150"
          width="150"
          alt=" "
          className="rounded-full"
          quality={100}
        />
      </div>
      <h1 className="text-2xl m-4 pb-10 lg:fixed top-20">
        Welcome to your <span className="text-slate-600">Profile</span>,{' '}
        {session.user.name}
      </h1>

      <PostFeed feed={myFeed} />
    </>
  )
}
