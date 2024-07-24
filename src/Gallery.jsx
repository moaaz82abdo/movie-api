import React from 'react'
import './gallery.css'
import mo1 from './gallery/mo1.jpg'
import mo2 from './gallery/mo2.jpg'
import mo3 from './gallery/mo3.jpg'
import mo4 from './gallery/mo4.jpg'
import mo5 from './gallery/mo5.jpg'
import mo6 from './gallery/mo6.jpg'

export default function Gallery() {
  return (
    <>
       <div className="image">
        <h1>Images of our Mosque</h1>
       </div>
        <div className='container row mt-5'>
          <div className="col-md-8">
            <img className='w-50' src={mo1} alt="" />
            <img className='w-50' src={mo2} alt="" />
            <img className='w-50' src={mo3} alt="" />
            <img className='w-50' src={mo4} alt="" />
            <img className='w-50' src={mo5} alt="" />
            <img className='w-50' src={mo6} alt="" />
          </div>
          <div className="col-md-4">
            <h4>Upcoming events</h4>
            <p>There is no upcoming events</p>
            <hr />
            <h4>Recent posts</h4>
            <p>
              <ul className='list-group'>
                <a><li className='list-group-item'  ><i class="fa-solid fa-angle-right me-3"></i>Accent of love</li></a>
                <a><li className='list-group-item'> <i class="fa-solid fa-angle-right me-3"></i>Whorship ALLAH only</li></a>
                <a><li className='list-group-item'> <i class="fa-solid fa-angle-right me-3"></i>Why we should trust our GOD</li></a>
                <a><li className='list-group-item'> <i class="fa-solid fa-angle-right me-3"></i>Be honest</li></a>
                <a><li className='list-group-item'> <i class="fa-solid fa-angle-right me-3"></i>What is islam</li></a>
                <a><li className='list-group-item'> <i class="fa-solid fa-angle-right me-3"></i>Who is MOHAMED peace be upon him</li></a>
                <a><li className='list-group-item'> <i class="fa-solid fa-angle-right me-3"></i>Imagine paradise</li></a>
              </ul>
            </p>

          </div>
        </div>

    </>
  )
}
