import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode} navbar-${props.mode} navbar-expand-lg`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"

          >
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === "light"? "dark":"light"}`}>
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode==="light"?"Enable":"Disable"} Dark Mode`}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About"
}
