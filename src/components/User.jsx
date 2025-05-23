import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'

function User () {
    const params = useParams();
    const username = params.username;

    const [user, setUser] = useState({})

    useEffect(() => {
        axios
        .get('https://nc-news-seedingproject.onrender.com/api/users/'+username)
        .then((res) => {
            setUser(res.data.user)
        })
    }, [setUser])

    return (
        <>
            <h2>{user.username}</h2>
            <h2>{user.name}</h2>
            <img src={user.avatar_url} />
        </>
    )
}

export default User