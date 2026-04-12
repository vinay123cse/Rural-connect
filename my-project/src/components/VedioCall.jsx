import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoCall = ({ roomID, userID, userName, onClose }) => {

  const myMeeting = async (element) => {
    const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
    const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;
    
    // Token generate karna
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, 
      serverSecret, 
      roomID, 
      userID, 
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false,
      onLeaveRoom: () => {
        onClose(); // Call khatam hone par wapas chat par jane ke liye
      }
    });
  };

  return (
    <div 
      ref={myMeeting} 
      className="fixed inset-0 z-[999] bg-black w-screen h-screen"
    />
  );
};

export default VideoCall;