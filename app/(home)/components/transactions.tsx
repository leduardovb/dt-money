import React from 'react'
import { Table, TableBody, TableCell, TableRow } from '../../../components/ui/table'

interface Props {
  searchValue?: string
}

export async function Transactions({}: Props) {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell width={'50%'}>Desenvolvimento de site</TableCell>
          <TableCell className='text-green-300'>R$ 12.000,00</TableCell>
          <TableCell>Venda</TableCell>
          <TableCell>13/04/2022</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Desenvolvimento de site</TableCell>
          <TableCell className='text-red-300'>- R$ 12.000,00</TableCell>
          <TableCell>Venda</TableCell>
          <TableCell>13/04/2022</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
