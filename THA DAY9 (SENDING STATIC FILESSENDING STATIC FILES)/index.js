//! DAY - 9 -- SENDING STATIC FILES

const express = require('express')
const app = express()
const path = require('path') //to give absolute path

//view engine setup
app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");

// console.log(__dirname);// take current directory path
app.use('/',(req,res)=>{
    // res.sendFile('./public/hello.txt','test.txt')         ->TypeError: path must be absolute or specify root to res.sendFile
    
    // res.sendFile(path.join(__dirname,"public/hello.txt"),'test.txt') // it render the file and Automatically sets the Content-Type response header field.
    
    // res.sendFile(path.join(__dirname,"public/test.json"));  
    
    // res.download(path.join(__dirname,"public/iron_man.jpg"))
    
    // res.sendFile(path.join(__dirname,"public/iron_man.jpg"),"ironMan.jpg")
    
    // rendering html
    // npm i -s jade

    // res.render('index',{title:"Backend"})


    //setting cookie from backend
    res.status(201).cookie("token","test",{
        expire:new Date(Date.now()+ 8 *3600000)
         //Tue Sep 21 2021 18:50:50 GMT+0530 (India Standard Time) {}
    })
    .cookie("hello", "there")
    .redirect(301,"/admin")


})
app.listen(5000)