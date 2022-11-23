import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function PlayersTable(props) {
  const { playerList } = props

  const playerSelect = (e) => {
    console.log(e.target.value)
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>  
          <th>Player ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {
          playerList.map((res) => {
            return(
              <tr onClick={(e) => playerSelect(e)} defaultValue={res.playerID}>
                <td value={res.playerID}>{res.playerID}</td>
                <td>{res.firstName}</td>
                <td>{res.lastName}</td>
                <td><Button>Edit</Button></td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default PlayersTable