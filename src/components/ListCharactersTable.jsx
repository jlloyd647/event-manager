import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function ListCharactersTable({charList, charFunctions}) {
  const {selectChar, addChar} = charFunctions
  const navigate = useNavigate();

  const charSelect = (e) => {
    selectChar(e.target.innerHTML)
    navigate('/edit-character')
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
              <tr key={res.charID} onClick={(e) => charSelect(e)} value={res.charID}>
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