import express from 'express'
import { projectController } from './project.controller'

const router = express.Router()

router.post('/create-project', projectController.createProjectFromDB)
router.get('/', projectController.getAllProjectsFromDB)
router.get('/:id', projectController.getSingleProjectFromDB)
router.put('/:id', projectController.updateProjectFromDB)
router.delete('/:id', projectController.deleteProjectFromDB)

export const ProjectRoute = router
