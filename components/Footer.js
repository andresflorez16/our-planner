import Image from 'next/image'
import styled from 'styled-components'

const FooterDiv = styled.footer`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
font-size: 12px;
padding-top: 2px;
a {
  margin-left: 10px;
}
`

export default function() {
  return(
    <FooterDiv>
      © 2022 Andrés Florez. All Rights Reserved.
      <a href='https://github.com/andresflorez16' target={'_blank'}><Image src={'/github.png'} width={20} height={20} /></a>
      <a href='https://www.linkedin.com/in/andres-florez-2031121bb/' target={'_blank'}><Image src={'/linkedin.png'} width={20} height={20} /></a>
      <a href='https://www.youtube.com/channel/UC2TSviW_SYtgg7dzHKzEI9A
' target={'_blank'}><Image src={'/youtube.png'} width={20} height={20} /></a>
    </FooterDiv>
  )
}
