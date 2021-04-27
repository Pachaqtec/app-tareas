import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Header = ({
  children
}) => {
  return (
    <>
      <div className="l_header">
        <img src="https://casadecor.es/assets/uploads/2018/12/iconElPais-logo-casadecor2020.png" alt="logo"/>
        <div className="l_header_nav">
          <Link
            className="l_header_nav_option"
            to="/tasks"
          >
            Tasks
          </Link>
          <Link
            className="l_header_nav_option"
            to="/others"
          >
            Others
          </Link>
        </div>
        <div>
          <p>Jhon Neira</p>
          <p>Mentor</p>
        </div>
      </div>
      <div>
        {children}
      </div>
    </>
  )
}

export default Header
