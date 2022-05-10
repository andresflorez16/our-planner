import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const LogoAdd = () => {
  const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: .8;
  cursor: pointer;
  &:hover {
    transition: transform .7s ease;
    transform: rotate(10deg);
  }
  `
  return(
    <Link href={'/test'}>
      <ContainerLogo>
        <Image className='LogoAdd' src={'/plus.png'} width={70} height={70}/>
      </ContainerLogo>
    </Link>
  )
}

export default LogoAdd
