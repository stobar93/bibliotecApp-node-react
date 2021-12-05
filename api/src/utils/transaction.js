const {Transaction, Book, User} = require('../db')
const { conn, Op } = require("../db.js");

const createTransaction = (req, res, next)=>{
        
        const {userId, bookId} = req.body;
        
        //Valido que exista el usuario y que este activo
        User.findByPk(userId)
        .then((user)=>{
            if(user){
                user.status === 'active' || (()=>{throw new Error(`User id: ${userId} status is ${user.status}`)})()
            } else{throw new Error(`User id: ${userId} not found`)}
        })
        .then(()=>Book.findByPk(bookId)) //Valido que exista el libro en la base de datos
        .then((book)=>{
            if(book){//Si existe el libro
                    //Si el libro tiene estado available: false, informo que no esta disponible para prestamo
                    !book.available && (()=>{throw new Error(`Book id: ${bookId} is not available`)}) 
    
                //Valido si existe una transaccion abierta de ese libro (Es decir, si esta en prestamo)
                return Transaction.findOne({
                    where: {bookId, status: 'open'}
                }) 
            } else {throw new Error(`Book id: ${bookId} not found`)}
        })
        .then((openTransaction)=>{
            if(openTransaction){
                //Si existe la orden abierta
                throw new Error(`Cannot lend book : ${bookId}. There is one open transaction related to it`)    
            } else{//Si la orden abierta no existe
                //Crea la nueva transaccion con estado 'open'
                Transaction.create({userId, bookId, status: 'open'}) 
            }
        })
        .then(()=>Book.findByPk(bookId)) //Busco e instancio el libro nuevamente por PK
        .then((book)=>{
            //modifico propiedad available y guardo cambios
            book.available = false;
            book.save()}
            )
        .then(()=>res.status(200).send('Success'))
        .catch((e)=>res.status(404).send(e.message))
           
}

const readTransaction = (req, res, next)=>{
    const whereObj = {...req.query}

    if(whereObj){
        
        Object.keys(whereObj).forEach((key)=> !whereObj[key] && delete whereObj[key])

        Transaction.findAll({
            where: {...whereObj},
        }).then((transaction)=>res.status(200).send(transaction))
    }else{
        Transaction.findAll()
        .then((data)=>res.status(200).send(data))
    }
    
}

const updateTransaction = (req, res, next)=>{
    // const {id} = req.query;
    // const {title, author, subject, year, available} = req.body;

    // Book.findByPk(id)
    // .then((instance)=> {
    //     if(instance){
    //         instance.title = title ?? instance.title;
    //         instance.author = author ?? instance.author;
    //         instance.subject = subject ?? instance.subject;
    //         instance.year = year ?? instance.year;
    //         instance.available = available ?? instance.available;
    //     }

    //     return instance.save()
    // })
    // .then((updatedInstance)=> res.status(200).send({updatedInstance, message: "Changes saved successfully"}))
    // .catch((e)=>next({status: 400, message: `There was an error (${e.message})`}))
}

const deleteTransaction = (req, res, next)=>{
    // const {id} = req.query

    // Book.findByPk(id)
    // .then((instance)=>{
    //     if(instance){
    //         let deletedInstance = {...instance.dataValues}
    //         instance.destroy()
    //         return deletedInstance
    //     } else{
    //         throw new Error(`Book id: ${id} not found`)
    //     }
        
    // })
    // .then((deletedInstance)=> res.status(200).send({deletedInstance, message: "Book removed from library successfully"}))
    // .catch((e)=>next({status: 400, message: `There was an error (${e.message})`}))
}

module.exports = {createTransaction, readTransaction, updateTransaction, deleteTransaction}