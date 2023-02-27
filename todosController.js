// this will be where I store all of my functions for handling todo operations

const createError = require('http-errors') ;

let todos = [ ] ;
let idNo = 0 ;

exports.index = function(req, res) {
	res.send(todos) ;
}

exports.create = function(req, res, next) {
	if (!req.body.name) {
		return(next(createError(400, "Name is required"))) ;
	}
	
	todos.push({
		id: idNo,
		name: req.body
	}) ;
	idNo++ ;
	res.send({
		result: true
	})
}

exports.show = function(req, res, next) {
	const todoItem = todos.find((todo) => todo.id == req.params.id)
	console.log("todoItem: ", todoItem) ;
	if (!todoItem) {
		return next(createError(404, "no todo with that id")) ;
	}
	res.send(todoItem) ;
}

exports.delete = function(req, res, next) {
	const todoItem = todos.find((todo) => todo.id == req.params.id)
	console.log("todoItem: ", todoItem) ;
	if (!todoItem) {
		return next(createError(404, "no todo with that id")) ;
	}

	todos = todos.filter(todo => todo.id != req.params.id) ;

	res.send({
		result: true
	})
}

exports.update = function(req, res, next) {
	if (!req.body.name) {
		return(next(createError(400, "Name is required"))) ;
	}

	const todoItem = todos.find((todo) => todo.id == req.params.id)
	console.log("todoItem: ", todoItem) ;
	if (!todoItem) {
		return next(createError(404, "No todo with that id")) ;
	}

	todoItem.name = req.body.name ;

	res.send({
		result: true
	})
}