import styled from 'styled-components'

const SectionDiv = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
padding: 10px;
justify-content: center;
height: 20%;
`
const SectionInfo = styled.div`
background-color: #333;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export default function Section() {
  return(
    <>
      <SectionDiv>
        <SectionInfo>Section</SectionInfo>
      </SectionDiv>
    </>
  )
}
