const User = require('../db/user.js');

async function addUser(userModel){
let user = new User({
    ...userModel,
});
await user.save();
return user.toObject();
}

async function getUsers(){
    const users=await User.find();
    return users.map(x=>x.toObject());
    
}

async function getUser(id){
    const users=await User.findById(id);
    return users.toObject();
    
}
async function updateUser(id,userModel){
    const filter = { _id: id };
    await User.findOneAndUpdate(filter, userModel);

}

async function deleteUser(id){
    await User.findOneAndDelete(id);
}

    module.exports={addUser,getUsers,getUser,updateUser,deleteUser};