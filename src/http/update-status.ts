import { api } from '../services/api'
import type { request, Status } from '../types'

export async function updateStatus(
  id: string,
  status?: Status
): Promise<request[]> {
  const response = await api.patch('/requests', { id, status })
  return response.data
}
