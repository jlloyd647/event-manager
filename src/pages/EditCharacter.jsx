import React from 'react'
import Container from 'react-bootstrap/Container'
import EditCharForm from '../components/EditCharForm'

function EditCharacter({ selectedChar, charFunctions }) {
  return (
    <Container>
      <EditCharForm selectedChar = { selectedChar } charFunctions = {charFunctions}/>
    </Container>
  )
}

export default EditCharacter