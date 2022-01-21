// Controllers são responsáveis por receber as requisições e passar para os services.

import { Request, Response } from "express"
import { createPostService } from "../services/CreatePost-Service"

interface IPostRequest {
    title: String;
    description: String;
    body: String;
}

class CreatePostController {

    async execute(req: Request, res: Response) {
        const { title, description, body }: IPostRequest = req.body

         try {
                const post = await createPostService.execute({title, description, body })
                res.send(post)
            } catch (error) {
                const { message } = error as Error
                res.status(400).send({ error: message })
            }
    }
}

export const createPostController = new CreatePostController()

