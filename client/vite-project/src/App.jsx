import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { lazy } from 'react'
import ProtectRoute from './components/auth/ProtectRoute'
const Home = lazy(()=> import("./pages/Home"))
const Login = lazy(()=> import("./pages/Login"))
const Groups = lazy(()=> import("./pages/Groups"))
const Chat = lazy(()=> import("./pages/Chat"))

function App() {
  let user = true
  return (
   <BrowserRouter>
   <Routes>
   <Route  element={<ProtectRoute user={user}/>}>

    <Route path='/' element={<Home />} />
    <Route path='/chat' element={<Chat />}/>
    <Route path='/groups' element={<Groups />}/>

    </Route>
    <Route path='/login' element={<ProtectRoute user={!user} redirect='/'>
    <Login />
    </ProtectRoute>
    }/>

   </Routes>
   </BrowserRouter>
  )
}

export default App
