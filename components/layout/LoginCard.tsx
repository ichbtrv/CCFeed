import React from 'react'
import { LayoutProps } from './Layout'
const LoginCard = ({ children }: LayoutProps): JSX.Element => {
  return <div className=" shadow-xl">{children}</div>
}

export default LoginCard
