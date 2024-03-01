import ContactComponent from '@/components/Contact/ContactComponent'
import { MainLayout } from '@/components/layout/MainLayout'
import React from 'react'

const Page = () => {
  return (
    <div>
      <MainLayout>

     <ContactComponent /> 
      </MainLayout>
    </div>
  )
}

export default Page