import { SearchIcon } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'

export function SearchForm() {
  return (
    <form className='mb-6 flex gap-x-4'>
      <Input placeholder='Busque uma transações' type='search' name='transaction' />
      <Button type='submit' variant={'outline'} className='h-[54px] w-[147px]'>
        <SearchIcon strokeWidth={2} />
        Buscar
      </Button>
    </form>
  )
}
