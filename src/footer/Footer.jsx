import React from 'react'
import './footer.css'


export default function Footer() {
  return (
    <>
    <footer className='m-auto bg-dark-subtle'>
      <div className="container mt-5 ">
      <div className="row ">
        <div className="col-md-4">
          <h4>About us</h4>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>

          <p className='mt-5'>We are the champions! We are the most amazing theme of all time, yeah. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className="col-md-4">
          <h3>Sermon Hours</h3>
          <ul className='list-group'>
            <li className='list-group-item bg-transparent'><i class="fa-solid fa-angle-right  me-3"></i> Monday 10AM – 9PM</li>
            <li className='list-group-item bg-transparent'><i class="fa-solid fa-angle-right  me-3"></i>Tuesday 10AM – 9PM</li>
            <li className='list-group-item bg-transparent'><i class="fa-solid fa-angle-right  me-3"></i>Wednesday 10AM – 9PM</li>
            <li className='list-group-item bg-transparent'><i class="fa-solid fa-angle-right  me-3"></i>Thursday 10AM – 10PM</li>
            <li className='list-group-item bg-transparent'><i class="fa-solid fa-angle-right  me-3"></i>Friday 10AM – 10PM</li>
            <li className='list-group-item bg-transparent'><i class="fa-solid fa-angle-right  me-3"></i>Weekends 10AM – 11PM</li>
          </ul>
        </div>
        <div className="col-md-4 map">
          <h3>Contact Details</h3>
          <ul className='list-group bg-transparent'>
            <li className='list-group-item py-3 bg-transparent'><i class="fa-solid fa-location-dot me-3"></i> Manchester Road 123-78B, Silictown 7854MD, Great Country</li>
            <li className='list-group-item py-3 bg-transparent'><i class="fa-solid fa-phone me-3"></i>+01233567654</li>
            <li className='list-group-item py-3 bg-transparent'><i class="fa-solid fa-envelope me-3"></i>someone@somewhere.com</li>
            <li className='list-group-item py-3 bg-transparent'><i class="fa-solid fa-earth me-3"></i>someone.org</li>
          </ul>

        </div>
      </div>
      </div>
    </footer>
    <div className="bg-dark d-flex justify-content-between">
      <h4 className='text-white w-50 align-content-center'>Copyright 2024. All rights reserved.to MOAAZ</h4>
      <div className='d-inline-block justify-content-around m-3'>
       <a href=""><i   class='fa-brands me-3  fa-3x text-white fa-facebook'></i></a>
       <a href=""><i   class='fa-brands me-3  fa-3x text-white fa-instagram'></i></a>
       <a href=""><i   class='fa-brands me-3  fa-3x text-white fa-tumblr'></i></a>
       <a href=""><i   class='fa-brands me-3  fa-3x text-white fa-twitter'></i></a>
        </div>

    </div>
    </>
  )
}
