import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const Settings = (props) => {
  const { data: session } = useSession()
  const router = useRouter()
  if (!session) router.push('./auth/signin')
  return <div>Settings</div>
}

export default Settings