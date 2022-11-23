import React from 'react'
import Container from 'react-bootstrap/Container'
import PlayersTable from '../components/PlayersTable'

function ListPlayers(props) {
  const { playerList } = props
  return(
    <Container>
      <PlayersTable playerList={playerList}/>
    </Container>
  )
}

export default ListPlayers