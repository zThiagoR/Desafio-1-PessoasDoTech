import { IPost } from "../interfaces/post";
import { countPosts, PostsSchema } from "../models/posts";

interface IPostRequest {
    title: String;
    description: String;
    body: String;
}

class CreatePostRepository {

    // O repository é responsável por salvar no banco de dados.
    // O repository não deve ter regras de negócio, apenas salvar no banco de dados.

    async save(post: IPostRequest) {
        
        const { title, body, description } = post

        const PostSave: IPost = {
            id: await countPosts() + 1,
            title,
            body,
            description,
            created_at: new Date().toLocaleDateString('pt-BR'),
            updated_at: new Date().toLocaleDateString('pt-BR')
        }

        const data = await PostsSchema.create(PostSave);
        return data;
    }
}

export const createPostRepository = new CreatePostRepository()