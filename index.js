import express from 'express'
import 'dotenv/config'
import studentsRouter from './routes/students.router.js'

const app = express()
const __dirname = import.meta.dirname

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/students",studentsRouter)







//server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> { console.log("listening on port ",PORT)})

