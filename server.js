const express = require("express");
const app = express();
//const PORT = 5555;
 const PORT = process.env.PORT || 5002;

// app.get("/", (req, res) => {
//     res.send("Hello from server")
// });

//if(process.env.NODE_ENV == "production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*",(req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
//}

app.listen(PORT, () => {
    console.log("Server is listening on ", PORT)
});