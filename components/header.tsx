import { LogoIcon } from './icons/logo.icon'
import { NewTransactionButton } from './new-transaction-button'

export function Header() {
  return (
    <header>
      <div className='flex justify-between'>
        <h1 className='flex items-center gap-x-4 text-2xl font-bold'>
          <LogoIcon />
          DT Money
        </h1>
        <NewTransactionButton />
      </div>
    </header>
  )
}
