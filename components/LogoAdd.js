import styled from 'styled-components'
import Image from 'next/image'

const ContainerLogo = styled.div`
  width: 100%;
  height: 70%;
  opacity: .8;
  margin: auto;
  cursor: pointer;
  &:hover {
    transition: transform .7s ease;
    transform: rotate(10deg);
  }
  padding-top: 10px;
  @media (max-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 100%;
  }
`
const LogoAdd = () => {
  return(
    <ContainerLogo>
      <Image className='LogoAdd' src={'/plus.png'} width={60} height={60}/>
    </ContainerLogo>
  )
}

export default LogoAdd
