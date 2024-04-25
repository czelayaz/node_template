import Router from 'koa-router'
import getHealth from './health/health'
import { getIncidents } from '../car'

const router = new Router()

router.get('/health', getHealth)

router.get('/cars', cars.getCars)
router.put('/car', cars.addCar)
router.post('/n', incidents.addIncident)

export default router
