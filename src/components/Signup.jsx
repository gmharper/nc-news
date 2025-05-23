import { useState, useEffect } from 'react'
import axios from 'axios'

function Signup () {
    const [emailInput, setEmailInput] = useState("")
    const [newUsernameInput, setNewUserInput] = useState("")
    const [newPasswordInput, setNewPasswordInput] = useState("")

    function inputEmail (event) {
        console.log(event.target.value)
    }
    
    function inputNewUsername (event) {
        console.log(event.target.value)
    }
    
    function inputNewPassword (event) {
        console.log(event.target.value)
    }

    function submitSignup (event) {
            event.preventDefault()
            if (newUsernameInput)  { // new username field is not blank
                if (!usernames.includes(newUsernameInput)) // if username does not already exist
                    axios.post()
            }
    }

    return (
        <>
            <div className='box'>
                <h1>Haven't created an account yet?</h1>
                <h2>Sign Up</h2>
                <form>
                    <input onChange={inputEmail} placeholder="enter email" /><br />
                    <input onChange={inputNewUsername} placeholder="enter new username"/><br />
                    <input onChange={inputNewPassword} placeholder="enter new password"/><br />
                    <button onClick={submitSignup}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup