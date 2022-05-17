import styled from 'styled-components'
import Content from 'components/Content'
import Layout from 'components/Layout'
import ButtonBack from 'components/ButtonBack'

const SessionDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
heigth: 90%;
width: 40%;
form {
  width: 100%;
  heigth: 100%;
}
@media (max-width: 911px) {
  width: 80%;
}

label {
  display: block;  
  font-size: 3em;
  margin: 10px 0;
  @media (max-width: 1600px) {
    font-size: 2em;
  }
  @media (max-width: 911px) {
    font-size: 30px;
  }
  @media (max-width: 433px) {
    font-size: 20px;
  }
}
input {
  display: block;
  width: 100%;
  padding: 10px 25px;
  border: none;
  border-radius: 10px;
  font-size: 1em;
  font-family: 'Jetbrains Mono', monospace;
}
button {
  border: none;
  background-color: #111112;
  padding: 10px 25px;
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  transition: opacity .3s ease;
  width: 100%;
  margin-top: 20px;
  font-family: 'Jetbrains Mono', monospace;

  &:hover {
    opacity: .7;
  }
}

`
export default function SessionMethod({ action }) {
  let typeSession = ''
  if(!action) {
    typeSession = ''
    return <div>404</div>
  } 
  if(action === 'login') typeSession = 'Iniciar sesión'
  else typeSession = 'Crear cuenta'
  return(
    <Layout>
      <Content>
        <ButtonBack backTo='/' />
        <SessionDiv>
          <form>
              <label>Nombre de usuario</label>
              <input type='text' placeholder='Nombre de usuario' />
              <label>Contraseña</label>
              <input type='password' placeholder='Contraseña' />
            <button type='submit'>{typeSession}</button>
          </form>
        </SessionDiv>
      </Content>
    </Layout>
  )
}
