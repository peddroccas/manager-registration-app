import { api } from '../services/api'
import type { request, Status } from '../types'

export async function getRequests(status?: Status): Promise<request[]> {
  let url = '/requests'
  if (status) {
    url += `/${status}`
  }
  const response = await api.get(url)
  return response.data
}
