
const express = require('express')
const app = express()
const port = 3000
let pagesize=5;
const fs = require('fs');
let ArrayStudent=[];
let FileName='student.json';

fs.readFile(FileName,'utf-8',(err, data)=> {
    if (err) {
       console.log(err.message);
    }
    else 
    	{
    	ArrayStudent=data.split("\n");
    	ArrayStudent= JSON.parse(data);
        console.log(ArrayStudent);	
    	}
});

app.get("/student/:id",(req, res) =>{
//let id=req.url.split("/")[2];
let id=req.params.id;
 let resulr = ArrayStudent.find(x=>x.id==id);
console.log(ArrayStudent);
res.send(resulr);
})

app.get("/student", (req, res) =>{
    let page2=req.query.page;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

//const page=req.url.split("/")[2];
start=(page2-1)*pagesize;
end=start+ pagesize;
res.send(ArrayStudent.slice(start,end));

});
app.listen(3000);




