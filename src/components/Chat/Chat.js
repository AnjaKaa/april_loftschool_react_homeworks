import React, {Component} from 'react';
import Message from '../Message'
import './Chat.css'

class Chat extends Component {
  state = {
    messageInput: '',
    messages: []
  }

  changeInputMessage = (ev) => {
    let value = ev.target.value;
    this.setState({messageInput: value});
  }

  sendMessageOnEnter = (ev) => {
    if (ev.key === 'Enter') {
      const {messageInput, messages} = this.state;
      messages.push({text: messageInput});
      this.setState({messages: messages, messageInput: ''});
    }
  }

  render() {
    const {messageInput, messages} = this.state;

    return <div className="chat">
      <div className="message-list">
        <div className="messages">
          {messages.map((message, idx) => <Message key={idx} text={message.text}/>)}
        </div>
      </div>
      <input
        className="input-message"
        value={messageInput}
        onChange={this.changeInputMessage}
        onKeyPress={this.sendMessageOnEnter}/>
    </div>;
  }
}

export default Chat;