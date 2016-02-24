/**
 * Created by tf on 2016/2/22.
 */
var io = require("socket.io")()
var os = require("os");
var Format = require('format-io');

io.on("connection",function(socket){
    console.log("a user connected");
    socket.on("memory",function(){
        var totalmem  = os.totalmem()
        var freeman = os.freemem()
        var memory = 100-Math.round(freeman/totalmem*100)
        io.emit("memory",memory)
    })
})


module.exports = io