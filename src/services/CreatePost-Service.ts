// Services são responsáveis por regras de negócio e lógica de negócios (validar, verificar se o usuário está autenticado, etc).
import { createPostRepository } from "../repositories/CreatePost-Repository"

interface IPostRequest {
    title: String;
    description: String;
    body: String;
}

class CreatePostService {

    async execute({title, body, description} : IPostRequest) {

        // Caso o usuário não tenha preenchido os campos 
        // title, body e description, ou seja, se o usuário não preencher requisitos obrigatórios, retornar erro.

        if(!title && !body && !description) {
            throw new Error("Title, body and description are required")
        }

        // Retornar um objeto de post para repository salvar no banco de dados.
        const post: IPostRequest = {
            title,
            body,
            description
        } 
        
        const data = await createPostRepository.save(post)
        return data
    }
}

export const createPostService = new CreatePostService()