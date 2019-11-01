var express = require('express')
var router = express.Router()

// 1. GET /static -> return “Hello World”
// 2. GET /staticJSON -> return JSON of {text:”Hello World”}
// 3. GET /echo?text=Heyyyy -> return any string in text variable, i.e., “Heyyyy”
// 4. GET /plus?a=3&b=5 -> return the sum of a + b, i.e., 8
// 5. GET /plusByJSON?jsonText={a:3,b:5} -> return the sum of a+b, parsed the json object from jsonText variable, thus, it should be answer 8
// 6. GET /plus/6/7 -> return the sum of 6+7, which is 13
// 7. GET /checkEvenNumber/3
// 8. Return the Bad input (400) response code if the input number is not even. (in this case, it is 3) thus it is return 400 response code.
// 9. Return the Success (200) response code if the input number is a even.
// 10. POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example
// 11. POST /number/1 -> [1]
// 12. POST /number/2 -> [1,2]
// 13. POST /number/5 -> [1,2,5]
// 14. DELETE /number/1, remove the number in the array
// 15. DELETE /number/1 -> [2,5]
// 16. DELETE /number/2 → [5]
// 17. PUT /number/5/10, change the number in the array
// 18. PUT /number/5/10 -> [10]
// 19. POST /countFields for counting the number of fields that submit via req.body (raw as the JSON object) for example,
// 20. POST /countFields BODY {"a":1,"b":2,"c":3} -> 3
// 21. POST /countFields BODY {"a":1,"b":2,"c":3, "d":5} -> 4

router.get('/static', function(req, res) {
    res.send("Hello World")
})

router.get('/staticJSON', function(req, res) {
    // res.send('{ text: "Hello World", firstname: "john" }')
    res.send({
        text: "Hello World"
    })
})

router.get('/echo', function(req, res) {
    res.send(req.query.text)
})

//Unsave
router.get('/plus', function(req, res) {
    res.send("" + (parseInt(req.query.a) + parseInt(req.query.b)))
})

router.get('/plusByJSON', function(req, res) {
    console.log(req.query.jsonText)
    let str = req.query.jsonText
    let array_of_split = str.split(",")
        // 
    for (let i = 0; i < array_of_split.length; i++) {
        if (i == 0) array_of_split[0] = array_of_split[0].replace("{", "")
        if (i == array_of_split.length - 1) array_of_split[array_of_split.length - 1] = array_of_split[array_of_split.length - 1].replace("}", "")

        let txt = array_of_split[i]
        let array_of_split2 = txt.split(":");
        array_of_split2[0] = "\"" + array_of_split2[0] + "\""
        array_of_split[i] = array_of_split2[0] + ":" + array_of_split2[1]
    }

    let marge = "";
    for (let j = 0; j < array_of_split.length; j++) {
        if (j < array_of_split.length - 1) marge += array_of_split[j] + ", "
        else marge += array_of_split[j]
    }
    marge = "{" + marge + "}"

    let json = JSON.parse(marge);

    res.send("" + (json.a + json.b));
    // res.send("");
})

router.get('/plus/:x/:y', function(req, res) {
    res.send("" + (parseInt(req.params.x) + parseInt(req.params.y)))
})

router.get('/checkEvenNumber/:num/', function(req, res) {

    let txt, num = parseInt(req.params.num);
    if (num % 2 == 0) {
        txt = String(num) + " is even number."
    } else {
        txt = String(num) + " is not even number."
    }

    res.send(txt)
})

//Model
var list = []
router.post('/number/:data', function(req, res) {
    list.push(req.params.data)
    res.send(list)
})

router.delete('/number/:del', function(req, res) {
    // list.push(req.params.data)
    let del = req.params.del,
        i = 0,
        new_list = [];
    for (let data of list) {
        if (data == del) continue;
        new_list[i] = data;
        i++;
    }
    list = new_list;
    res.send(list);
})

router.put('/number/:oldval/:newval', function(req, res) {
    let oldval = req.params.oldval;
    let newval = req.params.newval;
    for (let i in list) {
        if (list[i] == oldval) list[i] = newval;
    }
    res.send(list);
})

router.post('/countFields', function(req, res) {
    let body = req.body;
    console.log(body);
    res.send("" + Object.keys(body).length);
})

module.exports = router