import { deletePostRepository } from "../repositories/DeletePost-Repository"

class DeletePostService {
    async execute(id: number) {
        // verificar se o id é valido e se existe no banco de dados 
        try {
            const findPost = deletePostRepository.delete(id)
            return findPost
        } catch (error) {
            const { message } = error as Error
            throw new Error(message)
        }
    }
}

export const deletePostService = new DeletePostService()