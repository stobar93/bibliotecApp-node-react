const server = require('./src/app.js');
const { conn } = require("./src/db.js");
const books = require('./src/mock/books')
const {Book} = require('./src/db.js')

conn.sync({ force: true }).then(()=>{
    server.listen(3001, ()=>{

        console.log(`%s listening at 3001`)
        console.log(Book)
        Book.bulkCreate(books)
        .then(()=>console.log("Books loaded"))
        .catch((e)=>console.log(`There was an error loading Books: ${e.message}`))
    })
}).catch(e=>console.log(e))


