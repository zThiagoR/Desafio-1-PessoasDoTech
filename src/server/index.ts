import Express from 'express'
import 'dotenv/config'
import { ConnectToDB } from '../database/mongo'
import { PostRouter } from '../routes/posts.routes'

(async () => {
    try {
       await ConnectToDB()
       console.log("[API] MongoDB conectado!")
    } catch(e) {
        console.log("[API] MongoDB com problema!" + e)
    }
})();

const app = Express()
const port = 3000

app.use(Express.json())
app.use(PostRouter)

app.listen(port, () => console.log(`Server is running for https://localhost:${port}`))

