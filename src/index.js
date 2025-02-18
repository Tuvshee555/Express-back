// import express from 'express'

// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`);
// // });

// app.use(express.json()); // Middleware to parse JSON requests

// app.post("/user", (req, res) => {
//   const newUser = req.body; // Access the sent data
//   res.send(`User created: ${JSON.stringify(newUser)}`);
// });

// app.put("/user/:id", (req, res) => {
//   const userId = req.params.id;
//   const updatedData = req.body;
//   res.send(`User ${userId} updated with data: ${JSON.stringify(updatedData)}`);
// });

// app.delete("/user/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ${userId} deleted`);
// });

// app.listen(port, () => {
//   console.log(`example app listening on port http://localhost:${port}`);
// });
// //put
// //delete
// //post
// //get
// //listen
// //pacage.json type: module



import express from 'express'

import { userRouter } from './routers/user-router.js'
import { productRouter } from './routers/product-router.js'
 
const app  = express()
const port = 3000

app.use(express.json())

app.use('/users', userRouter)
app.use('/products', productRouter)


app.listen(port, () => {
    console.log(`Example app listening on port 
      http://localhost:${port}`);
  });