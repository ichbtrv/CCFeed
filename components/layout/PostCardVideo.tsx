import { mediaState } from '../../store/store'
import { useSnapshot } from 'valtio'

const PostCardVideo = () => {
  const mediaSnap = useSnapshot(mediaState)

  return (
    <div
      className={'rounded-lg overflow-clip border-2 shadow-slate-600 shadow-lg'}
    >
      <video
        src={mediaSnap.mediaUrl}
        autoPlay
        muted
        playsInline
        loop
        width="310"
        height="600"
        preload="auto"
        className="rounded-lg"
      />
    </div>
  )
}

export default PostCardVideo
