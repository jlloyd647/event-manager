import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function EditSkillForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGridSkillID">
        <Form.Label>Skill ID</Form.Label>
        <Form.Control />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridSkillName">
          <Form.Label>Skill Name</Form.Label>
          <Form.Control />
        </Form.Group>

          <Form.Group as={Col} className="mb-3">
          <Form.Label>Skill Type</Form.Label>
          <Form.Select >
            <option>Combat</option>
            <option>Magic</option>
            <option>Espionage</option>
            <option>Survivalist</option>
            <option>Crafting</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridXP">
          <Form.Label>XP Cost</Form.Label>
          <Form.Control type="integer" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCost">
          <Form.Label>Skill Cost</Form.Label>
          <Form.Control type="integer" />
        </Form.Group>
      </Row>
    </Form>
  )
}

export default EditSkillForm