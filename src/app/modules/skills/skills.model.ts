import { model, Schema } from 'mongoose'
import { TSkills } from './skills.interface'

const skillSchema = new Schema<TSkills>({
  name: { type: String, required: true },
  skillImg: { type: String, required: true },
  skillLanguage: { type: [String], required: true },
})

export const SkillsModel = model<TSkills>('skills', skillSchema)
