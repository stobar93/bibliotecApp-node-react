const {Book} = require('../db')
const { conn, Op } = require("../db.js");

const createBook = (req, res, next)=>{
    
        const {title, author, subject, year, pages} = req.body;
        
        Book.findOrCreate({
                where:{title: {
                    [Op.iLike]: title
                }},
                defaults: {title, author, subject, year, pages}
            }).then((data)=>{
                const [book, createdBook] = data;
                
                createdBook ? res.status(200).send(book) : next({status:409, message: "The book is already registered. Only one unit of each book is allowed"})
            }).catch((e)=>{next({...e, message: `There was an error (${e.message}), please try again.`})})   
}

const updateBookAvailability = (req, res, next)=>{
    const {id, available} = req.query

    Book.findByPk(id)
    .then((instance)=> {
        if(instance.available !== eval(available)){instance.available = available}
        else {throw new Error(`This book's availability status is already ${available}`)} 

        return instance.save()
    })
    .then((updatedInstance)=> res.status(200).send({updatedInstance, message: "Changes saved successfully"}))
    .catch((e)=>next({status: 400, message: `There was an error (${e.message}), please try again.`}))
}

const deleteBook = (req, res, next)=>{
    const {id} = req.query

    Book.findByPk(id)
    .then((instance)=>{
        if(instance){
            let deletedInstance = {...instance.dataValues}
            instance.destroy()
            return deletedInstance
        } else{
            throw new Error(`Book id: ${id} not found`)
        }
        
    })
    .then((deletedInstance)=> res.status(200).send({deletedInstance, message: "Book removed from library successfully"}))
    .catch((e)=>next({status: 400, message: `There was an error (${e.message}), please try again.`}))
}

module.exports = {createBook, updateBookAvailability, deleteBook}