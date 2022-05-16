import { useState, useEffect } from 'react'
import { login, userOnAuth } from '../firebase/client'
import SessionMethods from './SessionMethods'
import styled from 'styled-components'
import ButtonLogin from './ButtonLogin'

const MainDiv = styled.div`

  text-align: center;
  h1 {
  text-align: left;
  padding: 10px;
  font-size: 5em;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 3em;
    }
  }
  @media (max-width: 450px) {
    width: 100%;
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 11px;
    }
  }
  width: 80%;
  heigth: 80%;
`

export default function Main() {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    userOnAuth(setUser)
  }, [])

  const handleClick = () => {
    login()
      .then(user => {
        setUser(user)
      })
      .catch(err => console.log(err))
  }

  return(
    <MainDiv>
      <h1>Our Planner</h1>
      <h2>Lleva de forma organizada tus planes, actividades, hobbies, ideas y sueños...</h2>
      {
        user === null && <ButtonLogin onClick={handleClick} />
      }
      {
        user && user.userName && <div><img src={user.photoUrl} /><span>{user.userName}</span></div>
      }
      <SessionMethods />
    </MainDiv>
  )
}
