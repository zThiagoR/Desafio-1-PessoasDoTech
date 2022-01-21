import { model, Schema } from "mongoose";

const PostsModel = new Schema({
    id: {
        type: Number, 
        required: true
    },
    title: {
        type: String,
    },
    description: {
        type: String
    },
    body: { 
        type: String
    },
    created_at: {
        type: String
    },
    updated_at: {
        type: String
    }
})

const PostsSchema = model('Posts', PostsModel)

// criar uma função que conta o número de documentos no banco de dados e retorna o número de documentos.
const countPosts = async () => {
    const count = await PostsSchema.countDocuments();
    return count;
}

export { PostsSchema, countPosts }


