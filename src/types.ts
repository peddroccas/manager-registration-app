export type Status = 'NEW' | 'ACCEPTED' | 'DENIED' | 'SENT'

export interface request {
  id: string
  email: string
  body: string
  abbreviation: string
  status: Status
}

export interface register {
  id: string
  status: Status
  email: string
  body: string
  abbreviation: string
  firstName: string | null
  lastName: string | null
  fullName: string | null
  etirEmail: string | null
  hasPgpKey: string | null
  etirPhone: string | null
}
