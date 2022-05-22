import styled from 'styled-components'
import Content from 'components/Content'
import NavFooter from 'components/NavFooter'
import { useState } from 'react'

const AddDiv = styled.div`
display: flex;
align-items: center;
height: 90%;
width: 90%;
form {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  div {
    width: 90%;
    textarea {
      display: block;
      width: 80%;
      margin: 10px auto;
      border: none;
      border-radius: 10px;
      resize: none;
      padding: 10px 25px;
      font-family: 'Jetbrains Mono', monospace;
      box-shadow: 0 3px 5px #3337;
      outline: 0;
      font-size: 1em;
    }
  }
}
.sectionName {
  display: block; 
  border: none;
  border-radius: 10px;
  padding: 10px 25px;
  font-size: 1em;
  width: 80%;
  margin: 10px auto;
  font-family: 'Jetbrains Mono', monospace;
  box-shadow: 0 3px 5px #3337;
  outline: 0;
}
.sectionNoteContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  height: 100px;
}
.sectionNote {
  display: block; 
  border: none;
  border-radius: 10px;
  padding: 5px 25px;
  font-size: 1em;
  width: 70%;
  margin: 10px auto;
  font-family: 'Jetbrains Mono', monospace;
  box-shadow: 0 3px 5px #3337;
  outline: 0; 
  
}
.addNote {
  border: none;
  background-color: #111112;
  padding: 5px 25px;
  border-radius: 999px;
  margin: 0 10px;
  color: #fff;
  cursor: pointer;
  transition: opacity .3s ease;
  font-family: 'Jetbrains Mono', monospace;
  outline: none;
  &:hover {
    opacity: .7;
  }
}
.deleteNote {
  border: none;
  background-color: #ff1112;
  padding: 5px 25px;
  border-radius: 999px;
  margin: 0 10px;
  color: #fff;
  cursor: pointer;
  transition: opacity .3s ease;
  font-family: 'Jetbrains Mono', monospace;
  outline: none;
  &:hover {
    opacity: .7;
  }
}
`
const AddNotes = () => {
  const [note, setNote] = useState([0])

  const addNoteClick = (e) => {
    e.preventDefault()
    setNote([...note, note.pop() + 1])
  }
  const deleteNoteClick = (e) => {
    e.preventDefault()
    note.pop()
    setNote([ ...note ])
  }
  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return(
    <>
      <div className='sectionNoteContainer' >
        {
          note.map(el => 
              <input className="sectionNote" type="text" placeholder="Nota, links, observaciones..." key={el} name="sectionNote" onChange={handleChange}/>
          )
        }
      </div>
      <button className='addNote' onClick={addNoteClick}>Añadir más</button>
      {
        note.length > 1
          ? <button className='deleteNote' onClick={deleteNoteClick}>Eliminar</button>
          : null
      }
    </>
  )
}

export default function AddSection() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
  }

  return(
    <Content size={'reduced'}>
      <AddDiv>
        <form onSubmit={handleSubmit}>
          <div>
            <label><strong>Dale un nombre a tu sección:</strong></label>
            <input className="sectionName" name='sectionName' type="text" placeholder="Nombre de tu sección" />
          </div>
          <div>
            <label><strong>Da una descripción a tu sección:</strong></label>
            <textarea placeholder="Descripción" name='sectionDescription'></textarea>
          </div>
          <div>
            <label><strong>Añade algo a tu sección:</strong></label>
            <AddNotes />
          </div>
          <button type='submit'>Guardar</button>
        </form>
      </AddDiv>
      <NavFooter />
    </Content>
  )
}
