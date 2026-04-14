import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';

import http from 'http';
import {initSocket} from './socket/socket.js';


// ES Modules mein path aur __dirname aise setup karte hain
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);






const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

initSocket(server);

app.use(cors({
    // origin: ["http://localhost:5173", "https://rural-connect-1-660v.onrender.com"],
    origin: "https://rural-connect-1-660v.onrender.com",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(userRoutes)



/ 1. Static files serve karo
const distPath = path.resolve(__dirname, '../my-project/dist');
app.use(express.static(distPath));

// 2. EXPRESS 5 CATCH-ALL (Sabse simple aur effective)
// Ise bilkul end mein rakho server.listen se pehle
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectDB();

server.listen(PORT, () => {
    console.log(`Server is live on :${PORT}`);
})