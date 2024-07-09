import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config()

const app = express()
app.use(cors())


app.get('/', (req, res) => {
    return res.status(200).json({message: 'Server is successfully responding'})
})

app.listen(process.env.PORT, () => {
    console.log('Server is listening on PORT', process.env.PORT)
})