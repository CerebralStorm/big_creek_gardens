import React from 'react'
import Disclaimer from './disclaimer'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row section">
            <div className="footer-widget col-md-3 col-xs-12 wow fadeIn">
              <h3 className="small-title">
                ABOUT US
              </h3>
              <p>
                Etiam ornare condimentum massa et scelerisque. Mauris nibh ipsum, laoreet at venenatis ac, rutrum sed risus,
              </p>
              <p>Aliquam magna nibh, mattis a urna nec. Semper venenatis magna.</p>
              <div className="social-footer">
                <a href="#"><i className="fa fa-facebook icon-round"></i></a>
                <a href="#"><i className="fa fa-twitter icon-round"></i></a>
                <a href="#"><i className="fa fa-linkedin icon-round"></i></a>
                <a href="#"><i className="fa fa-google-plus icon-round"></i></a>
              </div>
            </div>

            <div className="footer-widget col-md-3 col-xs-12 wow fadeIn" data-wow-delay=".2s">
              <h3 className="small-title">
                TWITTER
              </h3>
              <ul className="recent-tweets">
                <li className="tweet">
                  My <a href="#">@Quora</a>
                  <span className="tweet-text">
                    answer to What's the best FAQ plugin for WordPress?
                  </span>
                  <a href="#">qr.ae/RFTbIGa</a>
                  <span className="tweet-date">
                    August 21, 2015 10:29pm
                  </span>
                </li>
                <li className="tweet">
                  WPB Advanced FAQ | Probably The Best WordPress FAQ Plugin <a href="#">wpbean.com/wpb-advanced-faq-pr…</a>
                  <span className="tweet-text">
                    via
                  </span>
                  <a href="#">@wpbean</a>
                  <span className="tweet-date">
                    August 19, 2015 8:49 am
                  </span>
                </li>
              </ul>
            </div>

            <div className="footer-widget col-md-3 col-xs-12 wow fadeIn" data-wow-delay=".5s">
              <h3 className="small-title">
                GALLERY
              </h3>
              <div className="plain-flicker-gallery">
                <a href="#" title="Pan Masala"><img src="flicker/img1.jpg" alt="" /></a>
                <a href="#" title="Sports Template for Joomla"><img src="flicker/img2.jpg" alt="" /></a>
                <a href="" title="Apple Keyboard"><img src="flicker/img3.jpg" alt="" /></a>
                <a href="" title="Hard Working"><img src="flicker/img4.jpg" alt="" /></a>
                <a href="" title="Smile"><img src="flicker/img5.jpg" alt="" /></a>
                <a href="" title="Puzzle"><img src="flicker/img6.jpg" alt="" /></a>
              </div>
            </div>

            <div className="footer-widget col-md-3 col-xs-12 wow fadeIn" data-wow-delay=".8s">
              <h3 className="small-title">
                SUBSCRIBE US
              </h3>
              <div className="contact-us">
                <p>Tellus aliquam at. Pellentesque gravida vel eros et pretium</p>
                <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="exampleInputName2" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter your email" />
                </div>
                <button type="submit" className="btn btn-common">Submit</button>
              </form>
              </div>
            </div>
          </div>
        </div>

        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <p className="copyright-text">
                  ©  2018 Area 51 Hemp. All right reserved.
                </p>
              </div>
              <div className="col-md-6  col-sm-6">
                <ul className="nav nav-inline pull-xs-right">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Disclaimer className="nav-link" />
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Privacy Policy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Terms of services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export { Footer };
export default Footer;