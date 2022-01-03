import { signOut } from 'next-auth/react'
import React from 'react'

const LogoutRed = () => {
  return (
    <div className="mt-auto flex flex-none px-4 items-center">
      <button
        className="h-16 w-10 mx-auto flex justify-center items-center
            w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
        onClick={() => signOut()}
      >
        <svg
          className="h-5 w-5 text-red-700"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </button>
    </div>
  )
}

export default LogoutRed
