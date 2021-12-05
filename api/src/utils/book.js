const {Book} = require('../db')

const createBook = (req, res, next)=>{
    
        const {id, title, author, subject, year} = req.body;
        
        if(id && title && author && subject && year){
            Book.findOrCreate({
                where:{id},
                defaults: {title, author, subject, year}
            }).then((data)=>{
                const [book, createdBook] = data;
                
                createdBook ? res.status(200).send(book) : next({status:409, message: "The book is already registered. Only one unit of each book is allowed"})
            }).catch((e)=>{next({...e, message: `There was an error (${e.message}), please try again.`})})
        }



    
}

module.exports = {createBook}