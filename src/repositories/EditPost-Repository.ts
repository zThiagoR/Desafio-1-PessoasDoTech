import { PostsSchema } from "../models/posts";

interface IPostRequest {
    id: number;
    title: string;
    description: string;
}

class EditPostRepository {
    async edit({ id, title, description }: IPostRequest) {

        const post = await PostsSchema.findOne({ id })
        if (post.title === title || post.description === description) {
            throw new Error("Title or description is already in use")
        }

        try {
            const data = await PostsSchema.findOneAndUpdate({ id: id }, { 
                title, 
                description 
            })
            return data;
        } catch (error) {
            const { message } = error as Error
            throw new Error(message)
        }
    }
}

export const editPostRepository = new EditPostRepository();