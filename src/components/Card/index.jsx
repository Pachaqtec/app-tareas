import React from 'react'
import Input from 'components/Input/index'
import Button from 'components/Button/index'

import './style.css'

const Card = ({
  onChange,
  valueTitle,
  valueDescription,
  nameTitle,
  nameDescription
}) => {
  return (
    <div className="c_card">
      <div className="c_card_form">
        <Input
          placeholder="Título de tarea"
          onChange={onChange}
          value={valueTitle}
          name={nameTitle}
        />
        <Input
          placeholder="Descripción de tarea"
          onChange={onChange}
          value={valueDescription}
          name={nameDescription}
        />
        <br/><br/>
        <div className="c_card_form_options">
          <Button value="Guardar" />
        </div>
      </div>
    </div>
  )
}

export default Card
