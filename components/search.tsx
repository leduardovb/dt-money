import { SearchIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Search() {
  return (
    <div className='flex gap-x-4'>
      <Input placeholder='Busque uma transação' type='search' />
      <Button variant={'outline'} className='h-[54px] w-[147px]'>
        <SearchIcon strokeWidth={2} />
        Buscar
      </Button>
    </div>
  )
}
