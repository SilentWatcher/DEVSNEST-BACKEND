const express = require('express'); // express  passes function defination 
const app = express();              // function call 
app.listen(5000);                 // by giving port number 5000 it start listening 

//CRUD -> POST, GET, PUT, DELETE 
app.get('/',(req,res)=>{               // request ,response
    res.send("hey learning node js");  // response.sen
    
})


// app.get('/',slash);
// app.post('/',slash);
// app.put('/',slash);
// app.delete('/',slash);
