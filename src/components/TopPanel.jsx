import { useContext, useState } from "react"
import { UserContext} from "../App"

function TopPanel () {
    const { loggedInUser, isLoggedIn } = useContext(UserContext)

    return (
        <>
        <h1>NC News</h1>
        { isLoggedIn ? <p>Welcome {loggedInUser.username}!</p> : <p></p> }
        </>
    )
}

export default TopPanel