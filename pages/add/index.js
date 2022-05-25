import styled from 'styled-components'
import Content from 'components/Content'
import NavFooter from 'components/NavFooter'
import { useState } from 'react'
import { generate } from 'shortid'

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
const AddNotes = ({ deleteNote, onClick, onChangeNote, notes }) => {
  return(
    <>
      <div className='sectionNoteContainer' >
        {
          notes.map(el => 
            <input className="sectionNote" type="text" placeholder="Nota, links, observaciones..." key={el.id} onChange={e => onChangeNote(e, el)}/>
          )
        }
      </div>
      <button className='addNote' onClick={onClick}>Añadir más</button>
      {
        notes.length > 1
          ? <button className='deleteNote' onClick={deleteNote} >Eliminar</button>
          : null
      }
    </>
  )
}

export default function AddSection() {
  const [note, setNote] = useState([{ id: generate() }])
  const [isNote, setIsNote] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    const data = {
      ...formData,
      notes: note
    }
    console.log(data)
  }

  const onChangeNote = (e, noteIterable) => {
    e.preventDefault()
    const content = e.target.value
    setNote(currentNote =>
      currentNote.map(el => 
        el.id === noteIterable.id
          ? {
            ...el,
            content
          }
          : el
      ) 
    )
    setIsNote(content.length > 0 ? false : true)
  }

  const addNewNote = () => {
    setNote(currentNote => {
      return [
        ...currentNote,
        {
          id: generate(),
        }
      ]
    })
  }

  const deleteNote = () => {
    const noteToDelete = note.pop()
    setNote(currentNote => currentNote.filter(el => el.id != noteToDelete.id))
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
            <AddNotes  notes={note} onChangeNote={onChangeNote} onClick={addNewNote} deleteNote={deleteNote} />
          </div>
          <button type='submit' disabled={isNote}>Guardar</button>
        </form>
      </AddDiv>
      <NavFooter />
    </Content>
  )
}
