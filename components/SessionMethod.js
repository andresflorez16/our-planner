import styled from 'styled-components'
import Content from 'components/Content'
import ButtonBack from 'components/ButtonBack'
import { addUser, loginEmailPassword } from '../firebase/client'
import Spinner from 'components/Spinner'
import { useState, useRef, useEffect } from 'react'
import useUser, { USER_STATES } from 'hooks/useUser'
import { useRouter } from 'next/router'

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
  const [errorAuth, setErrorAuth] = useState('')
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/feed')
  }, [user])

  const form = useRef(null)

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
    action === 'login'
      ? loginEmailPassword(data)
      .then(res => {
        console.log(res)
        form.current.reset()
        setErrorAuth('')
      })
      .catch(e => setErrorAuth(e.code))
      : addUser(data)
      .then(res => {
        console.log('signIning')
        form.current.reset()
        setErrorAuth('')
      })
      .catch(e => setErrorAuth(e.code))
  }

  return(
    <Content>
      <ButtonBack backTo='/' />
      <SessionDiv>
        <form ref={form} onSubmit={handleSubmit}>
          <label>Correo electrónico</label>
          <input type='email' placeholder='Correo electrónico' name='email' required />
          <label>Contraseña</label>
          <input type='password' placeholder='Contraseña' name='password' required />
          {
            errorAuth ? <span style={{color: 'red'}}>{ errorAuth }</span> : null 
          }
          <button className='btn' >{typeSession}</button>
        </form>
      </SessionDiv>
    </Content>
  )
}
