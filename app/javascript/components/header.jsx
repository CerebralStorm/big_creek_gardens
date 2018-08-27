import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import logo from '../assets/images/logo-alpha.png'
import { Link } from 'react-router-dom'

const Header = props => (
  <header>
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className='container'>
        <Link to={'/'} className='navbar-brand'>
          <img src={logo} width="100" />
        </Link>
        <button className="navbar-toggler hidden-md-up pull-xs-right" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
          ☰
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="menu ml-auto">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to={'/'} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/shop'} className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/gallery'} className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a href='/users/sign_in' className="nav-link">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a href='/users/sign_up' className="nav-link">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header;

