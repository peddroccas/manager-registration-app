import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Snippet,
} from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { getRegisters } from '../../../http/get-registers'
import type { Status } from '../../../types'

import { ChangeStatusButton } from '../../../components/change-status-button'

interface RegisterTableProps {
  status?: Status
}

export function RegistersTable({ status }: RegisterTableProps) {
  const { data, refetch } = useQuery({
    queryKey: ['registers'],
    queryFn: async () => await getRegisters(status),
  })

  if (!data) {
    return <></>
  }

  return (
    <div className="flex flex-col gap-4">
      {status === 'ACCEPTED' ? (
        <div className="flex items-center justify-end">
          <Snippet
            className="text-slate-300 overflow-hidden max-w-xs"
            classNames={{ pre: 'truncate' }}
          >
            {data.map(register => `${register.email}`).join(';')}
          </Snippet>
        </div>
      ) : (
        <></>
      )}
      <Table
        aria-label="registers"
        classNames={{
          wrapper: 'bg-slate-900',
          th: 'bg-slate-300 text-slate-950',
          base: 'rounded-xl shadow shadow-black text-slate-300',

          sortIcon: 'text-slate-950',
        }}
      >
        <TableHeader>
          <TableColumn>PRIMEIRO NOME</TableColumn>
          <TableColumn>ÚLTIMO NOME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn align="center">SIGLA</TableColumn>
          <TableColumn>ENTIDADE</TableColumn>
          <TableColumn>EMAIL DA ETIR</TableColumn>
          <TableColumn align="center">TELEFONE DA ETIR</TableColumn>
          <TableColumn align="center">STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map(register => {
            return (
              <TableRow key={register.id}>
                <TableCell>{register.firstName}</TableCell>
                <TableCell>{register.lastName}</TableCell>
                <TableCell>{register.email}</TableCell>
                <TableCell>{register.abbreviation}</TableCell>
                <TableCell>{register.body}</TableCell>
                <TableCell>{register.etirEmail}</TableCell>
                <TableCell>{register.etirPhone}</TableCell>
                <TableCell>
                  <div className="flex justify-center items-center">
                    <ChangeStatusButton
                      id={register.id}
                      status={register.status}
                      type="register"
                      refetch={() => refetch()}
                    />
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
