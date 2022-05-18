import styled from 'styled-components'

const ContainerTitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2225;
    width: 80%;
    height: 80%;
    padding: 5px;
    border-radius: 10px;
    margin: auto;
    box-shadow: 5px 5px 5px #3339
  `
  const TitleDiv = styled.div`
    margin: auto;
  `
  const TitleH1 = styled.h1`
    color: white;
    letter-spacing: 2px;
    text-align: center;
    font-weight: bold;
    font-size: 3em;
    padding: 0;
    margin: 0;
    transition: font-size .5s linear;
    text-shadow: rgb(0, 0, 0) 0px 3px 2px;
    @media (max-width: 800px) {
      font-size: 1.5em;
      &:hover {
        font-size: 2em;
      }
    }
    @media (max-width: 440px) {
      font-size: 1em;
      &:hover {
        font-size: 2em;
      }
    }
    @media (max-width: 360px) {
      font-size: .8em;
      &:hover {
        font-size: 1.5em;
      }
    }
`
const Title = () => {
  return(
    <ContainerTitleDiv>
      <TitleDiv>
        <TitleH1>Our Planner...</TitleH1>
      </TitleDiv>
    </ContainerTitleDiv>
  )
}

export default Title
