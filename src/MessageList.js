import React from 'react'

import Message from './Message'

const MessageList = () => {
  const messages = [
    { id: 1, userName: 'jim', body: 'Chatting up a storm, yo!' },
    { id: 2, userName: 'kiffmeyer', body: 'This guy is so annoying. I hate my job.' },
  ]

  return (
    <div className="MessageList">
      {
        messages.map(msg => (
          <Message message={msg} key={msg.id} />
        ))
      }
    </div>
  )
}

export default MessageList