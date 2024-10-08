import { api } from '../services/api'
import type { request, Status } from '../types'

export async function getRegisters(status?: Status): Promise<request[]> {
  let url = '/registers'
  if (status) {
    url += `/${status}`
  }
  const response = await api.get(url)
  return response.data
}
