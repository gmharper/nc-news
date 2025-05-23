import { useContext, useState, useEffect } from 'react'
import { UserContext } from "../App"
import axios from 'axios'

import { getUserFromName } from "../utility"

// components
import SignUp from './Signup'

const Login = () => {
    const { loggedInUser, setLoggedInUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    const errorMessage = document.getElementById('login_error_message')

    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    
    const [usernames, setUsernames] = useState([])
    let users = JSON.parse(localStorage.getItem('users'))

    function getUsernames () {
        const usernamesArray = []
        users.map((user) => {
            usernamesArray.push(user.username)
        })
        setUsernames(usernamesArray)
    }

    function inputUsername (event) {
        console.log(event.target.value)
        setUsernameInput(event.target.value)
    }
    
    function inputPassword (event) {
        console.log(event.target.value)
        setPasswordInput(event.target.value)
    }

    function checkValidUsername (un) {
        return
    }

    function checkValidPassword (pw) {
        return
    }
    
    function submitSignin (event) {
        event.preventDefault()
        errorMessage.value = ''
        errorMessage.style.visibility = 'hidden'

        if (usernameInput) {                                                    // username field is not blank
            if (usernames.includes(usernameInput)) {                            // username exists
                console.log('successful login!')
                setLoggedInUser(getUserFromName(users, usernameInput))
                setIsLoggedIn(true)
                // console.log(loggedInUser)
                // console.log(isLoggedIn)
            } else {
                errorMessage.textContent = 'That username does not exist!'      // username does not exist
                errorMessage.style.visibility = 'visible'
            }
        
        } else {                                                                // username is invalid
            errorMessage.textContent = 'invalid username!'
            errorMessage.style.visibility = 'visible'
        }
    }

    useEffect(() => {
        getUsernames()
    }, [])

    return (
        <>
            <div className='box'>
                <h2>Sign in</h2>
                <form>
                    <input onChange={inputUsername} placeholder="enter username"/><br/>
                    <input onChange={inputPassword} placeholder="enter password"/><br/>
                    <button onClick={submitSignin}>Submit</button>
                </form>
                <p id='login_error_message' style={{visibility: 'hidden'}} value=''>a</p>
            </div>
            <div>
                <SignUp />
            </div>
        </>
    )
}

export default Login