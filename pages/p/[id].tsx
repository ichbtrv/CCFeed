import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Layout from '../../components/layout/Layout'
import Router from 'next/router'

import prisma from '../../lib/prisma'
import { getSession, useSession } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const session = await getSession()
  //@ts-ignore
  const post = await prisma.post.findUnique({
    where: {
      id: String(params.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  })
  return {
    props: { post: JSON.parse(JSON.stringify(post)), session },
  }
}

async function deletePost(id: string): Promise<void> {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: 'DELETE',
  })
  await Router.push('/')
}

const Post = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <div>Authenticating ...</div>
  }
  const userHasValidSession = Boolean(session)
  const postBelongsToUser = session?.user?.email === props.post?.author?.email
  return (
    <div>
      <div className="flex flex-col flex-1">
        <h1 className="text-2xl flex-auto  h5 font-haas ml-10">
          {props.post.title}
        </h1>
        <div className="flex flex-col justify-center items-center relative max-w-screen">
          <div className="rounded-lg overflow-clip max-w-fit max-h-fit border-2">
            <video
              src={props.post.mediaContentUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="rounded-lg"
              controlsList="none"
            />
            <div className="items-center justify-center flex backdrop-blur-3xl"></div>
          </div>
        </div>
      </div>
      <div className="ml-10">
        <h2>{props.post?.content}</h2>
        <p className="font-bold">
          {props?.post?.author?.name || 'Unknown author'}
        </p>
        {userHasValidSession && postBelongsToUser ? (
          <button onClick={() => deletePost(props.post.id)}>
            <p className="text-rose-500">Delete</p>
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Post
