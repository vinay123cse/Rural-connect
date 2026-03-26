import { useState, useEffect, useRef, use } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import socket from '../socket/socket';


const ChatSection = () => {
  const { userData } = useContext(AuthContext);
  const { receiverId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [receiver, setReceiver] = useState({name: "", dp: ""});
  const [chatList, setChatList] = useState([]);
  
  const scrollRef = useRef();

  useEffect(() => {
     const myId = userData?.user?._id;
     console.log("My Name:", myId);
     if(myId) socket.emit("chat message", myId);

    //Pehle purana listener saaf karo
    socket.off("receive message");

     socket.on("receive message", (data) => {
       console.log("New message received", data);
        setChatList((prev) => [...prev, {
          id: Date.now(),
          content: data.content,
          sender: "other",
          time: data.timestamp,
          status: "read"
        }]);
     })
    return () => socket.off("receive message");
  }, [receiverId, userData]);

  

  

  // Naya message aane par auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    socket.emit("send message", {
      senderName: userData?.user?.name,
      receiverId: receiver._id,
      content: message
    })

    const newMessage = {
      id: Date.now(),
      content: message,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "sent" // 'sent', 'delivered', 'read'
    };

    setChatList([...chatList, newMessage]);
    setMessage("");
  };

  useEffect(() => {
    const fetchReceiverData = async () => {
      try{
      const fetchReceiverData = await axios.get(`http://localhost:3000/chat/${receiverId}`);
      setReceiver({ _id: fetchReceiverData.data._id, name: fetchReceiverData.data.name, dp: fetchReceiverData.data.dp });

    }catch(err){
      console.error("Error fetching receiver data:", err);
    }
   }
   if(receiverId){
    fetchReceiverData();
   }
   
  },[receiverId])



  return (
    <div className="flex flex-col h-screen bg-[#e5ddd5] font-sans overflow-hidden">
      
      {/* --- WhatsApp Header --- */}
      <header className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-black/10 rounded-full transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          
          <div className="w-10 h-10 rounded-full bg-slate-200 border border-white/20 overflow-hidden">
            {/* <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${receiverId}`} alt="avatar" /> */}
            {receiver.dp ? (
              <img src={receiver.dp} alt="profile" className='w-full h-full object-cover'/>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold">
                {receiver.name ? receiver.name.charAt(0).toUpperCase() : "U"}
              </div>
            )}
          </div>

          <div className="ml-1">
            <h2 className="font-bold text-base leading-tight">{receiver.name || "loading..."}</h2>
            
          </div>
        </div>

        <div className="flex gap-4">
          <button className="hover:bg-black/10 p-1 rounded-full">📞</button>
          <button className="hover:bg-black/10 p-1 rounded-full">⋮</button>
        </div>
      </header>

      {/* --- Chat Wallpaper Area --- */}
      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-2 no-scrollbar bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
        
        {chatList.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`relative max-w-[75%] px-3 py-1.5 shadow-md text-[14.5px] ${
              msg.sender === "me" 
              ? "bg-[#dcf8c6] text-slate-800 rounded-lg rounded-tr-none" 
              : "bg-white text-slate-800 rounded-lg rounded-tl-none"
            }`}>
              <p>{msg.content}</p>
              
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="text-[10px] text-slate-500">{msg.time}</span>
                {msg.sender === "me" && (
                  <span className="text-[14px] leading-none text-blue-500">
                    {msg.status === "read" ? "✓✓" : "✓"}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </main>

      {/* --- WhatsApp Input Bar --- */}
      <footer className="p-2 bg-[#f0f0f0] flex items-center gap-2">
        <form 
          onSubmit={handleSendMessage} 
          className="flex-1 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm"
        >
          
          <textarea 
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-transparent outline-none text-[15px] text-gray-800"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
        </form>

        <button 
          onClick={handleSendMessage}
          className={`w-12 h-12 bg-[#128c7e] text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all ${
            message.trim() ? "bg-[#128c7e] text-white opacity-100 scale-100 cursor-pointer active:scale-90" : "bg-slate-300 text-slate-500 opacity-50 scale-95 cursor-not-allowed"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 rotate-45">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
        </button>
      </footer>
    </div>
  );
};

export default ChatSection;