import React from 'react'
import Container from 'react-bootstrap/Container'
import NewPlayerForm from '../components/NewPlayerForm'

function CreatePlayer(props) {

  const { playerID } = props
  console.log(playerID)
  return (
    <div>
      <Container >
        {playerID > 0 ? <h1>Edit Player</h1> : <h1>Add Player</h1>}
        <NewPlayerForm />
      </Container>
    </div>
  )
}

export default CreatePlayer