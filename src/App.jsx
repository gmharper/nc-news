import { useState, createContext } from 'react'
import ReactDOM from "react-dom/client";
import './App.css';

import { Routes, Route } from 'react-router-dom';



// components
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Users from "./components/Users";
import Articles from "./components/Articles"
import Article from "./components/Article"
import Login from "./components/Login"

function App() {
const UserContext = createContext(null);  
const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <NavBar />
        <h1>messenger pigeon</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </UserContext.Provider>
  )
}

export default App
