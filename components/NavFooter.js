import styled from 'styled-components'

const NavFooterDiv = styled.div`
position: fixed;
bottom: 0;
height: 15vh;
background-color: rgba(1,1,1,.3);
width: 100%;
`

export default function NavFooter() {
  return(
    <NavFooterDiv>Nav/Footer</NavFooterDiv>
  )
}
