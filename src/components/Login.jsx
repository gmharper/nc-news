import { useContext, useState } from 'react'


const Login = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    return <h2>Login</h2>
}

export default Login