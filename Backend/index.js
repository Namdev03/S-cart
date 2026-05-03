require('dotenv').config()
const express = require('express')
const userRoutes = require('./Routes/User.Routes')
const databaseConnection = require('./Config/Database.Config')
const cookie = require('cookie-parser')
const cors = require('cors')
//============instance===========
const server = express()
//============middelwares===========
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cookie())
server.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
//============user Routes===========
server.use('/user',userRoutes)
//===========listion the server===========
const port = process.env.PORT
server.listen(port,async()=>{
    try {
        await databaseConnection()
        console.log(`server is live on port ${port}`);
        
    } catch (error) {
        process.exit(1)
    }
})