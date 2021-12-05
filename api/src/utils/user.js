const { User } = require('../db')
const { conn, Op } = require("../db.js");

// const readUser = (req, res)=>{

// }
const createUser = (req, res, next)=>{
    const {id, firstName, lastName, status} = req.body;
    
    User.findOrCreate({
        where: {id},
        defaults: {firstName, lastName}
    }).then((data)=>{
        const [user, createdUser] = data;
        createdUser ? res.status(200).send(user) : next({status:409, message: "The user is already registered"})
    }).catch((e)=>{next({...e, message: `There was an error (${e.message})`})})


}
// updateUserInfo
// deleteUser

module.exports = {
    // readUser, 
    createUser, 
    // updateUserInfo, 
    // deleteUser
}