import express from 'express'
import { SkillController } from './skills.controller'

const router = express.Router()

router.post('/create-skill', SkillController.createSkillFromDB)
router.get('/', SkillController.getAllSkillsFromDB)

router.put('/:id', SkillController.updateSkillFromDB)
router.delete('/:id', SkillController.deleteSkillFromDB)

export const SkillRoute = router
