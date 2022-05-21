import styled from 'styled-components'
import Link from 'next/link'
import { userSignOut } from '../firebase/client'

const NavFooterDiv = styled.div`
position: fixed;
bottom: 0;
height: 15vh;
background-color: rgba(1,1,1,.3);
width: 100%;
nav {
  display: flex;
  justify-content: center;
  height: 80%;
  align-items: center;
  & > div {
    box-shadow: 0 2px 5px #2228;
    transition: box-shadow .3s ease;
    &:hover {
      box-shadow: 0 2px 5px #fff8;
    }
    font-weight: bold;
    cursor: pointer;
    margin: 0 10px;
    background-color: #2225;
    padding: 5px;
    border-radius: 10px;
  }
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #2226;
  text-align: center;
}

`

export default function NavFooter() {
  return(
    <>
      <NavFooterDiv>
        <nav>
          <div>
            <Link href={'/feed'}>Inicio 🏠</Link>
          </div>
          <div>Sobre nosotros ℹ️</div>
          <div>Contacto 🙋🏽</div>
          <div onClick={userSignOut}>Cerrar sesión 🚪</div>
        </nav>
        <footer>Andrés Florez&copy;</footer>
      </NavFooterDiv>
    </>
  )
}
