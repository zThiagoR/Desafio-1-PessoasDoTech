import { PostsSchema } from "../models/posts"

class FindPostRepository {
    async findPost(id: Number) {
        const post = await PostsSchema.findOne({ id: id })

        if (!post) {
            throw new Error('Post not found')
        }
        
        return post
    }
}

export const findPostRepository = new FindPostRepository()