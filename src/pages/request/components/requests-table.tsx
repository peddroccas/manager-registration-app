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
import { getRequests } from '../../../http/get-requests'
import type { Status } from '../../../types'

import { ChangeStatusButton } from '../../../components/change-status-button'

interface RequestTableProps {
  status?: Status
}

export function RequestsTable({ status }: RequestTableProps) {
  const { data, refetch } = useQuery({
    queryKey: ['requests'],
    queryFn: async () => await getRequests(status),
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
            {data.map(request => `${request.email}`).join(';')}
          </Snippet>
        </div>
      ) : (
        <></>
      )}
      <Table
        aria-label="requests"
        classNames={{
          wrapper: 'bg-slate-900',
          th: 'bg-slate-300 text-slate-950',
          base: 'rounded-xl shadow shadow-black text-slate-300',

          sortIcon: 'text-slate-950',
        }}
      >
        <TableHeader>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>SIGLA</TableColumn>
          <TableColumn>ENTIDADE</TableColumn>
          <TableColumn align="center">STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map(request => {
            return (
              <TableRow key={request.id}>
                <TableCell>{request.email}</TableCell>
                <TableCell>{request.abbreviation}</TableCell>
                <TableCell>{request.body}</TableCell>
                <TableCell>
                  <div className="flex justify-center items-center">
                    <ChangeStatusButton
                      id={request.id}
                      status={request.status}
                      type="request"
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
