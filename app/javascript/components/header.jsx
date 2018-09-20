import React from 'react'
import logo from '../assets/images/logo-alpha.png'
import { loadCart } from '../actions/cart'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.cartCount = this.cartCount.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(loadCart())
  }

  cartCount() {
    let quantity = 0;
    if(this.props.cart && Object.keys(this.props.cart).length > 0){
      Object.values(this.props.cart).forEach((item) => {
        quantity += item.quantity
      })
    }
    return quantity;
  }

  render() {
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg">
          <div className="container">
            <Link to={'/'} className="navbar-brand">
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
                    <Link to={'/contact'} className="nav-link">
                      Contact
                    </Link>
                  </li>
                  {this.props.currentUser &&
                    <li className="nav-item">
                      <Link to={'/account'} className="nav-link">
                        My Account
                      </Link>
                    </li>
                  }
                  {this.props.currentUser &&
                    <li className="nav-item">
                      <form id="signOutForm" className="nav-link" method="post" action="/users/sign_out">
                        <input type="hidden" name="_method" value="delete" />
                        <input type="hidden" name="authenticity_token" value={ENV.csrf_token} />
                        <input type="submit" value="Log Out" className="as-link" />
                      </form>
                    </li>
                  }
                  {!this.props.currentUser &&
                    <li className="nav-item">
                      <a href="/users/sign_in" className="nav-link">
                        Sign In
                      </a>
                    </li>
                  }
                  {!this.props.currentUser &&
                    <li className="nav-item">
                      <a href="/users/sign_up" className="nav-link">
                        Sign Up
                      </a>
                    </li>
                  }
                  <li className="nav-item">
                    <Link to={'/cart'} className="nav-link">
                      <FontAwesomeIcon icon="shopping-cart" /> Cart ({this.cartCount()})
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Header)
export { Header };

