const {Transaction, Book, User} = require('../db')
const { conn, Op } = require("../db.js");

const createTransaction = (req, res, next)=>{
        
        const {userId, bookId, type} = req.body;
        
        //Valido que exista el usuario y que este activo
        User.findByPk(userId)
        .then((user)=>{
            if(user){
                return user.status === 'active' ? 'active' : (()=>{throw new Error(`User id: ${userId} status is ${user.status}`)})()
            } else{throw new Error(`User id: ${userId} not found`)}
        })
        .then(()=>Book.findByPk(bookId)) //Valido que exista el libro en la base de datos
        .then((book)=>{
            if(book){//Si existe el libro
                if(type === 'lend'){
                    //Si es prestamo y el libro tiene estado available: false, informo que no esta disponible para prestamo
                    !book.available && (()=>{throw new Error(`Book id: ${bookId} is not available`)}) 
                } else if(type === 'return'){
                    //Si es retorno de libro pero aparece como disponible en la base de datos, no se puede retornar.
                    //Maximo un ejemplar de cada libro
                    book.available && (()=>{throw new Error(`Book id: ${bookId} was already returned`)})
                }
    
                //Valido si existe una transaccion abierta de ese libro (Es decir, si esta en prestamo)
                return Transaction.findOne({
                    where: {bookId, status: 'open'}
                }) 
            } else {throw new Error(`Book id: ${bookId} not found`)}
        })
        .then((openTransaction)=>{
            if(openTransaction){//Si existe la orden abierta
                
                //Si es prestamo, error: no se puede prestar
                type === 'lend' && (()=>{throw new Error(`Cannot lend book : ${bookId}. There is one open transaction related to it`)})()
                
                //Si es retorno
                if(type === 'return'){
                    if(openTransaction.userId === userId){//Valida que esa transaccion abierta corresponda al usuario
                        //Actualiza el estado de la orden y guarda cambios
                        openTransaction.status = 'closed',
                        openTransaction.save()
                    } else {throw new Error(`Cannot return book : ${bookId}. Request userId does not match with transaction userId`)}
                } 
                    
            } else{//Si la orden abierta no existe
                //Si es prestamo, crea la nueva transaccion con estado 'open'
                type === 'lend' && Transaction.create({userId, bookId, status: 'open'}) 
                //Si es retorno, error: no hay ordenes abiertas de ese libro
                type === 'return' && (()=>{throw new Error(`Cannot return book. There are no open transactions related to user: ${userId} and book: ${bookId}`)})()
            }
        })
        .then(()=>Book.findByPk(bookId)) //Busco e instancio el libro nuevamente por PK
        .then((book)=>{
            //modifico propiedad available y guardo cambios
            //Si la transaccion era prestamo: available=false
            book.available = type === 'lend' ? false : true
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