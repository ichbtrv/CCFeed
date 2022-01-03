import AccessDenied from 'components/auth/AccessDenied'
import PostCard from 'components/layout/PostCard'
import { Spinner } from 'components/loading/Spinner'
import PostForm from 'components/postform/PostForm'
import { contentState, mediaState, postState } from '../store/store'
import { useSnapshot } from 'valtio'
import { useSession } from 'next-auth/react'
import React from 'react'
import Router from 'next/router'

const Create = (props) => {
  const snap = useSnapshot(postState)
  const mediaStateSnapshot = useSnapshot(mediaState)
  const contentSnapShot = useSnapshot(contentState)

  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <Spinner displayed={true} />
  }

  if (status === 'unauthenticated') {
    return <AccessDenied />
  }
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const { title, content } = snap
      const { mediaUrl } = mediaStateSnapshot
      const { showContentValue } = contentSnapShot

      const body = { title, content, mediaUrl, showContentValue }

      await fetch(`localhost:3000/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/success')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="flex w-screen flex-col justify-center items-center mx-auto">
      <PostForm />
      <div>
        <PostCard author={session.user.name} />
      </div>
      <button type="button" className="text-center flex-1" onClick={submitData}>
        Submit
      </button>
    </div>
  )
}

export default Create
