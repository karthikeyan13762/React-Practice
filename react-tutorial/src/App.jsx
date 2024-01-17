
import './App.css'

import React from 'react'
// import Myform from './Comonents/Myform'

import{BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './Comonents/Home'
import About from './Comonents/About'
import Contact from './Comonents/Contact'
import User from './Comonents/User'

function App() {
  return (
    <div className='app'>
  {/* <Myform/> */}
    
    <BrowserRouter>
    <ul>
      <li> <Link to={'/'}>Home</Link> </li>
      <li><Link to={'/about'}>About</Link> </li>
      <li> <Link to={'/contact'}>Contact Us</Link></li>
      <li> <Link to={'/user/1'}>User 1</Link></li>
      <li> <Link to={'/user/2'}>User 2</Link></li>
    </ul>
        <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/user/:id' element={<User/>} />
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App