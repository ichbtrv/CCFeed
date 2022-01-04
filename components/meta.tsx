import Head from 'next/head'

const Meta = () => (
  <Head>
    <title>CCFeed</title>
    <meta charSet="utf-8" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="apple-mobile-web-app-title" content="CCFeed" />
    <meta name="application-name" content="CCFeed" />
    <meta name="description" content="CameraCaption" />
    <meta name="theme-color" content="#1d2020" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover"
    />
    <link rel="apple-touch-icon" href="/images/icon-maskable-512.png" />
    <link rel="icon" type="image/png" href="/images/favicon.png" />
    <link rel="manifest" href="/manifest.json" />
  </Head>
)

export default Meta
