import styled from 'styled-components'

const LayoutDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Layout = (props) => {
  return(
    <LayoutDiv>{props.children}</LayoutDiv>
  )
}

export default Layout
