const { User } = require('../db')
const { conn, Op } = require("../db.js");

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

const readUser = (req, res, next)=>{
    const {id} = req.query;

    id ? User.findByPk(id).then((instance)=>{
        if(instance) {res.status(200).send(instance)}
        else {throw new Error(`User id: ${id} not found`)}
    }).catch((e)=>next({status: 404, message: `There was an error (${e.message})`}))
    :
    User.findAll().then((data)=>res.status(200).send(data))
    .catch((e)=>next(e))
}

// updateUserInfo
// deleteUser

module.exports = {
    readUser, 
    createUser, 
    // updateUserInfo, 
    // deleteUser
}