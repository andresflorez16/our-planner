import styled from 'styled-components'
import Content from 'components/Content'
import Header from 'components/Header'
import NavFooter from 'components/NavFooter'
import useUser from 'hooks/useUser'
import ButtonAddSection from 'components/ButtonAddSection'

const MainDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
overflow-y: auto;
flex-wrap: wrap;
justify-contents: center;
align-items: center;
text-align: center;
position: relative;
`

export default function Feed() {
  const user = useUser()

  return(
    <>
      <Header user={user}/>
      <Content size={'reduced'}>
        <MainDiv>
          <ButtonAddSection />
        </MainDiv>
        
      </Content>
      <NavFooter />
    </>
  )
}
