import { Server } from "socket.io";

let io;

const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"]
        }
    })
    io.on("connection",  (socket) => {
        console.log("A user connected:", socket.id);

        socket.on("chat message",async (userId) => {
            console.log(`User with ${userId} joined the chat.`);
            await socket.join(userId); // Room join karva rahe hain userId ke naam se
        })
        socket.on("send message", ({senderName, receiverId, content}) => {
            console.log(`Message from ${senderName} to ${receiverId} : ${content}`);

            io.to(receiverId).emit("receive message", {
                senderName,
                content,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
        });
        socket.on("disconnect", (socket) => {
            console.log("A user disconnected:", socket.id);
        })
    })

    return io;
}

export  { initSocket, io };