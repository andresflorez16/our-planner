import styled from 'styled-components'
import LogoAdd from './LogoAdd'
import Link from 'next/link'

const AddDiv = styled.div`
  width: 25%;
  height: 25%;
  background-color: #fff6;
  border-radius: 10px;
  box-shadow: 0 2px 5px #2224;
  transition: all .3s ease;
  &:hover {
    box-shadow: 0 2px 5px #fff4;
  }
  margin: auto;
  cursor: pointer;
  span {
    display: block;
    margin: auto;
    font-weight: bold;
  }
  @media (max-width: 650px) {
    span {
      font-size: 11px;
    }
  }
  @media (max-width: 400px) {
    span {
      display: none;
    }
  }
`
const ButtonAddSection = () => {
  return(
    <Link href={'/add'}>
      <AddDiv>
        <LogoAdd />
        <span>Añadir sección</span>
      </AddDiv>
    </Link>
  )
}

export default ButtonAddSection
