import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'

import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';
import HeaderMenu from './components/HeaderMenu';

import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import './scss/App.scss'

if(!firebase.apps.length){
  firebase.initializeApp({
    apiKey: "AIzaSyAjQyHMiinTPRwCFcTrE3JjvymbYjroKo0",
    authDomain: "chat-390c4.firebaseapp.com",
    databaseURL: "https://chat-390c4.firebaseio.com",
    projectId: "chat-390c4",
    storageBucket: "chat-390c4.appspot.com",
    messagingSenderId: "544327196104",
    appId: "1:544327196104:web:876ce0be2222325dc734fd",
    measurementId: "G-F1JV0GWKBD"
  })
}

const firestore = firebase.firestore();
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  return (
    <div className="App">
      <Container className="app_container" text={true}>
        <HeaderMenu auth={auth}/>
        {user ? 
        <ChatRoom 
          auth={auth}
          messagesRef={messagesRef}
          query={query} 
        /> : <SignIn auth={auth}/>}
      </Container>
    </div>
  );
}

export default App;
