import styled from 'styled-components'
import Link from 'next/link'
import { userSignOut } from '../firebase/client'
import HomeIcon from './icons/homeIcon'
import InfoIcon from './icons/infoIcon'
import UserIcon from './icons/userIcon'
import SignOutIcon from './icons/signOutIcon'

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
      box-shadow: 0 10px 15px #2228;
    }
    font-weight: bold;
    cursor: pointer;
    margin: 0 10px;
    background-color: #fff6;
    padding: 5px;
    border-radius: 10px;
    @media (max-width: 1100px) {
      width: 100%
    }
    @media (max-width: 666px) {
      .home span {
        display: none;
      }
    }
  }
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #2226;
  text-align: center;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  span {
    margin-right: 10px;
  }
}

`

export default function NavFooter() {
  return(
    <>
      <NavFooterDiv>
        <nav>
          <div>
            <Link href={'/feed'}>
              <div className='home'><span>Inicio</span> <HomeIcon fill="#000" width={24} height={24} /></div>
            </Link>
          </div>
          <div>
            <div className="home"><span>Sobre mí</span> <InfoIcon fill="#000" width={20} height={24}/></div>
          </div>
          <div>
            <div className="home"><span>Contáctame</span> <UserIcon fill="#000" width={24} height={24} /></div>
          </div>
          <div onClick={userSignOut}>
            <div className="home"><span>Adiós</span> <SignOutIcon fill="#000" width={24} height={24} /></div>
          </div>
        </nav>
        <footer>Andrés Florez&copy;</footer>
      </NavFooterDiv>
    </>
  )
}
