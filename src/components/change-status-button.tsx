import { Button } from '@nextui-org/react'
import { Check, PaperPlaneTilt, StarFour, X } from '@phosphor-icons/react'
import { useState } from 'react'
import type { Status } from '../types'
import { updateStatus } from '../http/update-status'

interface ActionButtonProps {
  id: string
  status: Status
  refetch: () => void
}

export function ChangeStatusButton({ id, status, refetch }: ActionButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  if (status === 'ACCEPTED') {
    return (
      <Button className="cursor-auto bg-inherit text-slate-300">
        <Check
          className={`text-green-500 absolute transition-all duration-300 ${
            isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          }`}
          size={24}
        />
      </Button>
    )
  }

  if (status === 'DENIED') {
    return (
      <Button className="cursor-auto bg-inherit text-slate-300">
        <X size={24} className="text-red-500" />{' '}
      </Button>
    )
  }

  if (status === 'SENT') {
    return (
      <Button className="cursor-auto bg-inherit text-slate-300">
        <PaperPlaneTilt size={24} />
      </Button>
    )
  }

  if (status === 'NEW') {
    return (
      <Button
        className=" bg-inherit text-slate-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StarFour
          className={`text-yellow-500 absolute transition-all duration-300 ${
            isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          }`}
          size={24}
        />
        <Check
          onClick={async () => {
            await updateStatus(id, 'ACCEPTED')
            refetch()
          }}
          className={`p-px text-green-500 hover:bg-slate-800 rounded transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          size={24}
        />
        <X
          onClick={async () => {
            await updateStatus(id, 'DENIED')
            refetch()
          }}
          className={`p-px text-red-500 hover:bg-slate-800 rounded transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          size={24}
        />
      </Button>
    )
  }
}
