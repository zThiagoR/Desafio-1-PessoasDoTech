import { PostsSchema } from "../models/posts"
import { editPostRepository } from "../repositories/EditPost-Repository"
import { findPostRepository } from "../repositories/FindPost-Repository"

interface IPostRequest {
    id: Number;
    title: String;
    description: String;
}

class EditPostService {
    async execute({ id, title, description }: IPostRequest) {
        // se não tiver title, e tiver description, atualizar apenas a description do post 
        // se não tiver description, e tiver title, atualizar apenas o title do post
        // se tiver title e description, atualizar tudo os campos title e description do post
        // se não tiver title e description, retorna o erro.
        
        if (!title && !description) {
            throw new Error("Title and description are required")
        }
        
        try {
            const data = editPostRepository.edit({ id , title, description})
            return data
        } catch (error) {
            const { message } = error as Error
            throw new Error(message)
        }
    }
}

export const editPostService = new EditPostService()