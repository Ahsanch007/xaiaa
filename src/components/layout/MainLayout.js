import React from 'react'
import { Header } from './Header'

export const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        <div className="pt-[72px]">
            {children}
        </div>
    </div>
  )
}
