const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const port =4000

// db
const db = require('./Routes/dataBase/Mongo')
const userRoute = require('./Routes/Product/user')
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})




// middleware 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


// routes // Api's calls
app.use('/api/products',userRoute)