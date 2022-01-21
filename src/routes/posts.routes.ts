import { Router } from 'express'

import { createPostController } from '../controllers/CreatePost-Controller'
import { editPostController } from '../controllers/EditPost-Controller'
import { findPostController } from '../controllers/FindPost-Controller'

const PostRouter = Router()

PostRouter.post('/posts/create', createPostController.execute)
PostRouter.get('/posts/:id', findPostController.execute)
PostRouter.put('/posts/:Id', editPostController.execute)

export { PostRouter }

