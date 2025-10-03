let data = require("../data/product.json")
let getservice = ()=>{
    return data
}
let getidservice= (id)=>{
    for(let x of data)
    {
        if(id == x.id)
        {
            return x.name
        }
    }
    return 404
}
let postservice = (obj)=>{
    obj.id = data.length +1
    data.push(obj)
    return obj
}
module.exports = {getservice,getidservice,postservice}