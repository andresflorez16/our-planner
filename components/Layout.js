import styled from 'styled-components'

const LayoutDiv = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  height: 100vh;
`
const Layout = (props) => {
  return(
    <LayoutDiv>{props.children}</LayoutDiv>
  )
}

export default Layout
