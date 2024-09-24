// const { nextTick } = require('process')
const db = require('../db/db')

exports.todosave = async (req, res, next) => {
    try{
        console.log(new Date())
        const { status, date, other, userId } =req.body
        const todos = await db.todo.create({
            data: {
                status,
                date: new Date(date),
                other,
                userId: Number(userId)
            }
        })

        res.json({mas: " SaveTodo This OK : " , todos})
    }catch(err){
        next(err)
    }
}

exports.todoShow = async (req, res, next) => {
    try{
        const todos = await db.todo.findMany()
        res.json(todos)
    }catch(err){
        next(err)
    }
}