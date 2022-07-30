const userService = require('../services/user');

const getUsers = async() => {
    const users= await userService.getUsers();
    return users;
};

const createUser = async(user) => {
    return await userService.createUser(user)
}

const getOneUser = async(searchedUser) => {
    const users= await userService.getOneUser(searchedUser);
    return users;
};

module.exports = {
    getUsers:getUsers,
    createUser:createUser,
    getOneUser:getOneUser
}