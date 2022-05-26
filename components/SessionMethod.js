import styled from 'styled-components'
import Content from 'components/Content'
import ButtonBack from 'components/ButtonBack'
import { addUser } from '../firebase/client'
import Spinner from 'components/Spinner'
import { useState } from 'react'

const SessionDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
heigth: 90%;
width: 40%;
form {
  width: 100%;
  heigth: 100%;
}
@media (max-width: 911px) {
  width: 80%;
}

label {
  display: block;  
  font-size: 3em;
  margin: 10px 0;
  @media (max-width: 1600px) {
    font-size: 2em;
  }
  @media (max-width: 911px) {
    font-size: 30px;
  }
  @media (max-width: 433px) {
    font-size: 20px;
  }
}
input {
  display: block;
  width: 100%;
  padding: 10px 25px;
  border: none;
  border-radius: 10px;
  font-size: 1em;
  font-family: 'Jetbrains Mono', monospace;
  outline: none;
}
.btn {
  border: none;
  background-color: #111112;
  padding: 10px 25px;
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  transition: opacity .3s ease;
  width: 100%;
  margin-top: 20px;
  font-family: 'Jetbrains Mono', monospace;
  outline: none;
  &:hover {
    opacity: .7;
  }
}

.inputFile {
  padding: 0 5px;
}

`

export default function SessionMethod({ action }) {
  const [status, setStatus] = useState(true)
  let typeSession = ''

  if(!action) {
    typeSession = ''
    return <div>404</div>
  } 

  if(action === 'login') typeSession = 'Iniciar sesión'
  else typeSession = 'Crear cuenta'

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    addUser({ ...data, image: data.image.name })
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  const handleFileChange = e => {
    e.preventDefault()
    setStatus(e.target ? false : true)
  }
  
  return(
    <Content>
      <ButtonBack backTo='/' />
      <SessionDiv>
        <form onSubmit={handleSubmit}>
          <label>Nombre de usuario</label>
          <input type='text' placeholder='Nombre de usuario' name='userName' />
          <label>Contraseña</label>
          <input type='password' placeholder='Contraseña' name='password' />
          {
            action === 'signin'
              ? <div>
                  <label>Imagen</label>
                  <input className='inputFile' onChange={handleFileChange} type='file' name='image' />
                </div>
              : null
          }
          <button className='btn' disabled={true} >{typeSession}</button>
        </form>
      </SessionDiv>
    </Content>
  )
}
