const express = require('express');
const userRoute = express.Router();

const userController = require('../../user/controllers/user');


userRoute.get('/api/v1/users' , async(_req, res) => {
    const data = await userController.getUsers();
    res.send({status:200, message:'yo',data:data});
})

userRoute.post('/api/v1/user',async(req,res)=>{
    const newUser ={
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email
    };
    const result = await userController.createUser(newUser);
    res.send({status: 201, message:'success', data:result})
})


userRoute.get('/api/v1/oneuser' , async(req, res) => {
    const searchedUser = {username: req.body.username};
    const data = await userController.getOneUser(searchedUser);
    res.send({status:200, message:'yo',data:data});
})

module.exports = userRoute;

