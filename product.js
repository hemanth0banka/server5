const express = require("express")
const route = express.Router()
const control = require("../control/productcontrol.js")
route.get("/",control.getcontrol)
route.get("/:id",control.getidcontrol)
route.post("/",control.postcontrol)
module.exports = route