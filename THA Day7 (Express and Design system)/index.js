//! THA Day7 (Express and Design system)

const express = require ('express');   // passes function defination
const app = express();                 // function call

// CRUD  -> POST GET PUT DELETE 

app.get('/',(req, res)=>{
    res.send("hello there")       // consider as return statement
})
// app.listen(5000)

// another way________________________
const slash = (req,res)=>{
    res.send("hey another way"); 
}
app.get('/',slash);
app.post('/',slash);
app.put('/',slash);
app.delete('/',slash);
// but the browser only has get 
app.listen(5000);

 
// *HTTP response status codes
/*
100 Continue
200 OK
204 No Content
400 Bad Request
401 Unauthorized
404 Not Found
500 Internal Server Error
507 Insufficient Storage
511 Network Authentication Required

*/
app.get('/',(req,res)=>{
    res.status(500).send("database not connectiong"); // pipelining = function after function
})

///////////////////////////////// conditions ///////////////////////////////

app.get("/a(b)?cd", (req, res) => {
    res.send("a(b is optional)cd");
  });
  
  app.get("/ab(c)+de", (req, res) => {
    res.send("ab(no limit on c)de");
  });
  
  app.get("/xy*ab", (req, res) => {
    res.send("xy(anything in between)ab");
  });
  
  app.get("/xy*ab", (req, res) => {
    res.send("xy(anything in between)ab");
  });
  
  app.get(/k/, (req, res) => {
    res.send("use of regex starting with k");
  });
  
  app.get("/user/:userid/student/:studentid", (req, res) => {
    res.send(req.params); // http://localhost:5000/user/6/student/1
  });
  
  app.listen(5000);

