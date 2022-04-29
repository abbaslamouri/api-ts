import { Router } from 'express'
import { Category } from '../models/category'
import { fetchAll, createDoc } from '../controllers/factory'

const router = Router()

router.route('/').get(fetchAll(Category))
router.route('/').post(createDoc(Category))
// router.route('/:id').delete(deleteDoc(Model))
// router.route('/:id').patch(updateDoc(Model))

export default router
