var express = require('express')
var router = express.Router()

// ทำที่เก็บข้อมูลแบบ Key-value	(Hint: Map / Object)
// ทำระบบ CRUD
// Create	(From Key create value)
// Read	(From key return value)
// Update	(From key update value)
// Delete	(From key)
// ทำหน้าเว็บนิดนึงด้วยก็ได้ จะได้ทดสอบง่ายขึ้น (front-end / fullstack)

var obj = {}

router.get('/', function(req, res) {
    res.send("connect success.")
})

router.get('/create/:key/:val', function(req, res) {
    obj[req.params.key] = req.params.val
    res.send("create success.")
})

router.get('/read', function(req, res) {
    res.send(obj)
})

router.get('/update/:key/:val', function(req, res) {
    obj[req.params.key] = req.params.val
    res.send(obj)
})

router.get('/delete/:key', function(req, res) {
    delete obj[req.params.key]
    res.send(obj)
})


module.exports = router