import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 90%;
padding 10px;
text-align: center;
button {
  margin: auto;
  border: none;
  border-radius: 10px;
  background-color: #222;
  padding: 10px 20px;
  font-family: 'Jetbrains Mono';
  cursor: pointer;
  color: #fff;
  width: 50%;
  transition: background-color .3s ease;
  &:hover {
    background-color: #2226;
  }
}
`

export default function NotFound() {
  return(
    <Container>
      <h5>404 | La página que está buscando no fue encontrada!</h5>
      <Link href={'/feed'}>
        <button>Regresar al inicio</button>
      </Link>
    </Container>
  )
}
