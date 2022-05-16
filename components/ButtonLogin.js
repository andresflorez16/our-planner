import styled from 'styled-components'
import Image from 'next/image'

const ButtonLoginDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 40%;
margin: auto;
background-color: #111112;
padding: 10px 25px;
border-radius: 999px;
color: #fff;
cursor: pointer;
transition: opacity .3s ease;

@media (max-width: 1200px) {
  width: 80%;
  .loginText {
    font-size: 15px;
    margin-left: 10px;
  }
}

@media (max-width: 900px) {
  width: 90%;
  .loginText {
    font-size: 12px;
    margin-left: 10px;
  }
}

@media (max-width: 380px) {
  .loginText {
    font-size: 9px;
    margin-left: 10px;
  }
}
&:hover {
  opacity: .7;
}

span {
  font-size: 17px;
}
`

export default function ButtonLogin(props) {
  return(
    <ButtonLoginDiv {...props}>
      <Image src={'/gmail-logo.png'} height={30} width={40}/>
      <span className="loginText">Iniciar sesión con Gmail</span>
    </ButtonLoginDiv>
  )
}
