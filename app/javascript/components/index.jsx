import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/web2.png'

class Index extends React.Component {
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
                    <h2 className="animation animated-item-1"><img src={logo} className="img-fluid" /></h2>
                    <p className="animation animated-item-2">Hemp products that are out of this world!</p>
                    <Link to="/shop" className="btn-slide animation animated-item-3">Shop Now!</Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="bg2.jpg" className="d-block w-100" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <div className="carousel-content">
                    <h2 className="animation animated-item-1"><img src={logo} className="img-fluid" /></h2>
                    <p className="animation animated-item-2">Hemp products that are out of this world!</p>
                    <Link to="/shop" className="btn-slide animation animated-item-3">Shop Now!</Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="bg3.jpg" className="d-block w-100" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <div className="carousel-content">
                    <h2 className="animation animated-item-1"><img src={logo} className="img-fluid" /></h2>
                    <p className="animation animated-item-2">Hemp products that are out of this world!</p>
                    <Link to="/shop" className="btn-slide animation animated-item-3">Shop Now!</Link>
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
                <img src="cbd.jpg" className="img-fluid round" />
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
            <div className="row">
              <div className="col">
                <h2>Benefits and uses of Hemp</h2>
                <p>
                  Hemp or industrial hemp is a variety of the Cannabis sativa plant species is grown specifically for its industrial uses. Hemp is one of the fastest growing plants and can be used in many commercial items such as, paper, textile, clothing, biofuel, food, biodegradable plastics and more. All of the hemp products we carry are 100% THC free.
                </p>
              </div>
              <div className="col">
                <h2>What is Hemp?</h2>
                <img src="6.jpg" className="img-fluid round" />
                <p>
                  All of the hemp products we carry are 100% THC free.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="latest">
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
                <li> <a href="#"><img src="partner1.png" className="img-fluid" /></a></li>
                <li> <a href="#"><img src="partner2.png" className="img-fluid" /></a></li>
                <li> <a href="#"><img src="partner3.png" className="img-fluid" /></a></li>
                <li> <a href="#"><img src="partner4.png" className="img-fluid" /></a></li>
                <li> <a href="#"><img src="partner5.png" className="img-fluid" /></a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;