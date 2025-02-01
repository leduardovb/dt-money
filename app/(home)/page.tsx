import { SearchForm } from '@/app/(home)/components/search-form'
import { Transactions } from '@/app/(home)/components/transactions'
import React from 'react'

interface Props {
  searchParams?: Promise<{
    transaction?: string
  }>
}

export default async function HomePage({ searchParams }: Props) {
  const searchValue = (await searchParams)?.transaction

  return (
    <React.Fragment>
      <SearchForm />
      <Transactions searchValue={searchValue} />
    </React.Fragment>
  )
}
