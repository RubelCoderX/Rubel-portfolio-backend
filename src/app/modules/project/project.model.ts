import { model, Schema } from 'mongoose'
import { TProject } from './project.interface'

const ProjectSchema = new Schema<TProject>({
  title: { type: String, required: true },
  name: { type: String, required: true },
  projectDescription: { type: String, required: true },
  additionalDescription: { type: String },
  projectUrl: { type: [String], required: true },
  projectLanguages: { type: [String], required: true },
  projectLiveUrl: { type: String },
})

export const ProjectModel = model<TProject>('Project', ProjectSchema)
