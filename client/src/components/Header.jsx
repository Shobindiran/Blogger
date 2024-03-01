import React from 'react'
import { Link } from 'react-router-dom'
import { FaBloggerB } from "react-icons/fa";


const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="header-wrapper">
              <Link to="/">
                <div className="logo">
                  <FaBloggerB className='logo-icon'/>
                  <h2 className='d-none d-sm-block'>Blogger</h2>
                </div>
              </Link>
              <nav>
                  <Link className="mybtn outlined" to="/login">login</Link>
                  <Link className="mybtn solid" to="/signup">Signup</Link>
              </nav>
            </div>
        </div>
    </header>
  )
}

export default Header