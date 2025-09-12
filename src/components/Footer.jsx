import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
      <footer>
        <div className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
          <aside>
            <img src={logo} className='w-30 h-30' alt="" />
            <p>
              StayBangla Hotel Industries Ltd.
              <br />
              Providing reliable tech since 2020
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <Link to='/' className="link link-hover">Home</Link>
            <Link to='/contact' className="link link-hover">Contact</Link>
            <Link to='/dashboard/showhotel' className="link link-hover">Hotels</Link>
            <Link to='' className="link link-hover">bookings</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </nav>
        </div>
        <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                StayaBangla Hotel Industries Ltd
              </p>
            </aside>
        </div>
      </footer>
    );
};

export default Footer;