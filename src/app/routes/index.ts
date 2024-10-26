import { Router } from 'express'
import { ProjectRoute } from '../modules/project/project.route'
import { SkillRoute } from '../modules/skills/skills.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/projects',
    route: ProjectRoute,
  },
  {
    path: '/skills',
    route: SkillRoute,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
