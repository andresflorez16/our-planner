import styled from 'styled-components'
import Content from 'components/Content'
import Header from 'components/Header'
import NavFooter from 'components/NavFooter'
import useUser from 'hooks/useUser'
import Section from 'components/Section'

const MainDiv = styled.div`
width: 100%;
height: 100%;
overflow-y: auto;
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
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
        </MainDiv>
        
      </Content>
      <NavFooter />
    </>
  )
}
