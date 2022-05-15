import styled from 'styled-components'

const ContentDiv = styled.div`
  background-color: #2222;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  box-shadow: 2px 5px 5px #fff;
`

const Content = (props) => {
  return(
    <ContentDiv>{props.children}</ContentDiv>
  )
}

export default Content
