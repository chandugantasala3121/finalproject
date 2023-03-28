import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h3>Links</h3>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/guidelines">Guidelines</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h3>Our Address</h3>
                    <address>
		              Andhra University College Of Engineering,<br />
		               Maddilapalem 530003,<br />
		              Visakhapatnam, AndhraPradesh<br />
		              <i className="fa fa-phone fa-lg"></i>: xxxxxx-xxxxxx<br />
		              <i className="fa fa-fax fa-lg"></i>: xxxxxx-xxxxxx<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto: info@andhrauniversity.edu.in">
                      info@andhrauniversity.edu.in</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="Social">
                        <a className="btn btn-social-icon btn-google" href="https://www.andhrauniversity.edu.in/"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://in.linkedin.com/company/andhra-university-andhra-pradesh/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/AndhraUnversity"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/watch?v=ttd-hXkpnAA/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <h6>© Copyright 2023 Community Connect</h6>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
