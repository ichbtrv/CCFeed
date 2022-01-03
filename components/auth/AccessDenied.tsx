import Link from 'next/link'
import React from 'react'

const AccessDenied = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Woah! Access Denied</h1>
      <div className="my-12">
        <Link href="/" passHref>
          <h1 className="text-slate-400 cursor-pointer">Go Home</h1>
        </Link>
        <Link href="/auth/signin" passHref>
          <h1>
            <span className="text-green-400 cursor-pointer">Sign In</span> to
            See This Page
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default AccessDenied
