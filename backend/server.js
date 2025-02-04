
require('dotenv').config();

//The variable app typically represents an instance of an Express application. It is usually created using:
const express = require("express");

//express app
const app = express(); //express() initializes an Express application that we can use to define routes, middleware, and handle HTTP requests.


//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();

})


//route
app.get('/', (req,res)=>{
    res.json({mssg:"welcome to my app "})  //localhost 4000 yaz bu çıkıyor  {mssg:"welcome to my app "}
})

// A client (e.g., a browser) sends a GET request to the root URL (/).
// The Express server matches the request to the app.get('/', ...) route handler.
// The callback function (req, res) => { ... } executes.
// res.json() sends a JSON response { mssg: "welcome to my app " } to the client.

//listen for request
app.listen(process.env.PORT, () => {                  // 4000 yerine process.env.PORT yazdım.   process.env is a built-in global object in Node.js that stores environment variables.
  console.log("listening on port ", process.env.PORT);
});

//The listen function takes a port number as its first argument.
//The second argument to listen is a callback function that runs when the server starts successfully.
//A callback function is a function that runs after something else happens.
//Waits for the server to start. Runs after the server successfully starts.
