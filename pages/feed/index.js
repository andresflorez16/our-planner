import styled from 'styled-components'
import Content from 'components/Content'
import Header from 'components/Header'
import NavFooter from 'components/NavFooter'
import useUser from 'hooks/useUser'

export default function Feed() {
  const user = useUser()
  return(
    <>
      <Header user={user}/>
      <Content size={'reduced'}>
      </Content>
      <NavFooter />
    </>
  )
}
