'use client'

import { Form } from '@/components/form'
import { useForm } from 'react-hook-form'
import { NewTransactionForm } from '../components/new-transaction/new-transaction-form'
import { NewTransactionSchema, NewTransactionSchemaInput } from '../schemas/transaction.schema'
import { zodResolver } from '@hookform/resolvers/zod'

export function NewTransactionContainer() {
  const form = useForm<NewTransactionSchemaInput, unknown, NewTransactionSchema>({
    resolver: zodResolver(NewTransactionSchema),
    defaultValues: {
      description: '',
      price: '',
      category: '',
      type: 'income',
    },
  })

  const onSubmit = (data: NewTransactionSchema) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <NewTransactionForm onSubmit={form.handleSubmit(onSubmit)} />
    </Form>
  )
}
