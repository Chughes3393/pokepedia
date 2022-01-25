import { useState, useContext } from 'react'

import { Routes, Route } from 'react-router-dom'

// components
import Nav from './components//Nav'

import Login from './pages/Login'

// contexts
import UserContext from './contexts/UserContext';

// css
import './App.css'

const App = () => {

// const user = useContext(UserContext)
const [user, setUser] = useState('')
console.log('nav', user)

  return (
    <div>

      <UserContext.Provider value={user}>
      <Nav />

      <Routes>
        <Route path='login' element ={<Login setUser={setUser} />} />
      </Routes>

      </UserContext.Provider>

      
      
    </div>
  );
}

export default App;


// for us to use our context, we import first then we can use useContext hook

// all context comes w the provider component -- allows us to use as a wrapper and share info to all its children 

// we nned to wrap ou