import Router from 'koa-router'
import getHealth from './health/health'

const router = new Router()

router.get('/health', getHealth)

router.get('/cars', cars.getCars)
router.put('/car', cars.addCar)
router.post('/n', cars.addIncident)

export default router
