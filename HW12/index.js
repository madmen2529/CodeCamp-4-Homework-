const express = require('express')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tigersut',
    database: 'boatrental',
})

db.connect()

app.get('/boats', (req, res) => {
    let query = "select * from boats"

    db.query(query, (err, rs) => {
        if (err) console.log(err);
        res.json(rs)
    })
})

app.get('/addboats', (req, res) => {
    let query = `insert into boats(bid, bname, color) values ("${req.query.bid}"
        ,"${req.query.bname}","${req.query.color}")`

    db.query(query, (err, rs) => {
        if (err) console.log(err);
        res.send(rs)
    })
})

app.get('/deleteboatsbyid', (req, res) => {
    let query = `delete from boats where bid = ${req.query.bid}`

    db.query(query, (err, rs) => {
        if (err) console.log(err);
        res.send(`delete boat id :` + req.query.bid)
    })
})

app.get('/updateboatsbyid', (req, res) => {
    let query = `update boats set 'bid' = '${req.query.bid}', 'bname' = '${req.query.bname}', 'color'='${req.query.color}' where 'bid' = ${req.query.bid}`

    db.query(query, (err, rs) => {
        if (err) console.log(err);
        res.send(`update boat id :` + req.query.bid)
    })
})


app.get('/sailors', (req, res) => {
    let query = "select * from sailors"

    db.query(query, (err, rs) => {
        if (err) console.log(err);
        res.json(rs)
    })
})

app.get('/addsailors', (req, res) => {
    let query = `insert into sailors(sid, sname, rating, age) values ("${req.query.sid}"
        ,"${req.query.sname}","${req.query.rating}","${req.query.age}")`

    console.log(query);


    db.query(query, (err, rs) => {
        if (err) console.log(err);
        res.send(rs)
    })
})

app.get('/deletesailorsbyid', (req, res) => {
    let query = `delete from sailors where sid = ${req.query.sid}`

    db.query(query, (err, rs) => {
        if (err) console.log(err);
        res.send(`delete sailors id :` + req.query.sid)
    })
})

app.get('/updatesailorsbyid', (req, res) => {
    let query = `update sailors set sid = '${req.query.sid}', sname = '${req.query.sname}', rating='${req.query.rating}', age='${req.query.age}' where sid = '${req.query.sid}'`

    db.query(query, (err, rs) => {
        if (err) console.log(err);
        // res.send(`update sailors id :` + req.query.sid)
        res.send(rs)
    })
})

app.listen(3001, () => {
    console.log('server is running.')
})