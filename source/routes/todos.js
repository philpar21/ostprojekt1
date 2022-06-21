import express from 'express'
import Todos from '../models/Todos.js';
import Todo from '../models/Todos.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.json({message: error});
    }
})

router.get('/:postId', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.postId);
        res.json(todo);
    } catch (error) {
        res.json({message: error});
    }
})


router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        importance: req.body.importance,
        duedate: req.body.duedate,
        completed: false
    })

    try {
        const savedTodo = await todo.save()
        res.json(savedTodo);
    } catch (error) {
        res.json({message: error});
        
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatedTodo = await Todo.updateOne({_id: req.params.postId}, {$set: req.body});
        res.json(updatedTodo);
    } catch (error) {
        res.json({message: error});
    }
})

router.delete('/:postId', async(req, res) => {
    try {
        const removedTodo = await Todos.deleteOne({_id: req.params.postId})
        res.json(removedTodo);
    } catch (error) {
        res.json({message: error});
    }

})



export default router;