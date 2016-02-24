var express = require('express');
var router = express.Router();
var os = require("os");
var Format = require('format-io');

/* GET home page. */
router.get('/', function (req, res, next) {
    var cpu = os.cpus()[0]
    var memory  = Format.size(os.totalmem())
    res.render('index', {
            title: 'Express',
            ip: req.session.ip,
            cpu: cpu,
            memory : memory
        }
    );
});
router.get("/files", function (req, res, next) {
    res.send("1121")
})
module.exports = router;
