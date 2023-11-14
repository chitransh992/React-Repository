import { useState } from 'react'
import UsercontextProvider from './context/UserContextProvider'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UsercontextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
   </UsercontextProvider>
  )
}

export default App
