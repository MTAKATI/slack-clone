import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { auth, db } from './firebase';
import { serverTimestamp, collection, doc, addDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId || input.trim() === '') {
      return;
    }

    await addDoc(collection(doc(db, "rooms", channelId), "messages"), {
      message: input,
      Timestamp: serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
        behavior: "smooth",
    });

    setInput('');
  };

  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName || ''}`}
        />
        <Button onClick={sendMessage} variant='contained'>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
