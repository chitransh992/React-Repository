import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const username  = "Chitransh"
  return(
    <div>
      <h1>Custom App | {username}</h1>
    </div>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <MyApp/>
    // <App />
)
