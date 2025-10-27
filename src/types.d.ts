export interface CreateConvidadoData {
  nome: string
  email: string
  telefone?: string
  presenca?: boolean
  bebidaAlcoolica?: boolean
}

export interface UpdateConvidadoData {
  nome?: string
  email?: string
  telefone?: string
  presenca?: boolean
  bebidaAlcoolica?: boolean
}

export interface Convidado {
  id: number
  nome: string
  email: string
  telefone: string | null
  presenca: boolean
  bebidaAlcoolica: boolean
  createdAt: Date
  updatedAt: Date
}