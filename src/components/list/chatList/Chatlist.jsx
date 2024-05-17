

import AddUser from './addUser/AddUser';
import './chatList.css'
import React, { useState } from 'react'

const Chatlist = () => {
  const [addMode,setAddMode] = useState(false);
  return (
    <div className='chatList'>
      <div className="classList">
        <div className="search">
          <div className="searchBar">
            <img src="./search.png" alt="" />
            <input type="text" placeholder='search' />
          </div>
          <img src={addMode?"./minus.png":"./plus.png"} alt="" className='add' onClick={() => setAddMode(prev=>!prev)} />
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
      {addMode && <AddUser/>}
    </div>
  )
}

export default Chatlist