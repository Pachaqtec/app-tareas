import React from 'react'

import './style.css'

const Button = ({
  value,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="c_button"
    >
      {value}
    </button>
  )
}

export default Button
