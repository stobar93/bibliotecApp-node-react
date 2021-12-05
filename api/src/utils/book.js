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

module.exports = {createBook}