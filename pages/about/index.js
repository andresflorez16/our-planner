import styled from 'styled-components'
import Content from 'components/Content'
import NavFooter from 'components/NavFooter'
import Image from 'next/image'

const DivImage = styled.div`
margin-left: 10px;
.image {
  border-radius: 100%;
  object-fit: cover;
}
`

export default function AboutMe() {
  return(
    <>
      <Content size={'reduced'}>
        <header>
          <h2>Andrés Florez</h2>
          <p>Ingeniero en Automatización / Full-Stack Developer</p>
        </header>
        <DivImage>
          <Image className='image' src={'/andres.jpeg'} width={200} height={170} alt="Andrés Florez"/>
        </DivImage>
        <section style={{ width: '90%' }}>
          <p>Actualmente soy freelancer full-stack developer, vivo en Bogotá CO, con pasión por el desarrollo e implementación de servicios digitales.</p>
        </section>
      </Content>
      <NavFooter />
    </>
  )
}
