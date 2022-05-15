import styled from 'styled-components'
import Image from 'next/image'

const LogoDiv = styled.div`
    margin: auto;
    transition: transform 1s ease;
    @media (max-width: 360px) {
      width: 50px;
      height: 50px;
    }
    &:hover {
      transform: rotate(20deg);
    }
`
const Logo = () => {
  return(
    <LogoDiv>
      <Image className='logo' src={'/planner-4.png'} width={70} height={70}/>
    </LogoDiv>
  )
}

  
export default Logo
