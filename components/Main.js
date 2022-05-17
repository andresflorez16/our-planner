import { useEffect } from 'react'
import { login } from '../firebase/client'
import useUser, { USER_STATES } from 'hooks/useUser'
import { useRouter } from 'next/router'
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
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/feed')
  }, [user])

  const handleClick = () => {
    login()
      .catch(err => console.log(err))
  }

  return(
    <MainDiv>
      <h1>Our Planner</h1>
      <h2>Lleva de forma organizada tus planes, actividades, hobbies, ideas y sueños...</h2>
      {
        user === USER_STATES.NOT_LOGGED && <ButtonLogin onClick={handleClick} />
      }
      {
        user === USER_STATES.NOT_KNOWN && <div>Loading...</div>
      }
      <SessionMethods />
    </MainDiv>
  )
}
