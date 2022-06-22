import dotenv from "dotenv";
import mongoose from "mongoose";

// load config-file
dotenv.config({ path: `.env${process.env.NODE_ENV ? `-${process.env.NODE_ENV}` : ''}`});

// load app with current config
const app = (await import('./app.js')).app;

//define ports
const port = 3001
const hostname = 'localhost'

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log(`DB connected`));

// listen
app.listen(port,() => {
    console.log(`Server running at http://${hostname}:${port}/`)});