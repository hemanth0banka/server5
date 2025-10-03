const express = require("express")
const app = express()
const path = require("path")
const user = require("./routes/user.js")
const product = require("./routes/product.js")
const cart = require("./routes/cart.js")
const port = 1006
app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./view","welcome.html"))
})
app.use("/users",user)
app.use("/products",product)
app.use("/cart",cart)
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"./view","pagenotfound.html"))
})
app.listen(port,console.log(`listening at port https://localhost:${port}/`))