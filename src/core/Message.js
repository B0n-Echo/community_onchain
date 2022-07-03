import React from 'react'
import "./Message.css";
function Message() {
  return (
    <div className='message'>
        <div className="message__info">
            <h4>
                hello world!
                <span className='message__timestamp'></span>
            </h4>

            <p>This is a test message</p>
        </div>

    </div>
  )
}

export default Message