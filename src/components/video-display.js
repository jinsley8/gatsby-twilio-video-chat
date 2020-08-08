import React, { useEffect } from 'react';
import useTwilioVideo from '../hooks/use-twilio-video';
import { navigate } from 'gatsby';

const VideoDisplay = ({ roomID }) => {
  const { state, startVideo, leaveRoom, videoRef } = useTwilioVideo();

  useEffect(() => {
    if (!state.token) {
      navigate('/', { state: { roomName: roomID } });
    }

    if (!state.room) {
      startVideo();
    }

    window.addEventListener('beforeUnload', leaveRoom);

    return () => {
      window.removeEventListener('beforeUnload', leaveRoom);
    };
  }, [state, roomID, startVideo, leaveRoom]);

  return (
    <>
      <h1>Room: "{roomID}"</h1>
      {state.room && (
        <button className="leave-room" onClick={leaveRoom}>
          Leave Room
        </button>
      )}
      <div className="chat" ref={videoRef} />
    </>
  );
};

export default VideoDisplay;
