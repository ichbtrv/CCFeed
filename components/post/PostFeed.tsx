import Post, { PostProps } from 'components/post/Post'

type Props = {
  feed: PostProps[]
}

export default function PostFeed({ feed }: Props) {
  return (
    <div className="px-4 ">
      <main className="grid lg:grid-cols-4 gap-x-40 min-w-full  min-h-screen justify-center flex-wrap">
        {feed.map((post) => (
          <div key={post.id} className="post px-2 min-h-screen">
            <Post post={post} />
          </div>
        ))}
      </main>
    </div>
  )
}
