import React from 'react';
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newletter-img' />
                <h2 className='mb-0 text-white'>Sign Up for Newletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-1'
                  placeholder='Your Email Address'
                  aria-label='Your Email Address'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-2' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact</h4>
              <div className='footer-link d-flex flex-column'>
                <address className='text-white fs-6'>
                  One BKC Building,
                  <br /> Bandra Kurla Complex,
                  <br /> Mumbai. Pincode : 421102
                </address>
                <a
                  className='text-white mb-2 d-block mb-3'
                  href='tel:+91 8888822800'
                >
                  Phone : 8888822800
                </a>
                <a
                  className='text-white mb-2 d-block mb-3'
                  href='mailto:cs-reply@amazon.in'
                >
                  Email Address: cs-reply@amazon.in
                </a>
                <div className='social_icons'>
                  <Link
                    to='https://www.instagram.com/samcasmmm/'
                    target='_blank'
                  >
                    <BsInstagram className='text-white m-2 fs-24' />
                  </Link>
                  <Link
                    to='https://www.
                    facebook.com/samcasmmm/'
                    target='_blank'
                  >
                    <BsFacebook className='text-white m-2 fs-24' />
                  </Link>
                  <Link to='https://www.github.com/samcasmmm/' target='_blank'>
                    <BsGithub className='text-white m-2 fs-24' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping</Link>
                <Link className='text-white py-2 mb-1'>Term & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>QuickLinks</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphone</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                {' '}
                &copy; {new Date().getFullYear()} Powered By Own Mind
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
