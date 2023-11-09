import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import {Route} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout />}>
      <Route path = '' element={<Home />} />
        <Route path = 'About' element={<About />} />
          <Route path = 'Contact' element={<Contact />} />
          <Route path = 'user/:userid' element={<User />}/>
          <Route path = 'github' element={<Github />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router = {router}/>
  </React.StrictMode>,
)
