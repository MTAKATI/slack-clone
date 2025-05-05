import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from './firebase';

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
        .catch((error) => alert(error.message));
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img 
            src='data:image/png;base64,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'
            alt=''
        />

        <h1>Sign in</h1>
        <p>Sandiso.slack.com</p>

        <Button onClick={signIn}>
            Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    >img {
        object-fit: contain;
        height:100px;
        margin-bottom:40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`;