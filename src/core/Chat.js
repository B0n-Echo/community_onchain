import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader';
import Message from './Message';

function Chat() {
  return (
    <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
            </div>
            <div className="chat__input">
                <form>
                    <input type="text" placeholder={"Message #TestChannel"} />
                    <button type="submit" className="chat__inputButton"> send message</button>
                </form>
            </div>
    </div>
  )
}

export default Chat