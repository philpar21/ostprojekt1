import mongoose from "mongoose";

const TodosSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    importance: Number,
    duedate: Date,
    creationdate: {
        type: Date,
        default: Date.now
    },
    completed: Boolean,
})

export default mongoose.model('Todos', TodosSchema)