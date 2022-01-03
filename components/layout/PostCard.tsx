import { useSnapshot } from 'valtio'
import { contentState, postState } from '../../store/store'
import PostCardVideo from './PostCardVideo'

interface PostCardProps {
  author: string
}

const PostCard = ({ author }: PostCardProps) => {
  const snap = useSnapshot(postState)
  const contentSnap = useSnapshot(contentState)

  return (
    <div className="flex flex-col justify-center flex-1">
      <h1 className="text-lg flex-auto h5 font-haas">{snap.title}</h1>
      <div className="rounded-lg overflow-clip relative max-w-fit max-h-fit border-2">
        <PostCardVideo />
        {contentSnap.showContentValue ? (
          <div className="items-center justify-center flex backdrop-blur-3xl">
            <div className="bg-slate-100 bg-opacity-90 text-sm h-24 absolute bottom-0 w-11/12 shadow-xl rounded-lg p-3 text-slate-700 flex  backdrop-blur-xl backdrop-brightness-150 ">
              <div className="flex items-center justify-center w-full shadow-xl rounded-lg ">
                <div className="text-center flex flex-col p-2 leading-4 ">
                  <p className="my-1">{snap.content}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="ml-4 font-haas">{author}</div>
    </div>
  )
}

export default PostCard
