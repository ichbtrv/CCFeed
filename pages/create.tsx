import PostForm from 'components/postform/PostForm'
import PostCard from 'components/layout/PostCard'
import { useSession } from 'next-auth/react'
import AccessDenied from 'components/auth/AccessDenied'
import { useSnapshot } from 'valtio'
import { contentState, mediaState, postState } from '../store/store'
import Router from 'next/router'
import PageContainer from 'components/layout/pagecontainer/PageContainer'
import { Spinner } from 'components/loading/Spinner'
import { useState } from 'react'

const Create = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const snap = useSnapshot(postState)
  const mediaStateSnapshot = useSnapshot(mediaState)
  const contentSnapShot = useSnapshot(contentState)

  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    return <AccessDenied />
  }

  const submitData = async (e: React.SyntheticEvent) => {
    setIsSubmitting(true)
    e.preventDefault()
    console.log('YO YOU HERE')
    try {
      const { title, content } = snap
      const { mediaUrl } = mediaStateSnapshot
      const { showContentValue } = contentSnapShot

      const body = { title, content, mediaUrl, showContentValue }

      await fetch(`https://ccfeed.vercel.app/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/success')
    } catch (error) {
      console.error(error)
    }
  }
  return !isSubmitting ? (
    <div
      onSubmit={submitData}
      className="flex flex-col justify-center items-center min-w-full"
    >
      <PostForm />
      <PostCard author={session.user.name} />

      <button type="button" className="text-center flex-1" onClick={submitData}>
        Submit
      </button>
    </div>
  ) : (
    <PageContainer>
      <Spinner displayed={true} />
    </PageContainer>
  )
}

export default Create
