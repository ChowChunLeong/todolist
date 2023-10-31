import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

let new_items_list = [];
app.get("/", (req, res)=>{
    let today = new Date();
    var options = { weekday: 'long', year: 'numeric',
     month: 'long', day: 'numeric' };
//    console.log(today.toLocaleDateString("en-US",options));
    var today_ = today.toLocaleDateString("en-US",options);
    res.render("list.ejs",{day:today_, items : new_items_list} )
})

app.post("/", (req, res)=>{
    let new_ = req.body.newitem;
    new_items_list.push(new_);
    res.redirect("/");


})



app.listen(port, ()=>{
    console.log(`Running at ${port}.`)

})