// controllers/project.controller.ts

import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { projectService } from './project.service'
import { Request, Response } from 'express'

const createProjectFromDB = catchAsync(async (req: Request, res: Response) => {
  const projectPayload = req.body
  const result = await projectService.createProject(projectPayload)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project created successfully',
    data: result,
  })
})

const getSingleProjectFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const projectId = req.params.id
    const result = await projectService.getSingleProject(projectId)

    if (!result) {
      return res.status(404).json({ message: 'Project not found' })
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Project fetched successfully',
      data: result,
    })
  },
)

const getAllProjectsFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.getAllProjects()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Projects fetched successfully',
    data: result,
  })
})

const updateProjectFromDB = catchAsync(async (req: Request, res: Response) => {
  const projectId = req.params.id
  const updatePayload = req.body
  const result = await projectService.updateProject(projectId, updatePayload)

  if (!result) {
    return res.status(404).json({ message: 'Project not found' })
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  })
})

const deleteProjectFromDB = catchAsync(async (req: Request, res: Response) => {
  const projectId = req.params.id
  const result = await projectService.deleteProject(projectId)

  if (!result) {
    return res.status(404).json({ message: 'Project not found' })
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  })
})

export const projectController = {
  createProjectFromDB,
  getSingleProjectFromDB,
  getAllProjectsFromDB,
  updateProjectFromDB,
  deleteProjectFromDB,
}
