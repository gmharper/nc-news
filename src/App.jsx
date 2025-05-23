import { useState, useEffect, createContext } from 'react'
import ReactDOM from "react-dom/client";
import './App.css';
import axios from 'axios'

import { Routes, Route } from 'react-router-dom';


// components
import TopPanel from "./components/TopPanel"
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Login from "./components/Login"
import Users from "./components/Users";
import User from "./components/User"
import Articles from "./components/Articles"
import Article from "./components/Article"
import Profile from "./components/Profile"

export const UserContext = createContext(null);  

function App() {
const [users, setUsers] = useState([])
const [loggedInUser, setLoggedInUser] = useState({})
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [search, setSearch] = useState("")
const [theme, setTheme] = useState('dark')

function getUsers () {
  axios
  .get('https://nc-news-seedingproject.onrender.com/api/users')
  .then((res) => {
    setUsers(res.data.users)
    localStorage.setItem('users', JSON.stringify(res.data.users))
  })

}
useEffect(() => {
  getUsers()
}, [setUsers, setIsLoggedIn])

  return (
    <UserContext.Provider value={{ users, setUsers, loggedInUser, setLoggedInUser, isLoggedIn, setIsLoggedIn, search, setSearch, theme, setTheme }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<User />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </UserContext.Provider>
  )
}

export default App
