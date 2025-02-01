import { cn } from '@/lib/utils'
import { RadioGroupItem, RadioGroupItemProps } from '@radix-ui/react-radio-group'
import { cva } from 'class-variance-authority'

interface Props extends RadioGroupItemProps {
  variant?: 'income' | 'outcome'
}

const variants = cva(
  'flex h-[58px] rounded-md w-full items-center justify-center gap-x-2 bg-gray-700 text-gray-300 data-[state=unchecked]:hover:bg-gray-600 data-[state=checked]:text-white transition-colors',
  {
    variants: {
      variant: {
        income: 'data-[state=unchecked]:stroke-green-300 data-[state=checked]:bg-green-700',
        outcome: 'data-[state=unchecked]:stroke-red-300 data-[state=checked]:bg-red-900',
      },
    },
    defaultVariants: {
      variant: 'income',
    },
  },
)

export function NewTransactionTypeRadioButton({ variant, className, ...props }: Props) {
  return <RadioGroupItem {...props} className={cn(variants({ className, variant }))} />
}
