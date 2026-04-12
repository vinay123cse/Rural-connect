import { io } from "socket.io-client";

// URL ko variable mein rakhna accha rehta hai
const SOCKET_URL = "https://rural-connect-6jba.onrender.com";

const socket = io(SOCKET_URL, {
    autoConnect: true,        // Apne aap connect ho jaye
    reconnection: true,       // Agar server down ho toh try karta rahe
    reconnectionAttempts: 5,  // Kitni baar try kare
    transports: ["websocket"] // Tezi ke liye direct websocket use kare
});

export default socket;