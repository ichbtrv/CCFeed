import { getProviders, signIn, useSession } from 'next-auth/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useEffect } from 'react'
import Router from 'next/router'
import LoginCard from 'components/layout/LoginCard'

interface IProvider {
  id: string
  name: string
}

export default function SignIn({
      providers,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession()

  useEffect(() => {
    if (session) Router.push('/')
  }, [session])
  return (
    <div
      className="min-h-screen min-w-screen flex items-center justify-center flex-col md:px-64 border-2 border-sky-300rounded-lg
    "
    >
      <LoginCard>
        <div
          className="p-2 flex items-center flex-col mb-16 sh
        "
        >
          <div className="shadow-xl rounded-lg">
            <h1 className="text-6xl  my-20 px-12">
              Sign in to your <br />
              CC<span className="text-slate-300"> Feed </span>
            </h1>
          </div>
          <div className="mt-12">
            {providers
              ? Object.values(providers).map((provider: IProvider, i) => {
                  if (provider.id !== 'email')
                    return (
                      <div
                        className="my-2 flex justify-center h-min px-2 "
                        key={provider.name}
                      >
                        <button
                          className="rounded bg-slate-50 text-stone-800 shadow-lg px-8 py-4 hover:bg-slate-500 w-80"
                          onClick={() =>
                            signIn(provider.id, {
                              callbackUrl: `/profile`,
                            })
                          }
                        >
                          {provider.name}
                        </button>
                      </div>
                    )
                })
              : ''}
          </div>
        </div>
      </LoginCard>
    </div>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
