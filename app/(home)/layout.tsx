import { Header } from '@/components/header'
import React from 'react'

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='relative px-40 py-10'>
      <div className='absolute left-0 top-0 z-[-1] h-[212px] w-full bg-gray-900' />
      <Header />
      {children}
    </div>
  )
}
