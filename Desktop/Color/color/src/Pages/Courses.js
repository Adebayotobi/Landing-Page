import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'


const Footer = () => {

    return ( 
        <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Meet App</h4>
            <h1 className="list-unstyled">
              <li>234-420-6969</li>
              <li>Lagos, Nigeria</li>
              <li>Abijo GRA, Ajah</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Know About Us</h4>
            <ul className="list-unstyled">
              <li>Good</li>
              <li> Good</li>
              <li> Good</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MEET APP | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

 
export default Footer ;
  