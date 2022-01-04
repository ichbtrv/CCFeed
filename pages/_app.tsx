import Layout from 'components/layout/Layout'
import Meta from 'components/meta'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Meta />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
