import styled from 'styled-components'

const SectionDiv = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
padding: 4px;
justify-content: center;
height: 20%;
align-items: center;
`
const SectionInfo = styled.div`
background-color: #333;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
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
