import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function SkillsTable({ skillList }) {

  const skillSelect = (e) => {
    console.log(e.target.value)
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>  
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Cost</th>
          <th>Ranks</th>
          <th>Xp Cost</th>
        </tr>
      </thead>
      <tbody>
        {
          skillList.map((res) => {
            return(
              <tr onClick={(e) => skillSelect(e)} defaultValue={res.skillID}>
                <td value={res.skillID}>{res.skillID}</td>
                <td>{res.skillName}</td>
                <td>{res.skillDesc}</td>
                <td>{res.skillCost}</td>
                <td>{res.skillRank}</td>
                <td>{res.xpCost}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default SkillsTable