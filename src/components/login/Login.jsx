import React, { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../lib/firebase'
import { collection, doc, setDoc, where } from 'firebase/firestore';
import upload from '../../lib/upload'
import Lottie from 'lottie-react';
import chat from '../../../public/chat.json'

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    if (!username || !email || !password)
      return toast.warn("Please enter inputs!");
    if (!avatar.file) return toast.warn("Please upload an avatar!");

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now!")
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully LogedIn!")
    } catch (err) {
      console.log(err);
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login">
      {/* <img src="./chat-front.svg" alt="" className='front' draggable={false}/> */}
      <div style={{width:"50%"}} className='front'><Lottie animationData={chat}/></div>
      {active?null:<div className="item loginform">
        <h2>Welcome Back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
        <div><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account? <button onClick={()=>setActive(true)}>Register</button></div>
      </div>}

      {!active?null:<div className="item register">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">Upload a Avatar
            <img src={avatar.url || "./avatar.png"} alt="" />
          </label>
          <input type="file" id='file' style={{ display: "none" }} onChange={handleAvatar} />
          <input type="text" placeholder='Username' name='username' />
          <input type="text" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
        </form>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have an account? <button onClick={()=>setActive(false)}>Sign In</button></div>
      </div>}
    </div>
  )
}

export default Login;