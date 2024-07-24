import React from 'react';
import {images} from '../constants';

const Footer = () => {
  return (
    <section className='bg-dark-hard'>
        <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5'>
          <div className='col-span-5'>
            <h3 className='text-dark-light font-bold'>Product</h3>
            <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
              <li>
                <a href="/">Landingpage</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Referral Program</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <div className='col-span-5'>
            <h3 className='text-dark-light font-bold'>Services</h3>
            <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Design</a>
              </li>
              <li>
                <a href="/">Themes</a>
              </li>
              <li>
                <a href="/">Illustrations</a>
              </li>
              <li>
                <a href="/">UI Kit</a>
              </li>
            </ul>
          </div>
          <div className='col-span-5'>
            <h3 className='text-dark-light font-bold'>Company</h3>
            <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div className='col-span-5'>
            <h3 className='text-dark-light font-bold'>More</h3>
            <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">License</a>
              </li>
              <li>
                <a href="/">Changelog</a>
              </li>
            </ul>
          </div>

          <div>
            <img src={images.logo} alt='logo'/>
            <p>
              Build a modern and creative website with crealand
            </p>
            <ul className='fle justify-center items-center mt-5 space-x-4 text-gray-300'>
                <li>
                  <a href="/"></a>
                </li>
            </ul>

          </div>
        </footer>
    </section>
  )
}

export default Footer