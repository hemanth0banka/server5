let reserror = (res,err)=>{
    let errmsg = err.message
    let status = err.status
    res.status(status).send(errmsg)
}
let suc = (res,body,status)=>{
    res.status(status).send(body)
}

module.exports = {reserror,suc}