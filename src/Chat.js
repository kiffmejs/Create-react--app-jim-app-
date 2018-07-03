import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [
        {
            id: 1,
            user: {
              uid: 123,
              displayName: 'Jim',
              email: 'jkiff22@gmail.com',
            },
            body: 'I wishI was watching the World Cup.',
        },
        {
          id: 2,
          user: {
            uid: 456,
            displayName: 'Guy',
            email: 'guy@gmail.com',
          },
          body: 'Same here.',
        },
      ],
    }
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    const user = this.props.user

    messages.push({
      id: `${user.uid}-${Date.now()}`,
      user,
      body,
    })

    this.setState({ messages })
  }

  render() {
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

export default Chat