import express from 'express'
import { validationResult } from 'express-validator'
import cors from 'cors'
import {
  getAllPosts,
  getOnePost,
  createPost,
  editOnePost,
  deletePost,
// eslint-disable-next-line import/extensions
} from './db.js'

import {
  generateToken, 
  validateToken,
} from './jwt.js'

const app = express()
const validateRequest = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: 'No mandaste los campos correctos' })
  }
  return next()
}

app.use(express.json())
app.use(cors())

app.get('/posts', async (req, res) => {
  try {
    const posts = await getAllPosts()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
app.get('/posts/:postId', async (req, res) => {
  try {
    const { postId } = req.params
    const post = await getOnePost(postId)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

const PORT = 22982
app.listen(PORT, () => {
  console.log(`Server listening at http://127.0.0.1:${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Hello from API BLOG')
})
app.use(validateRequest)
app.post('/posts', async (req, res) => {
  try {
    const {
      Pearson,
      Fewdescription,
      History,
      Crucialevents,
      Curiosities,
      AlternativeText,
      AlternativeDescription,
      Textreferences,
      images,
    } = req.body
    const result = await createPost(
      Pearson,
      Fewdescription,
      History,
      Crucialevents,
      Curiosities,
      AlternativeText,
      AlternativeDescription,
      Textreferences,
      images,
    )
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

app.put('/posts/:postId', async (req, res) => {
  try {
    const { postId } = req.params
    const {
      columna,
      valor,
    } = req.body
    const result = await editOnePost(
      postId,
      columna,
      valor,
    )
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor.' })
  }
})

app.delete('/posts/:postId', async (req, res) => {
  try {
    const { postId } = req.params
    const post = await deletePost(postId)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor.' })
  }
})
app.use((req, res) => {
  res.status(501).json({ error: 'Método no implementado' })
})