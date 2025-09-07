import React from 'react';
import logo from '../assets/logo.png'
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
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
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