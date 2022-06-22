import express from 'express';
import bodyParser from 'body-parser';
import path, {dirname} from 'path';
import cors from 'cors';
import todosRoute from './routes/todo-routes.js';
import {fileURLToPath} from "url";


// load config-file
const __dirname = dirname(fileURLToPath(import.meta.url));


//call express
export const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json())

// Routes
app.use('/todos', todosRoute)
app.use(express.static(path.resolve('public')));

