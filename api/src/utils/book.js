const {Book} = require('../db')
const { conn, Op } = require("../db.js");

const createBook = (req, res, next)=>{
    
        const {title, author, subject, year} = req.body;
        
        Book.findOrCreate({
                where:{title: {
                    [Op.iLike]: title
                }},
                defaults: {title, author, subject, year}
            }).then((data)=>{
                const [book, createdBook] = data;
                
                createdBook ? res.status(200).send(book) : next({status:409, message: "The book is already registered. Only one unit of each book is allowed"})
            }).catch((e)=>{next({...e, message: `There was an error (${e.message})`})})   
}

const readBook = (req, res, next)=>{
    const {id} = req.query;

    id ? Book.findByPk(id).then((instance)=>{
        if(instance) {res.status(200).send(instance)}
        else {throw new Error(`Book id: ${id} not found`)}
    }).catch((e)=>next({status: 404, message: `There was an error (${e.message})`}))
    :
    Book.findAll().then((data)=>res.status(200).send(data))
    .catch((e)=>next(e))
}

const updateBook = (req, res, next)=>{
    const {id} = req.query;
    const {title, author, subject, year, available} = req.body;

    Book.findByPk(id)
    .then((instance)=> {
        if(instance){
            instance.title = title ?? instance.title;
            instance.author = author ?? instance.author;
            instance.subject = subject ?? instance.subject;
            instance.year = year ?? instance.year;
            instance.available = available ?? instance.available;
        }

        return instance.save()
    })
    .then((updatedInstance)=> res.status(200).send({updatedInstance, message: "Changes saved successfully"}))
    .catch((e)=>next({status: 400, message: `There was an error (${e.message})`}))
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
    .catch((e)=>next({status: 400, message: `There was an error (${e.message})`}))
}

module.exports = {createBook, readBook, updateBook, deleteBook}