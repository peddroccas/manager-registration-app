export type Status = 'NEW' | 'ACCEPTED' | 'DENIED' | 'SENT'

export interface request {
  id: string
  email: string
  body: string
  abbreviation: string
  status: Status
}
