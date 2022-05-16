import Link from 'next/link'
import styled from 'styled-components'

const SessionsDiv = styled.div`
margin-top: 10px;
width: 80%
Link {
}
strong {
  text-decoration: underline;
  cursor: pointer;
}
@media (max-width: 400px) {
  font-size: 10px;
  strong {
    cursor: pointer;
    text-decoration: underline;
  }
}
@media (max-width: 600px) {
  font-size: 13px;
  strong {
    cursor: pointer;
    text-decoration: underline;
  }
}
`

export default function SessionMethods () {
  return(
    <SessionsDiv>
        <Link href={'/session/login/indx'}><strong>Inicia sesión</strong></Link> normal o <Link href={'/session/signin/indx'}><strong>Crea una cuenta</strong></Link>
    </SessionsDiv>
  )
}
