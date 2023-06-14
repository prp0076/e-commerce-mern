import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
    <h4 className='text-center'> All Right Reserved &copy; pushpraj</h4> 
    <p className='text-center mt-3'>
      <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
      <Link to="/policy">Privacy Policy</Link>
    </p>
    </div>
  )
}

export default Footer