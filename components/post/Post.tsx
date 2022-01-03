import React from 'react'
import Router from 'next/router'

export type PostProps = {
  id: string
  title: string
  author: {
    name: string
    email: string
  } | null
  content: string
  mediaContentUrl: string
  published: boolean
  showContent: boolean
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <div
      className="flex flex-col justify-center flex-1 my-4"
      onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}
    >
      <h1 className="text-2xl flex-auto h5 font-haas ml-2">{post.title}</h1>
      <div className="rounded-lg overflow-clip relative max-w-content max-h-fit border-2">
        <video
          src={post.mediaContentUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="rounded-lg"
          controlsList="none"
          width="380"
          height="720"
        />
        <div className="items-end justify-center flex backdrop-blur-3xl">
          {post.showContent ? (
            <div className="bg-slate-100 bg-opacity-90 text-sm h-24 absolute bottom-0 w-11/12 shadow-xl rounded-lg p-3 text-slate-700 flex  backdrop-blur-xl backdrop-brightness-150 mt-1">
              <div className="flex items-center justify-center w-full shadow-xl p-1 rounded-lg ">
                <div className="text-center flex flex-col p-2 leading-4 "></div>
                <p className="my-1 ">{post.content}</p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="text-right mr-2 font-haas">{authorName}</div>
    </div>
  )
}

export default Post
