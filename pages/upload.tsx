import { useSession } from 'next-auth/react'
import Router from 'next/router'
import UploadForm from '../components/upload/UploadForm'
import React from 'react'

const Upload = (props) => {
  const { data: session } = useSession()

  return <UploadForm />
}

export default Upload
