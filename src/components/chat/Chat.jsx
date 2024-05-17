import './chat.css'
import React, { useEffect, useRef, useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const [open,setOpen] = useState(false);
  const [text,setText] = useState('');

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev +e.emoji);
    setOpen(true);
    }
  

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" draggable="false"/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" draggable="false"/>
          <img src="./video.png" alt="" draggable="false"/>
          <img src="./info.png" alt="" draggable="false"/>
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt=""  />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis incidunt magnam, odit dolorum corporis at libero. Molestias, nesciunt illo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis incidunt magnam, odit dolorum corporis at libero. Molestias, nesciunt illo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis incidunt magnam, odit dolorum corporis at libero. Molestias, nesciunt illo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis incidunt magnam, odit dolorum corporis at libero. Molestias, nesciunt illo!</p>
            <span>1 min ago</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRab9dPbebpndVF_kEzPfoAM8c6sG19tf0ipg&usqp=CAU" alt="" />
            </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis incidunt magnam, odit dolorum corporis at libero. Molestias, nesciunt illo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis incidunt magnam, odit dolorum corporis at libero. Molestias, nesciunt illo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>


      <div className="bottom">
          <div className="icons">
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
            <input type="text" placeholder='Type a message...' value={text} onChange={(e) => setText(e.target.value)} />
            <div className="emoji">
              <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />

              <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji} />
              </div>
            </div>
            <button className="sendButton">Send</button>
          </div>
      </div>
    </div>
  )
}

export default Chat