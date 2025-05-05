import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material'; 

function Message({message, timestamp, user, userImage}) {

    console.log(userImage);
  return (
    <MessageContainer>
      <img src={userImage} alt={Avatar} />

      <MessageInfo>
        <h4>
            {user} <span>{timestamp?.toDate ? new Date(timestamp.toDate()).toUTCString() : "Invalid timestamp"}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img{
        height:50px;
        border-radius: 8px;
    }
`;

const MessageInfo = styled.div`
    padding-left: 10px;

    >h4 >span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size:10px;
    }
`;
