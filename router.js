// where I store all my routes for handling todo operations

const express = require('express') ;
const todos = require("./todosController") ;
const router = express.Router() ;

router.get('/todo/:id', todos.show) ;
router.get("/todo", todos.index) ;
router.post("/create", todos.create) ;
router.delete("/delete/:id", todos.delete) ;
router.put("/todo/:id", todos.update) ;

module.exports = router ;