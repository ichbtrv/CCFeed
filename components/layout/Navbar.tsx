import { useSession } from 'next-auth/react'
import Link from 'next/link'
import LoginGreen from './navbaricons/LoginGreen'
import LogoutRed from './navbaricons/LogoutRed'

export default function Navbar() {
  const { data: session } = useSession()
  return (
    <div className="min-w-screen bg-white text-gray-700 shadow items-center h-full pt-4">
      <ul>
        <div className="flex w-screen justify-between">
          <div className="flex flex-wrap">
            <li className="hover:bg-gray-100">
              <Link href="/" passHref>
                <a
                  href=""
                  className="h-16 px-4 flex  justify-center items-center w-full
					focus:text-orange-500"
                >
                  <svg
                    width="48px"
                    height="48px"
                    viewBox="0 0 25 48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-black-500  mt-4"
                    fill="fill-orange-500"
                  >
                    <g id="cc">
                      <path d="M14,23H6a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3h8a1,1,0,0,1,0,2H6a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h8a1,1,0,0,1,0,2Z" />
                      <path d="M28,23H20a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3h8a1,1,0,0,1,0,2H20a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h8a1,1,0,0,1,0,2Z" />
                    </g>
                  </svg>
                </a>
              </Link>
            </li>
            {session ? (
              <li className="my-4 hover:bg-gray-100 ">
                <Link href="/profile" passHref>
                  <div className="hover:cursor-pointer flex items-center">
                    {session.user?.name}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={session.user?.image}
                      alt="what"
                      className="rounded-full mx-5"
                      height="30px"
                      width="30px"
                    />
                  </div>
                </Link>
              </li>
            ) : (
              ''
            )}
          </div>
          <div className="flex flex-wrap">
            <li className="hover:bg-gray-100">
              <Link href={'/upload'} passHref>
                <a
                  href="."
                  className="h-16 px-4 flex justify-center items-center w-full
					focus:text-orange-500"
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    x="0px"
                    y="0px"
                    viewBox="0 0 455 455"
                  >
                    <polygon
                      points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5
	455,242.5 "
                    />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </a>
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link href="/settings" passHref>
                <a
                  className="h-16 px-4  flex justify-center items-center w-full
					focus:text-orange-500"
                >
                  <svg
                    className="h-5 w-5"
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
                    <circle cx="12" cy="12" r="3"></circle>
                    <path
                      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
							0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
							0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
							2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
							0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
							0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
							0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
							0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
							1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
							1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
							0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
							1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
							2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
							0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
							1.65 0 0 0-1.51 1z"
                    ></path>
                  </svg>
                </a>
              </Link>
            </li>
            <li> {session ? <LogoutRed /> : <LoginGreen />}</li>
          </div>
        </div>
      </ul>
    </div>
  )
}
