import express from 'express'
import { getPostController } from '../controllers/post/getPostController.js'
import { createPostController } from '../controllers/post/createPostController.js'
import { updatePostController } from '../controllers/post/updatePostController.js'
import { deletePostController } from '../controllers/post/deletePostController.js'
import { patchPostController } from '../controllers/post/patchPostController.js'

const router = express.Router()

router.get('/', getPostController)
router.post('/', createPostController)
router.put('/', updatePostController)
router.patch('/', patchPostController)
router.delete('/', deletePostController)

export default router