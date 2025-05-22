import { Link } from 'react-router';

function NavBar () {
    return (
        <div className="navbar-button">
            <Link to="/"><button className="navbar-button">Home</button></Link>
            <Link to="/articles" ><button className="navbar-button">Articles</button></Link>
            <Link to="/users" ><button className="navbar-button">Users</button></Link>
            <Link to="/settings" ><button className="navbar-button">Settings</button></Link>
            <Link to="/login" ><button className="navbar-button">Login</button></Link>
        </div>
    )
}

export default NavBar