import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import Login from './components/login/Login'
import Notification from './notification/Notification'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './lib/firebase'
import { useUserStore } from './lib/userStore'
import { useChatStore } from './lib/chatStore'
import Lottie from 'lottie-react'
import loading from '../public/loading.json'


const App = () => {
  const {currentUser,isLoading,fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();

  useEffect(()=>{
    const Unsub = onAuthStateChanged(auth,(user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      Unsub();
    };
  },[fetchUserInfo]);

  if(isLoading) return <div className='loading'><Lottie animationData={loading}/></div>

  return (
    <div className='container'>
      {currentUser ? (
        <>
        <List/>
        {chatId && <Chat/>}
        {chatId && <Detail/>}
        </>
      ) :
      (<Login/>)}
      <Notification/>
    </div>
  )
}

export default App