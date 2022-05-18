import styled from 'styled-components'

const ContentDiv = styled.div`
  background-color: #2222;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: ${props => props.size === 'normal' ? '90%' : '60%'};
  border-radius: 10px;
  box-shadow: 2px 5px 5px #fff;
`

const Content = (props) => {
  const size = props.size
  return(
    <ContentDiv size={size}>{props.children}</ContentDiv>
  )
}

export default Content
