import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment'

import '../scss/Message.scss'

function ChatMessage({message, holder}) {
  console.log(holder);

  return (
    <Card className={`${holder === true ? 'message_card__right' : ''} message_card`}>
      <Card.Content className="card_content">
        <Card.Description className="header">
          <img alt="user img" src={message.photoURL}/>
          {message.username}
        </Card.Description>
        <Card.Description className="body">
          {message.body}
        </Card.Description>
      </Card.Content>
      <Card.Content className="card_content" textAlign="right" extra>
          <Icon name='clock' />
          {message.createdAt && moment(message.createdAt.toDate()).fromNow()}
      </Card.Content>
    </Card>
  )
}

export default ChatMessage;