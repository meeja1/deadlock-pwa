import type { IBuildSection } from '../section/types'

export interface IBuild {
  id: string
  name: string
  sections: IBuildSection[]
  isEdit: boolean
}
