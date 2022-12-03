import React from 'react'
import { Container } from 'react-bootstrap'
import SkillsTable from '../components/SkillsTable'

function ListSkills({ skillList}) {
  return (
    <Container>
      <SkillsTable skillList={ skillList } />
    </Container>
  )
}

export default ListSkills