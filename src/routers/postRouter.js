import express from 'express'
import { getPostController } from '../controllers/post/getPostController.js'
import { createPostController } from '../controllers/post/createPostController.js'


const router = express.Router()

router.get('/', getPostController)
router.post('/', createPostController)

router.put('/', (req, res) => {
  res.send('Exemplo de PUT na rota /post no Router')
})

router.patch('/', (req, res) => {
  res.send('Exemplo de PATCH na rota /post no Router')
})

router.delete('/', (req, res) => {
  res.send('Exemplo de DELETE na rota /post no Router')
})

export default router