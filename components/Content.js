import styled from 'styled-components'

const ContentDiv = styled.div`
  background-color: #2222;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: ${props => {
    if(props.size === 'normal') return '90%'
    if(props.size === 'reduced') return '60%'
    if(props.size === 'alternative') return '70%'
  }};
  border-radius: 10px;
  margin-bottom: ${props => props.size === 'alternative' ? '100px' : 0};
  box-shadow: 2px 5px 5px #fff;
`

const Content = (props) => {
  const size = props.size
  return(
    <ContentDiv size={size}>{props.children}</ContentDiv>
  )
}

export default Content
