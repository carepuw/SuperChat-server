import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/app';

import ChatMessage from './ChatMessage'

import { Button, Form, TextArea } from 'semantic-ui-react';
import '../scss/ChatRoom.scss'

function ChatRoom({auth, query, messagesRef}) {
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = React.useState('');
  const { uid, photoURL, displayName } = auth.currentUser;
  
  const createMessage = async(e) => {
    e.preventDefault();
    
    await messagesRef.add({
      body: formValue,
      username: displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    })

    setFormValue('');
  }

  const changeFormValue = (e) => {
    setFormValue(e.target.value)
  }

  return (
    <div className="chat_room">
      <div className="messages_block">
        {messages && messages.map( msg => 
          <ChatMessage 
            holder={msg.uid === uid ? true : false}
            key={msg.id} 
            message={msg} 
          />)
        }
      </div>
      <Form>
        <TextArea 
          value={formValue}
          onChange={changeFormValue} 
          className="messanges_textArea" 
          placeholder='Tell something..' 
        />
        <Button floated="right" color="black" onClick={createMessage}>Submit</Button>
      </Form>
    </div>
  )
}

export default ChatRoom
