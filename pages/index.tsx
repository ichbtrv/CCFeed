import Post from 'components/post/Post'
import prisma from 'lib/prisma'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  //@ts-ignore
  const feed = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: true,
    },
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  })

  return {
    //@ts-ignore
    props: { feed: JSON.parse(JSON.stringify(feed)) },
  }
}

export default function Home({
      feed,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div>
        <main className="flex flex-wrap min-h-screen justify-start ">
          {feed.map((post) => (
            <div key={post.id} className="post rounded-lg  mx-auto  min-w-fit ">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #8b89898d;
          cursor: pointer;
        }

        .post + .post {
        }
      `}</style>
    </>
  )
}
//ahhh ok it works on local dev?
