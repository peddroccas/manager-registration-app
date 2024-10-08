import { api } from '../services/api'
import type { request, Status } from '../types'

export async function updateStatus(
  id: string,
  type: 'register' | 'request',
  status?: Status
): Promise<request[]> {
  const response = await api.patch(`/${type}s`, { id, status })
  return response.data
}
