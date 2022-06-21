import express from 'express';
import bodyParser from 'body-parser';
import path, {dirname} from 'path';
import dotenv from "dotenv";
import cors from 'cors';
import mongoose from 'mongoose';
import todosRoute from './routes/todos.js';
import {fileURLToPath} from "url";
dotenv.config({ path: `.env${process.env.NODE_ENV ? `-${process.env.NODE_ENV}` : ''}`});

// load config-file
const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

export const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json())

// Routes
app.use('/todos', todosRoute)
app.use(express.static(path.resolve('public')));

const port = 3001
const hostname = 'localhost'

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log(`DB connected, Server running at http://${hostname}:${port}/`));

// listen
app.listen(port);
