import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { SkillServices } from './skills.service'

// Create a skill
const createSkillFromDB = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkill(req.body)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Skill created successfully',
    data: result,
  })
})
const getAllSkillsFromDB = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkills()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skills retrieved successfully',
    data: result,
  })
})

// Update a skill
const updateSkillFromDB = catchAsync(async (req, res) => {
  const { id } = req.params // Assume the skill ID is passed in params
  const result = await SkillServices.updateSkill(id, req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  })
})

// Delete a skill
const deleteSkillFromDB = catchAsync(async (req, res) => {
  const { id } = req.params // Assume the skill ID is passed in params
  const result = await SkillServices.deleteSkill(id)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  })
})

export const SkillController = {
  createSkillFromDB,
  updateSkillFromDB,
  deleteSkillFromDB,
  getAllSkillsFromDB,
}
