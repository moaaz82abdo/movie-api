import React from 'react'
import './about_us.css'
import  Typewriter  from 'typewriter-effect'

export default function About_us() {
  return (
    <div>
<div className="hero">
  <h1>
  <Typewriter
                options={{
                  strings: [`WHO WE ARE`, `WHAT DO YOU KNOW ABOUT ISLAM`, `DISCOVER MORE`],
                  autoStart: true,
                  loop: true,
                }}
              />
  </h1>
</div>
    </div>
  )
}
