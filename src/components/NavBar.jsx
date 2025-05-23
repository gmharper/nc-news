import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router';
import { UserContext } from '../App';

// components
import SearchBar from "./SearchBar"

function NavBar () {
    const { loggedInUser, setLoggedInUser, isLoggedIn, setIsLoggedIn, theme, setTheme } = useContext(UserContext)

    function logout () {
        setLoggedInUser(null)
        setIsLoggedIn(false)
    }

    function changeTheme () {
        var element = document.documentElement
        if (theme === 'dark') {
            setTheme('light')
            element.classList.toggle('light-mode')
            console.log('changed to dark')
            return
        } else {
            setTheme('dark')
            element.classList.toggle('light-mode')
            console.log('changed to light')
            return
        }
    }

    return (
        <div className="navbar-container">
            <Link to="/"><button className="navbar-button">Your Feed</button></Link>
            <Link to="/profile" ><button className="navbar-button">Profile</button></Link>
            <SearchBar />
            { theme==='dark' ? 
            <button onClick={changeTheme} className='navbar-button'>Light</button> : 
            <button onClick={changeTheme} className='navbar-button'>Dark</button> 
            }
            { isLoggedIn ? 
            <button onClick={logout}>Logout</button> : 
            <Link to="/login" ><button className="navbar-button">Sign in</button></Link>}
        </div>
    )
}

export default NavBar