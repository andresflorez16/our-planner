import styled from 'styled-components'
import Title from './Title'

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(1,1,1,.3);
    height: 15vh;
    width: 100%;
    box-shadow: 0 5px 10px #fff9;
`
const Header = () => {
  return(
    <HeaderDiv>
      <Title />
    </HeaderDiv>
  )
}

export default Header
