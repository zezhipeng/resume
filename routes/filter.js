/**
 * Created by tf on 2016/2/22.
 */
var express =  require("express")

var router = express.Router()

router.get("*",function(req,res,next){
    req.session.ip = req.ip.slice(7)
    next()
})


module.exports = router