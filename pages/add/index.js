import styled from 'styled-components'
import Content from 'components/Content'
import NavFooter from 'components/NavFooter'
import { useState } from 'react'
import { generate } from 'shortid'
import { addSection } from '../../firebase/client'

const AddDiv = styled.div`
display: flex;
align-items: center;
height: 100%;
width: 90%;
form {
  display: flex;
  align-items: center;
  height: 90%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  div {
    width: 100%;
    padding: 5px 0;
    label {
      @media (max-width: 450px) {
        font-size: .8em;
      }
    }
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
      @media (max-width: 700px) {
        font-size: .8em;
        width: 100%;
      }
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
  @media (max-width: 700px) {
    font-size: .8em;
    width: 100%;
    padding: 5px 15px;
  }
}
.sectionNoteContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  height: 150px;
  @media (max-width: 700px) {
    height: 100px;
  }
}

.saveNote {
  border: none;
  background-color: #11a311;
  padding: 10px 25px;
  border-radius: 999px;
  color: #fff;
  width: 200px;
  cursor: pointer;
  font-size: 1em;
  transition: opacity .3s ease;
  font-family: 'Jetbrains Mono', monospace;
  outline: none;
  &:hover {
    opacity: .7;
  }
  @media (max-width: 450px) {
    font-size: .8em;
    width: 100px;
  }
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
  @media (max-width: 450px) {
    font-size: .7em;
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
  @media (max-width: 450px) {
    font-size: .7em;
  }
}

`
const InputNote = styled.input`
  display: block; 
  border: ${props => props.isNote ? '2px solid red' : 'none'};
  border-radius: 10px;
  padding: 10px 25px;
  font-size: 1em;
  width: 80%;
  margin: 10px auto;
  font-family: 'Jetbrains Mono', monospace;
  box-shadow: 0 3px 5px #3337;
  outline: 0;
  @media (max-width: 700px) {
    font-size: .8em;
    width: 100%;
    padding: 5px 15px;
  }
`
const AddNotes = ({ deleteNote, onClick, onChangeNote, notes, isNote }) => {
  return(
    <>
      <div className="sectionNoteContainer">
        {
          notes.map(el => 
            <InputNote className="sectionNote" isNote={isNote} type="text" placeholder="Nota, links, observaciones..." key={el.id} onChange={e => onChangeNote(e, el)} required/>
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
  const [isNote, setIsNote] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    if (formData.sectionName && formData.sectionDescription && note[0].content) {
      const data = {
        ...formData,
        notes: note
      }
      addSection(data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    } else setIsNote(true)
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
    <Content size={'alternative'}>
      <AddDiv>
        <form onSubmit={handleSubmit}>
          <div>
            <label><strong>Dale un nombre a tu sección:</strong></label>
            <input className="sectionName" name='sectionName' type="text" placeholder="Nombre de tu sección" required />
          </div>
          <div>
            <label><strong>Da una descripción a tu sección:</strong></label>
            <textarea placeholder="Descripción" name='sectionDescription' required></textarea>
          </div>
          <div>
            <label><strong>Añade algo a tu sección:</strong></label>
            <AddNotes  notes={note} onChangeNote={onChangeNote} onClick={addNewNote} deleteNote={deleteNote} isNote={isNote}/>
          </div>
          <button className="saveNote" type='submit'>Guardar</button>
        </form>
      </AddDiv>
      <NavFooter />
    </Content>
  )
}
