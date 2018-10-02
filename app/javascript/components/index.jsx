import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Web3.svg'
import { loadProducts } from '../actions/product'
import { connect } from 'react-redux'
import ProductTile from './products/product_tile'

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts())
  }

  render() {
    return (
      <div>
        <section id="main-slider" className="no-margin">
          <div id="carouselControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="bg1.jpg" className="d-block w-100" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <div className="carousel-content">
                    <h2 className="animation animated-item-1"><img src={logo} className="img-fluid main-logo"  /></h2>
                    <p className="animation animated-item-2 font-weight-bold hero-text">Hemp products that are out of this world!</p>
                    <Link to="/shop" className="btn btn-success btn-lg">Shop Now!</Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="bg2.jpg" className="d-block w-100" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <div className="carousel-content">
                    <h2 className="animation animated-item-1"><img src={logo} className="img-fluid main-logo"  /></h2>
                    <p className="animation animated-item-2 font-weight-bold hero-text">Hemp products that are out of this world!</p>
                    <Link to="/shop" className="btn btn-success btn-lg">Shop Now!</Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="bg3.jpg" className="d-block w-100" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <div className="carousel-content">
                    <h2 className="animation animated-item-1"><img src={logo} className="img-fluid main-logo"  /></h2>
                    <p className="animation animated-item-2 font-weight-bold hero-text">Hemp products that are out of this world!</p>
                    <Link to="/shop" className="btn btn-success btn-lg">Shop Now!</Link>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>

        <div className="feature">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>What is CBD?</h2>
                <img src="cbd.jpg" className="img-fluid rounded" />
                <p>
                  Oil extracted from Hemp
                </p>
              </div>

              <div className="col">
                <h2>Benefits and uses of CBD</h2>
                <p>
                  Phytocannabinoids are the herbal, natural and classical cannabinoids found in the cannabis plant. The glandular structure called the trichomes is where the concentrated viscous resin of the plant is found. There are over 60 cannabinoids that have been isolated from the plant. Tetrahydracannabinol (THC), Cannabidiol (CBD) and Cannabinol (CBN) are the most prevalent ones and have also been the most studied.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="container">
            <h2 className='text-center'>Featured Products</h2>
            <div className="row">
              {this.props.products.slice(0, 4).map(product => (
                <ProductTile key={product.id} product={product} />
              ))}
            </div>
            <div className="row">
              <div className="col-4 mx-auto">
                <div className="text-center pt-3">
                  <Link to="/shop" className="btn btn-success btn-lg center">Shop For More!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="latest">
          <div className="container">
            <div className="text-center">
              <h2>Blog Posts</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img src="hemp3.jpg" className="img-fluid blog-img" />
                <h3>How Hemp differs from Marijuana</h3>
                <p>There are alot of misconceptions about the difference between hemp and marijuana. Get all the details here
                </p>
              </div>

              <div className="col-md-4">
                <img src="hemp6.jpg" className="img-fluid blog-img" />
                <h3>Get Healthy With Hemp</h3>
                <p>The common uses that you aren't aware of.
                </p>
              </div>

              <div className="col-md-4">
                <img src="hemp4.jpg" className="img-fluid blog-img" />
                <h3>Isn't This Illegal?</h3>
                <p>Misconceptions about hemp.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id="partner">
          <div className="container">
            <div className="center wow fadeInDown">
              <h2>Social Media</h2>
              <p className='font-weight-bold'>Come like and follow our pages</p>
            </div>

            <div className="partners">
              <div className='row'>
                <a href="#" className='col'><img src="facebook.png" className="rounded" width='200' height='100' /></a>
                <a href="#" className='col'><img src="instagram.png" className="rounded" width='200' height='100' /></a>
                <a href="#" className='col'><img src="twitter.jpeg" className="rounded" width='200' height='100'/></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    products: state.products
  }
}

export default connect(mapStateToProps)(Index)
export { Index };