import { Request, Response } from "express";
import { findPostService } from "../services/FindPost-Service";

class FindPostController {
    async execute(req: Request, res: Response) {
        // receber requisição em Number
        const { id } = req.params;

        try {
            const post = await findPostService.execute(Number(id));
            res.status(200).send(post)
        } catch (err) {
            const { message } = err as Error;
            return res.status(400).json({ error: message });
        }
    }
}

export const findPostController = new FindPostController()