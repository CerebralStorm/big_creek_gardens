import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Index = props => (
  <div>
    <section id="main-slider" className="no-margin">
      <div id="carouselControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='bg1.jpg' className="d-block w-100" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <div className="carousel-content">
                <h2 className="animation animated-item-1"><img src='logo-alpha.png' className='img-fluid' /></h2>
                <p className="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</p>
                <a className="btn-slide animation animated-item-3" href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src='bg2.jpg' className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <div className="carousel-content">
                <h2 className="animation animated-item-1"><img src='logo-alpha.png' className='img-fluid' /></h2>
                <p className="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</p>
                <a className="btn-slide animation animated-item-3" href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src='bg3.jpg' className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <div className="carousel-content">
                <h2 className="animation animated-item-1"><img src='logo-alpha.png' className='img-fluid' /></h2>
                <p className="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</p>
                <a className="btn-slide animation animated-item-3" href="#">Read More</a>
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
        <div className="text-center row">
          <div className="col-md-3">
            <div className="hi-icon-wrap hi-icon-effect wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
              <i className="book" />
              <h2>Full Responsive</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hi-icon-wrap hi-icon-effect wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
              <i className="laptop" />
              <h2>Retina Ready</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hi-icon-wrap hi-icon-effect wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="900ms">
              <i className="heart-o" />
              <h2>Full Responsive</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hi-icon-wrap hi-icon-effect wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="1200ms">
              <i className="cloud" />
              <h2>Friendly Code</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>about us</h2>
            <img src="6.jpg" className="img-fluid" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
              pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
            </p>
          </div>

          <div className="col">
            <h2>Template built with Twitter Bootstrap</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
              pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
              libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
              libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="lates">
      <div className="container">
        <div className="text-center">
          <h2>Lates News</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src="4.jpg" className="img-fluid" />
            <h3>Template built with Twitter Bootstrap</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
              pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
            </p>
          </div>

          <div className="col-md-4">
            <img src="4.jpg" className="img-fluid" />
            <h3>Template built with Twitter Bootstrap</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
              pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
            </p>
          </div>

          <div className="col-md-4">
            <img src="4.jpg" className="img-fluid" />
            <h3>Template built with Twitter Bootstrap</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
              pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
            </p>
          </div>
        </div>
      </div>
    </div>

    <section id="partner">
      <div className="container">
        <div className="center wow fadeInDown">
          <h2>Our Partners</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br /> et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>

        <div className="partners">
          <ul>
            <li> <a href="#"><img src='partner1.png' className="img-fluid" /></a></li>
            <li> <a href="#"><img src='partner2.png' className="img-fluid" /></a></li>
            <li> <a href="#"><img src='partner3.png' className="img-fluid" /></a></li>
            <li> <a href="#"><img src='partner4.png' className="img-fluid" /></a></li>
            <li> <a href="#"><img src='partner5.png' className="img-fluid" /></a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)

export default Index;