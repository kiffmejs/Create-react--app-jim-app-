import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [
        { id: 1, userName: 'Jim', body: 'I wish I was watching the World Cup.' },
        { id: 2, userName: 'Kiffmeyer', body: 'Same here.' },
      ],
    }
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    const userName = 'Random Guy'

    messages.push({
      id: `${userName}-${Date.now()}`,
      userName,
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