import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router'
import { UserContext } from "../App"

function Users () {
    const { users, setUsers } = useContext(UserContext)
    return (
        <div className='users-container'>
            <h2>Top Users</h2>
            { users.map((user) => {
                return (
                    <Link to={"/users/"+user.username} >
                        <div className='user-mini-container'>
                            <img src={user.avatar_url} className='user-mini'/>
                            <p>{user.username}</p>
                        </div>
                    </Link>
                )
            }) }
        </div>
    )
}

export default Users