import { LogoIcon } from './icons/logo.icon'

export function Header({ children }: React.PropsWithChildren) {
  return (
    <header>
      <div className='flex justify-between'>
        <h1 className='flex items-center gap-x-4 text-2xl font-bold'>
          <LogoIcon />
          DT Money
        </h1>
        {children}
      </div>
    </header>
  )
}
