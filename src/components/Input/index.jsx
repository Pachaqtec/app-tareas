import React from 'react'

import './style.css'

const Input = ({
  name,
  onChange,
  value,
  placeholder,
  disabled = false
}) => {
  return (
    <input
      className="c_input"
      type="text"
      name={name}
      onChange={onChange}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default Input
