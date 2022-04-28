import express from 'express'
import {Category} from '../models/category'
import { fetchAll } from '../controllers/factory'

const router = express.Router()

router.route('/').get(fetchAll(Category))
// router.route('/').post(createDoc(Model))
// router.route('/:id').delete(deleteDoc(Model))
// router.route('/:id').patch(updateDoc(Model))

export default router
