'use client'

import { FormButton, FormControl, FormField, FormItem, FormMessage } from '@/components/form'
import { DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { RadioGroup } from '@/components/ui/radio-group'
import { HTMLAttributes } from 'react'
import { NewTransactionTypeRadioButton } from './new-transaction-type-radio-button'
import { CircleArrowDown, CircleArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Control } from 'react-hook-form'
import { NewTransactionSchemaInput } from '../../schemas/transaction.schema'

interface Props extends HTMLAttributes<HTMLFormElement> {
  control?: Control<NewTransactionSchemaInput>
}

export function NewTransactionForm({ control, ...props }: Props) {
  return (
    <form {...props}>
      <div className='grid w-full grid-cols-12 gap-4'>
        <FormField
          control={control}
          name='description'
          render={({ field }) => (
            <FormItem className='col-span-12'>
              <FormControl>
                <Input placeholder='Descrição' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='price'
          control={control}
          render={({ field }) => (
            <FormItem className='col-span-12'>
              <FormControl>
                <Input placeholder='Preço' type='number' min={1} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='category'
          control={control}
          render={({ field }) => (
            <FormItem className='col-span-12'>
              <FormControl>
                <Input placeholder='Categoria' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        name='type'
        control={control}
        render={({ field }) => (
          <FormItem className='col-span-12 mt-6'>
            <FormControl>
              <RadioGroup {...field} className='grid-flow-col gap-4' onValueChange={field.onChange}>
                <NewTransactionTypeRadioButton variant='income' value='income'>
                  <CircleArrowUp className={cn(field.value !== 'income' && 'text-green-300')} />
                  Entrada
                </NewTransactionTypeRadioButton>
                <NewTransactionTypeRadioButton variant='outcome' value='outcome'>
                  <CircleArrowDown className={cn(field.value !== 'outcome' && 'text-red-300')} />
                  Saída
                </NewTransactionTypeRadioButton>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <DialogFooter className='col-span-12'>
        <FormButton type='submit'>Cadastrar</FormButton>
      </DialogFooter>
    </form>
  )
}
