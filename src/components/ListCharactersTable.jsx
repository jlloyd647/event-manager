import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function ListCharactersTable({charList}) {

  console.log(charList)

  const charSelect = (e) => {
    console.log(e.target.value)
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>  
          <th>Character ID</th>
          <th>Player ID</th>
          <th>Character Name</th>
          <th>XP</th>
          <th>Court XP</th>
        </tr>
      </thead>
      <tbody>
        {
          charList.map((res) => {
            return(
              <tr onClick={(e) => charSelect(e)} defaultValue={res.charID}>
                <td value={res.charID}>{res.charID}</td>
                <td>{res.playerID}</td>
                <td>{res.charName}</td>
                <td>{res.xp}</td>
                <td>{res.cXp}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default ListCharactersTable