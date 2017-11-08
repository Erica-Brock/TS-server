import * as E from "express";
import * as bp from "body-parser";
import * as fs from "fs"
import * as path from "path";
import * as _ from "lodash";


//make a path that leads to all of my messages which is the collection path
const app= E();
const dataPath=path.join(__dirname, 'data.json');
const api="/api";


app
.disable('x-powered-by')
.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
.use(bp.json())
.use(bp.urlencoded({extended:true}))
.use(api, function(req,res,next){
    res.send()
})


//make a path that leads to one single message which is the item path
//make a get request to the server to get all messages
//make a get request to the server to get one message
//make a post request to add a message to the data
//make a delete request to remove a message from the data
//make a put request to update an existing message in the data
//use middleware in some way
//use modules
//make a post request
//make 
app.listen(3000);
