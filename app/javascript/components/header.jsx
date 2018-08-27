import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import logo from '../assets/images/logo-alpha.png'

const Header = props => (
  <header>
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className='container'>
        <a className="navbar-brand" href="#">
          <img src={logo} width="100" />
        </a>
        <button className="navbar-toggler hidden-md-up pull-xs-right" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
          ☰
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="menu ml-auto">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                HOME
              </li>
              <li className="nav-item">
                SHOP
              </li>
              <li className="nav-item">
                GALLERY
              </li>
              <li className="nav-item">
                CONTACT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header;

