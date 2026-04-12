import { useEffect, useRef, useState } from "react"



export const AudioCall = ({socket, receiverId, senderId, senderName, isCaller, incomingSignal, onClose}) => {
    const [callStatus, setCallStatus] = useState(isCaller ? "Calling" : "Ringing");
    const peerConnection = useRef(null);
    const localStream = useRef(null);
    const remoteAudioRef = useRef(new Audio());
    const isStarted = useRef(false);

    useEffect(() => {
        if (isStarted.current) return;
        isStarted.current = true;
        const startWebRTC = async () => {
            localStream.current = await navigator.mediaDevices.getUserMedia({ audio: true });

            peerConnection.current = new RTCPeerConnection({
                iceServers: [{urls: "stun:stun.l.google.com:19302"}]
            });

            // add local voice in connection
            localStream.current.getTracks().forEach(track => {
                peerConnection.current.addTrack(track, localStream.current);
            });

            // receive this voice
            peerConnection.current.ontrack = (event) => {
                if (event.streams && event.streams[0]) {
                        remoteAudioRef.current.srcObject = event.streams[0];
                        // CHANGE 2: Browser auto-play policy fix
                        remoteAudioRef.current.play().catch(err => console.error("Audio Play Blocked:", err));
                        setCallStatus("On Call");
                    }
            }

            //ICE HANDILNG
            peerConnection.current.onicecandidate = (event) => {
                if (event.candidate) {
                 socket.emit("ice-candidate", { to: receiverId, candidate: event.candidate });
                }
            };
            // 6. Caller/Receiver Specific Logic
           if (isCaller) {
                const offer = await peerConnection.current.createOffer();
                await peerConnection.current.setLocalDescription(offer);
                socket.emit("call-user", { 
                receiverId, 
                signalData: offer, 
                senderId, 
                senderName 
                });
            } else {
                // Receiver side: Answer logic
                await peerConnection.current.setRemoteDescription(new RTCSessionDescription(incomingSignal));
                const answer = await peerConnection.current.createAnswer();
                await peerConnection.current.setLocalDescription(answer);
                socket.emit("answer-call", { to: receiverId, signal: answer });
            }

            // Socket Listeners
            socket.on("call-accepted", async (signal) => {
                await peerConnection.current.setRemoteDescription(new RTCSessionDescription(signal));
                setCallStatus("On Call");
            });

            socket.on("ice-candidate", async (candidate) => {
            // Check karo ki connection open hai ya nahi
            if (peerConnection.current && peerConnection.current.signalingState !== "closed") {
                try {
                    await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
                } catch (e) {
                    console.error("Error adding ice candidate", e);
                }
            }
});

            socket.on("call-ended", () => {
                handleEndCall();
            });
        };

        startWebRTC();
        return () => handleEndCall();
   
    }, []);

    const handleEndCall = () => {
            localStream.current?.getTracks().forEach(track => track.stop());
            peerConnection.current?.close();
            socket.emit("end-call", { to: receiverId });
            onClose();
    };

    return (
    <div className="fixed inset-0 z-[2000] bg-[#075e54] flex flex-col items-center justify-between py-20 text-white animate-fadeIn">
      <div className="text-center">
        <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center text-6xl mb-6 border-4 border-white/20 shadow-2xl overflow-hidden mx-auto">
          <span>👤</span>
        </div>
        <h2 className="text-3xl font-bold">{senderName || "User"}</h2>
        <p className="mt-3 text-green-200 animate-pulse tracking-widest uppercase text-xs font-bold">
          {callStatus}
        </p>
      </div>

      <div className="flex gap-12 mb-10">
        <button className="bg-white/10 p-5 rounded-full hover:bg-white/20 transition-all">🎤</button>
        
        <button 
          onClick={handleEndCall}
          className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
        >
          <span className="rotate-[135deg] text-3xl">📞</span>
        </button>

        <button className="bg-white/10 p-5 rounded-full hover:bg-white/20 transition-all">🔊</button>
      </div>
    </div>
   );
};

export default AudioCall;
