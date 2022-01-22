import { PostsSchema } from "../models/posts"

class DeletePostRepository {
    async delete(id: number) {
        const post = await PostsSchema.findOne({ id: id })

        if (!post) {
            throw new Error('Post not found')
        }
        
        await PostsSchema.deleteOne({ id: id })
        
        return post
    }
}

export const deletePostRepository = new DeletePostRepository()