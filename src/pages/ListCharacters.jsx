import React from 'react'
import { Container } from 'react-bootstrap'
import ListCharactersTable from '../components/ListCharactersTable'

function ListCharacters({charList}) {
  return (
    <Container>
      <ListCharactersTable charList={charList} />
    </Container>
  )
}

export default ListCharacters