import AccessDenied from 'components/auth/AccessDenied'
import PageContainer from 'components/layout/pagecontainer/PageContainer'
import PostCard from 'components/layout/PostCard'
import { Spinner } from 'components/loading/Spinner'
import { useSession } from 'next-auth/react'
import React from 'react'

const Create = (props) => {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <Spinner displayed={true} />
  }

  if (status === 'unauthenticated') {
    return <AccessDenied />
  }
  return (
    <div className="flex w-screen justify-center items-center mx-auto">
      <div>
        <PostCard author={session.user.name} />
      </div>
    </div>
  )
}

export default Create
