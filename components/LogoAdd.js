import styled from 'styled-components'
import Image from 'next/image'

const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  opacity: .8;
  cursor: pointer;
  &:hover {
    transition: transform .7s ease;
    transform: rotate(10deg);
  }
`
const LogoAdd = () => {
  return(
    <ContainerLogo>
      <Image className='LogoAdd' src={'/plus.png'} width={70} height={70}/>
    </ContainerLogo>
  )
}

export default LogoAdd
