import { TSkills } from './skills.interface'
import { SkillsModel } from './skills.model'

// Create a new skill
const createSkill = async (payload: TSkills) => {
  const result = await SkillsModel.create(payload)
  return result
}

// Get all skills
const getAllSkills = async () => {
  const result = await SkillsModel.find()
  return result
}

// Update a skill by ID
const updateSkill = async (id: string, payload: Partial<TSkills>) => {
  const result = await SkillsModel.findByIdAndUpdate(id, payload, { new: true })
  return result
}

// Delete a skill by ID
const deleteSkill = async (id: string) => {
  const result = await SkillsModel.findByIdAndDelete(id)
  return result
}

export const SkillServices = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
}
