import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Input from 'components/Input/index'
import Button from 'components/Button/index'

/*
  - GET => Obtener información
  - POST => Enviar información
  - PUT => Actualizamos información
  - DELETE => Eliminamos información
*/

const ACCESS_TOKEN = 3875372609247663
const Hero = () => {
  const [code, setCode] = useState(null)
  const [hero, setHero] = useState({})

  useEffect(() => {
    /*
      Montado
      Actualizado
      Desmontado
    */
    /*getCode()
      .then((result) => console.log('result', result))
      .catch((error) => console.log('error', error))
    */
    
    /*axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/34`)
      .then((response) => console.log('response', response.data))
      .catch((error) => console.log('error', error))
    */
    
    /*const response = await axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/34`)
    console.log('response', response.data)*/
    console.log('Último')
  }, [])

  const searchHero = async () => {
    try {
      setHero({})
      const response = await axios({
        metod: 'GET',
        url: `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${code}`,
        onDownloadProgress: function (progressEvent) {
          console.log('progressEvent', progressEvent)
        },
      })
      setHero(response.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  const getCode = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          ok: 200,
          data: ['manzana', 'pera', 'papaya', 'uva']
        })
      }, 3000);
    })
  }

  const {
    name,
    biography,
    appearance,
    work,
    image
  } = hero

  return (
    <div>
      <h2>Buscar super héroes:</h2>
      <Input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Código de héroe"
      />
      <Button
        value="Buscar"
        onClick={searchHero}
      />
      {
        hero.id &&
          <ul>
            <ol>Héroe: {name}</ol>
            <ol>Nombre: {biography['full-name']}</ol>
            <ol>Alias: {biography?.aliases[0]}</ol>
            <ol>Sexo: {appearance.gender}</ol>
            <ol>Trabajo: {work.occupation}</ol>
            <img src={image.url} alt="photo_hero"/>
          </ul>
      }
    </div>
  )
}

export default Hero
