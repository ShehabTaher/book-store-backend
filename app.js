const express = require ('express')
const mongoose = require ('mongoose')
const router = require("./routes/book-routes")
const cors = require('cors')

const app = express()

// Middlewares
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000/","https://book-store-shehab-app.onrender.com"]
}))
app.use("/books",router) // localhost:5000/books

app.use('/', (req,res,next)=>{
    res.send("this is my Book Store")
})

mongoose
    .connect("mongodb+srv://shehabtaher93:user123@book.uv0sduc.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connect to Book Store DB"))
    .then(() => {
        app.listen(5000)
    })
    .catch((err) => console.log(err))