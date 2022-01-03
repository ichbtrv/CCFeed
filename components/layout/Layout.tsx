import { ReactNode } from 'react'

import Navbar from './Navbar'

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-screen overflow-clip">
      <div>
        <Navbar />
      </div>
      <div className="py-16">{children}</div>
    </div>
  )
}

export default Layout
