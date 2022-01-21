import { findPostRepository } from "../repositories/FindPost-Repository"

class FindPostService {
    async execute(id: number) {
        // verificar se o id é valido e se existe no banco de dados 
        try {
            const findPost = findPostRepository.findPost(id)
            return findPost
        } catch (error) {
            const { message } = error as Error
            throw new Error(message)
        }
    }
}

export const findPostService = new FindPostService()