import styled from 'styled-components'
import Content from 'components/Content'
import Header from 'components/Header'
import NavFooter from 'components/NavFooter'
import useUser from 'hooks/useUser'
import ButtonAddSection from 'components/ButtonAddSection'
import Section from 'components/Section'
import { useEffect } from 'react'

const MainDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
overflow-y: auto;
flex-wrap: wrap;
justify-contents: center;
flex-direction: column;
align-items: center;
text-align: center;
padding: 10px 0;
position: relative;
`

export default function Feed() {
  const user = useUser()

  return(
    <>
      <Header user={user}/>
      <Content size={'reduced'}>
        <MainDiv>
          <Section user={user} />
          <ButtonAddSection />
        </MainDiv>
      </Content>
      <NavFooter />
    </>
  )
}
