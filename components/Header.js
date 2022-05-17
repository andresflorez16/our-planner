import styled from 'styled-components'
import Title from './Title'
import Avatar from './Avatar'

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: center;
  background-color: rgba(1,1,1,.3);
  height: 15vh;
  width: 100%;
  box-shadow: 0 5px 10px #fff9;
`
const Header = ({ user }) => {
  return(
    <HeaderDiv>
      <Title />
      <Avatar user={user} />
    </HeaderDiv>
  )
}

export default Header
