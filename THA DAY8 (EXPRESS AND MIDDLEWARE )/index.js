//! THA DAY8 (EXPRESS AND MIDDLEWARE )
const express = require ('express')
const app=express();
// const bodyParser = require('bodyParser')
//---------------------------------------------------------------------------------------------------------------------------------------------
//! what is middleware 
/* 
Middleware literally means anything you put in the middle of one layer of the software and another.
 Express middleware are functions that execute during the lifecycle of a request to the Express server

Notice the call above to next(). Calling this function invokes the next middleware function in the app.
 The next() function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function.
  The next() function could be named anything, but by convention it is always named “next”. To avoid confusion, always use this convention
*/
//----------------------------------------------------------------------------------------------------------------------------------------------
app.get('/',(req,res,next)=>{     //function 1
    if(req.query.admin === 'true'){
        next()
    }else{
        res.status(400).send("should be admin");

    }
}, (req,res)=>{             // function 2
    res.status(200)
    res.json(req.query)
}
)


//-----------------------------> another way <--------------------------------------------------------------------------------------------------

// we can write function in different variables

const checkAdmin = (req,res,next)=>{     //function 1
    if(req.query.admin === 'true'){
        next()
    }else{
        res.status(400).send("should be admin");

    }
}
app.use(checkAdmin);      // it apply to all urls
const sendRes = (req,res)=>{             // function 2
    res.status(200)
    res.json(req.query)
}

app.get('/',checkAdmin,sendRes)

/* output:
        http://localhost:5000/?admin=false

        should be admin
*/
//------------------------------------------------------------------------------------

/*
if we look at code (line no 43) sending 200 at first time 
but when we make refresh paege and chechk network section then status is now 304 why?
-> This is due to perfomance next time it come from cashe
    if remove cashe thenit 200 status 
*/
//---------------------------------------------------------------------------------------
/*
now we know that 'get' call is cashed but what if used passward in url 
    but its not sequre now 
      so we use put method which is not cashed


*/

// app.use(bodyParser.urlencoded({extended:true}))

app.use(express.urlencoded());
app.use(express.json({extended:true}))
app.post('/',(req,res)=>{
    console.log('req.body=>',req.body) // it can not directly converted in object={because encrypted}
    // (if we still try we get empty object and on console "req.body=> undefined" )
    res.json({text:req.body})
})


// body-parser
// npm i --save body-parser
//--------------------------------------------------------------------------

const checkAdmin = (req,res,next)=>{     //function 1
    if(req.query.auth === 'hakfhlakfh'){
        console.log('1')
        next()
    }
    console.log("2")
    // res.send("hello there")
};

const sendRes = (req,res)=>{             // function 2
    // res.status(200)
    console.log('inside')
    res.json(req.query)
};
app.get('/',checkAdmin,sendRes)

/* 
this tells that excution of the program end when it get response
not at next call
    output:
         1
         inside
         2
*/
//-------------------------------------------------------------------------------------
app.listen(5000)