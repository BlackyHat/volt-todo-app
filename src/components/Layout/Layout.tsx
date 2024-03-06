import React from 'react'

import { Header } from '../Header'

import { LayoutProps } from './types'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
