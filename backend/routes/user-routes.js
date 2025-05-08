const express = require('express');
const router = express.Router();
const {addUser,getUsers,getUser,updateUser,deleteUser} = require('../handlers/userhandler.js');
var cors = require('cors');

router.use(cors());

router.post('/users', async (req,res)=>{
    console.log("req.body",req.body);
   await addUser(req.body);
    res.json({message: 'User created'});
  });

  router.get('/users', async (req,res)=>{
   let users=await getUsers();
    res.send(users);
  });

  router.get('/users/:id', async (req,res)=>{
  console.log("id",req.params["id"]);
    let user=await getUser(req.params["id"]);
     res.send(user);
   });

   router.put('/users/:id', async (req,res)=>{
    console.log("id",req.params["id"]);
      await updateUser(req.params["id"], req.body);
       res.send();
     });

     router.delete('/users/:id', async (req,res)=>{
        console.log("id",req.params["id"]);
          await deleteUser(req.params["id"]);
           res.send();
         });

  module.exports=router;