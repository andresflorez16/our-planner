import Content from 'components/Content'
import NavFooter from 'components/NavFooter'
import Image from 'next/image'
import styled from 'styled-components'


const Container = styled.div`
`

const ContactDiv = styled.div`
display: flex;
justify-content: center;
div {
  margin: 0 15px;
  text-align: center; 
  &:hover p {
    text-decoration: underline;
  }
}
`

export default function Contact() {
  return(
    <>
      <Content size='reduced'>
        <Container>
          <header><h4>Puedes contactarme a través de:</h4></header>
          <ContactDiv>
            <div>
              <a href='https://github.com/andresflorez16' target='_blank'>
                <Image className='image' src={'/github.png'} width={50} height={50} />
                <p>Github</p>
              </a>
            </div>
            <div>
              <a href='https://www.youtube.com/channel/UC2TSviW_SYtgg7dzHKzEI9A' target='_blank'>
                <Image className='image' src={'/linkedin.png'} width={50} height={50} />
                <p>LinkedIn</p>
              </a>
            </div>
          </ContactDiv>
        </Container>
      </Content>
      <NavFooter />
    </>
  )
}
