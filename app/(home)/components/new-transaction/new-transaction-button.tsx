import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { NewTransactionContainer } from '../../containers/new-transaction.container'

export function NewTransactionButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Nova transação</Button>
      </DialogTrigger>
      <DialogContent className='min-w-[525px]'>
        <DialogHeader>
          <DialogTitle>Nova transação</DialogTitle>
        </DialogHeader>
        <NewTransactionContainer />
      </DialogContent>
    </Dialog>
  )
}
