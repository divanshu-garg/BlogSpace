import React from 'react'
import logo from "../assets/blogspace-logo.png"

function Logo({width= "200px"}) {
  return (
    <div>
      <img src={logo} alt="BlogSpace Logo" width={width}/>
    </div>
  )
}

export default Logo