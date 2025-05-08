const express = require('express')
const app = express()
const port = 3000
const mongoose= require('mongoose');
const userRouter=require('./routes/user-routes.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Running')
});
app.use(userRouter);


async function connectDb(){
  mongoose.connect('mongodb://localhost:27017',{dbName:'users',});
  
}



connectDb().catch((err)=>console.error(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
