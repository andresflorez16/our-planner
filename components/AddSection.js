import styled from 'styled-components'
import LogoAdd from './LogoAdd'

const AddDiv = styled.div`
  width: 25%;
  height: 25%;
  background-color: #fff6;
  border-radius: 10px;
  box-shadow: 0 2px 5px #2224;
  &:hover {
    transition: all .3s ease;
    width: 30%;
    height: 30%;
  }
  margin: 10px;
`
const AddSection = () => {
  return(
    <AddDiv>
      <LogoAdd />
    </AddDiv>
  )
}

export default AddSection
