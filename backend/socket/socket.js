import { Server } from "socket.io";

let io;

const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: process.env.FRONTEND_URL || "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials:true
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
        });

        socket.on("call-user", ({receiverId, signalData, senderId, senderName }) => {
            console.log(` call from ${senderName} to ${receiverId}`);
            io.to(receiverId).emit("incoming-call", {
                signalData,
                senderId,
                senderName
            });
        });

        // call received by user and send response
        socket.on('answer-call', (data) => {
            io.to(data.to).emit('call-accepted', data.signal)
        });

        socket.on("ice-candidate", (data) => {
            io.to(data.to).emit("ice-candidate", data.candidate);
        });

        // 4. Call Cut ki
        socket.on("end-call", ({ to }) => {
            io.to(to).emit("call-ended");
        });

        
    });

    return io;
}

export  { initSocket, io };