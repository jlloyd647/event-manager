import React from 'react'
import { Container } from 'react-bootstrap'
import ListCharactersTable from '../components/ListCharactersTable'

function ListCharacters({charList, charFunctions}) {
  return (
    <Container>
      <ListCharactersTable charList={charList} charFunctions={charFunctions}/>
    </Container>
  )
}

export default ListCharacters