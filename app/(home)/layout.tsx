import { Header } from '@/components/header'
import { Search } from '@/components/search'
import { Summary } from '@/components/summary'
import React from 'react'

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='relative py-10'>
      <div className='absolute left-0 top-0 z-[-1] h-[212px] w-full bg-gray-900' />
      <div className='mx-auto max-w-[1120px]'>
        <div className='mb-16 flex flex-col gap-y-10'>
          <Header />
          <Summary />
        </div>

        <Search />
      </div>
      {children}
    </div>
  )
}
