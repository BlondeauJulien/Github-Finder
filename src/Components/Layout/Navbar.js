import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = ({ icon, title}) => {

    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
{/*                     <a href="/">Home</a>  Using a tag could work to change pages but here for exmple if we have an active search and pass to home back to search it clear our state*/}
                <Link to="/">Home</Link>
                </li> 
                <li>
{/*                     <a href="/about">About</a> */}
                <Link to="/about">About</Link>
                </li> 
            </ul>
        </nav>
    )

}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
