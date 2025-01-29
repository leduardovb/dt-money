import { CurrencyIcon } from './icons/currency.icon'
import { DownArrowIcon } from './icons/down-arrow.icon'
import { UpArrowIcon } from './icons/up-arrow.icon'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function Summary() {
  return (
    <div className='flex gap-x-8 overflow-auto'>
      <Card className='w-[352px] flex-shrink-0 space-y-3 py-6 pl-8 pr-6'>
        <CardHeader className='flex-row items-center justify-between p-0'>
          <CardTitle className='text-base font-normal text-gray-300'>Entradas</CardTitle>
          <UpArrowIcon />
        </CardHeader>
        <CardContent className='p-0 text-3xl font-bold'>R$ 17.400,00</CardContent>
      </Card>

      <Card className='w-[352px] flex-shrink-0 space-y-3 py-6 pl-8 pr-6'>
        <CardHeader className='flex flex-row items-center justify-between p-0'>
          <CardTitle className='text-base font-normal text-gray-300'>Saídas</CardTitle>
          <DownArrowIcon />
        </CardHeader>
        <CardContent className='p-0 text-3xl font-bold'>R$ 1.259,00</CardContent>
      </Card>

      <Card className='w-[352px] flex-shrink-0 space-y-3 bg-green-700 py-6 pl-8 pr-6'>
        <CardHeader className='flex flex-row items-center justify-between p-0'>
          <CardTitle className='text-base font-normal text-gray-300'>Total</CardTitle>
          <CurrencyIcon />
        </CardHeader>
        <CardContent className='p-0 text-3xl font-bold'>R$ 16.141,00</CardContent>
      </Card>
    </div>
  )
}
