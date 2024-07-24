import React from 'react'
import Typewriter from "typewriter-effect"
import './home.css'

export default function Home() {
  return (
    <>
    <div className='container home '>
        <h1>
              <Typewriter
                options={{
                  strings: [`ENGAGE MOSQUE`, `PRAY TO ALLAH`, `BE HONEST`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <button className='btn btn-outline-dark'>ENGAGE</button>
            
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className='community mb-3'><i class="fa-solid fa-users fa-2xl" style={{color: "#ffffff"}}></i></div>
          <h3 className='text-center mb-3'>Our Community</h3>
          <p className='text-center mb-3'>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo.</p>
        </div>
        <div className="col-md-3">
        <div className='community mb-3'><i class="fa fa-beat fa-heart fa-2xl" style={{color: "#ffffff"}}></i></div>
          <h3 className='text-center mb-3'>Mosque Missions</h3>
          <p className='text-center mb-3'>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo.</p>
        </div>
        <div className="col-md-3">
        <div className='community mb-3'><i class="fa-solid fa-handshake fa-2xl" style={{color: "#ffffff"}}></i></div>
          <h3 className='text-center mb-3'>Sermons</h3>
          <p className='text-center mb-3'>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo.</p>
        </div>
        <div className="col-md-3">
        <div className='community mb-3'><i class="fa-solid fa-money-bill fa-2xl" style={{color: "#ffffff"}}></i></div>
          <h3 className='text-center mb-3'>Donations</h3>
          <p className='text-center mb-3'>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo.</p>
        </div>
      </div>
    </div>
    </>
    
  )
}
