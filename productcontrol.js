const path = require("path")
const service = require("../service/productservice.js")
const handle = require("../util.js")
const getcontrol = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"../view","productget.html"))
}
const getidcontrol = (req,res)=>{
    try{
        let result = service.getidservice(req.params.id)
        if(result==404)
        {
            let error = new Error(`Product not found`)
            error.status = 404
            throw error
        }
        handle.suc(res,`Product with the id is ${result}`,200)
    }catch(e){
        handle.reserror(res,e)
    }
}
const postcontrol = (req,res)=>{
    let result = service.postservice(req.body)
    res.status(201).json({
        message : "Product Added",
        data : result
    })
}
module.exports = {getcontrol,getidcontrol,postcontrol}