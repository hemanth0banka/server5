const path = require("path")
const service = require("../service/cartservice.js")
const getcontrol = (req,res)=>{
    let result = service.getservice()
    res.status(200).json({
        message : "List Of All Items in Cart",
        data : result
    })
}
const getidcontrol = (req,res)=>{
    let result = service.getidservice(req.params.id)
    if(result==404) res.status(404).sendFile(path.join(__dirname,"../view","cart404.html"))
    else res.status(200).send(`Item with the id is ${result}`)
}
const postcontrol = (req,res)=>{
    let result = service.postservice(req.body)
    res.status(201).json({
        message : "Item Added",
        data : result
    })
}
module.exports = {getcontrol,getidcontrol,postcontrol}