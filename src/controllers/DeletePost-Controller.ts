import { Request, Response } from "express";
import { deletePostService } from "../services/DeletePost-Service";

class DeletePostController {
    async execute(req: Request, res: Response) {
        // receber requisição em Number
        const { id } = req.params;

        try {
            const post = await deletePostService.execute(Number(id));
            res.status(200).send({
                message: "Post deleted",
            })
        } catch (err) {
            const { message } = err as Error;
            return res.status(400).json({ error: message });
        }
    }
}

export const deletePostController = new DeletePostController()