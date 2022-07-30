const mongoose = require('mongoose');
const userModel = require('../../common/models/user');

const getUsers = async () => {
    const users = await userModel.find();
    return users;
};

const createUser = async (user) => {
    return await userModel.create({
        username: user.username,
        fullname: user.fullname,
        email:user.email,
        birthday: mongoose.now(),
        isActive:true
    });
   
};

const getOneUser = async (searchedUser) => {
    const user = await userModel.find({"username" : {$regex : searchedUser.username}});
  
    return user;
};

module.exports={
    createUser:createUser,
    getUsers:getUsers,
    getOneUser:getOneUser
}