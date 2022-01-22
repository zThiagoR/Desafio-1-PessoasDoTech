import { IPost, IPostRequest } from "../interfaces/post";
import { countPosts, PostsSchema } from "../models/posts";


class CreatePostRepository {
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