import React from 'react'
import { LayoutProps } from '../Layout'

const PageContainer = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {children}
    </div>
  )
}

export default PageContainer
