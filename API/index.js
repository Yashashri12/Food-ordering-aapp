var express=require("express");
const getData=require("./getData");
var cors = require('cors');

var app=express();
app.use(cors());

app.get("/",async function(req,res){
    var search = req.query.q ? req.query.q : '';
    console.log(req.query.q);
    var data = await getData(search);
    console.log(data);

    res.send(data);
});
app.listen(8000);
console.log('Server running on PORT 8000');