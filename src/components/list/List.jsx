import './list.css'
import React from 'react'
import Userinfo from './userInfo/Userinfo'
import Chatlist from './chatList/Chatlist'

const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <Chatlist/>
    </div>
  )
}

export default List