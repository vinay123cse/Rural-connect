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



app.use(express.static(path.join(__dirname, '../my-project/dist')));

// 3. Sabse niche ye dalo - Bina kisi Regex ke
// Ye har us request ko pakdega jo upar match nahi hui
app.use((req, res, next) => {
    // Agar request backend assets ya socket ki nahi hai, toh index.html bhej do
    if (req.method === 'GET' && !req.path.includes('.')) {
        return res.sendFile(path.resolve(__dirname, '../my-project/dist', 'index.html'));
    }
    next();
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