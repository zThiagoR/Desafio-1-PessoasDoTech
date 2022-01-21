import mongoose from "mongoose"

const ConnectToDB = async () => {
    mongoose.connect(`${process.env.MONGO_URL}`)
}

export { ConnectToDB, mongoose }