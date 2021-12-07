const { User, Transaction, Book } = require('../db')
const { conn, Op } = require("../db.js");

const createUser = (req, res, next)=>{
    const {id, firstName, lastName} = req.body;
    if(id && firstName && lastName){
        User.findOrCreate({
            where: {id},
            defaults: {firstName, lastName}
        }).then((data)=>{
            const [user, createdUser] = data;
            createdUser ? res.status(200).send(user) : next({status:409, message: "The user is already registered"})
        }).catch((e)=>{next({...e, message: `There was an error (${e.message})`})})
    }else {
        res.status(404).send("There's not enough information")
    }
    
}

const readUser = (req, res, next)=>{
    const {id} = req.query;

    id ? User.findByPk(id,{include:Transaction})
    .then((instance)=>{
        if(instance) {res.status(200).send(instance)}
        else {throw new Error(`User id: ${id} not found`)}
    })
    .catch((e)=>next({status: 404, message: `There was an error (${e.message})`}))
    :
    User.findAll({include: Transaction})
    .then((data)=>res.status(200).send(data))
    .catch((e)=>next(e))
}

const updateUserInfo = (req, res, next)=>{
    const {id} = req.query;
    const {firstName, lastName, status} = req.body;

    User.findByPk(id)
    .then((instance)=> {
        if(instance){
            instance.firstName = firstName ?? instance.firstName;
            instance.lastName = lastName ?? instance.lastName;
            instance.status = status ?? instance.status;
        }
        else {throw new Error(`User id: ${id} not found`)} 

        return instance.save()
    })
    .then((updatedInstance)=> res.status(200).send({updatedInstance, message: "Changes saved successfully"}))
    .catch((e)=>next({status: 400, message: `There was an error (${e.message})`}))
}

const deleteUser = async (req, res, next)=>{
    const {id} = req.query

    //PUT all related transactions. Change status to 'closed'
    Transaction.findAll({
        where: {userId: id},
    }).then((transactions)=>{
        return transactions.map(transaction=>{
            transaction.status = 'closed'
            transaction.save()
            return transaction.dataValues.bookId
        })}
        )
    .then((bookIds)=>{//PUT all related books. Change available to 'yes'
        return Book.findAll({
            where: {
                id: {
                    [Op.in]: bookIds,
                }
            }
        })
    }).then(books=>{
        return books.map(book=>{
            book.available = 'yes',
            book.save()
        })
    })
    .catch(e=>next(e))

    User.findByPk(id)
    .then((instance)=>{
        if(instance){
            let deletedInstance = {...instance.dataValues}
            instance.destroy()
            return deletedInstance
        } else{
            throw new Error(`User id: ${id} not found`)
        }
        
    })
    .then((deletedInstance)=> res.status(200).send({deletedInstance, message: "User removed from database successfully"}))
    .catch((e)=>next({status: 400, message: `There was an error (${e.message})`}))
}

module.exports = {
    readUser, 
    createUser, 
    updateUserInfo, 
    deleteUser
}