import { Request, Response } from "express";
import { editPostService } from "../services/EditPost-Service";

class EditPostController {
    async execute(req: Request, res: Response) {
        const { Id } = req.params;
        const { title, description } = req.body;
        const id = Number(Id);

        try {
            const post = await editPostService.execute({ id, title, description });
            return res.status(200).send({ 
                message: "Post edited with success",
            });
        } catch (err) {
            const { message } = err as Error;
            return res.status(400).json({ error: message });
        }
    }
}

export const editPostController = new EditPostController();