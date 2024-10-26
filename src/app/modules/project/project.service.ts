// services/project.service.ts

import { TProject } from './project.interface'
import { ProjectModel } from './project.model'

const createProject = async (payload: TProject) => {
  const result = await ProjectModel.create(payload)

  return result
}

const getSingleProject = async (id: string) => {
  const result = await ProjectModel.findById(id)
  return result
}

const getAllProjects = async () => {
  const result = await ProjectModel.find()
  return result
}

const updateProject = async (id: string, payload: Partial<TProject>) => {
  const result = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return result
}

const deleteProject = async (id: string) => {
  const result = await ProjectModel.findByIdAndDelete(id)
  return result
}

export const projectService = {
  createProject,
  getSingleProject,
  getAllProjects,
  updateProject,
  deleteProject,
}
