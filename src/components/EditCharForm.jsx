import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function EditCharForm() {
  const [validated, setValidated] = useState(false);
  const [playerID, setPlayerID] = useState('')
  const [characterName, setCharacterName] = useState('')
  const [charCourt, setCharCourt] = useState('')
  const [charXP, setCharXP] = useState('')
  const [charCourtXP, setCharCourtXP] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    console.log(event)
  };

  const handleChange = (e) => {
    console.log(e.value)
  }

  const formSubmit = () => {
    console.log('submit')
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGridPlayerID">
        <Form.Label>Player ID</Form.Label>
        <Form.Control />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridCharName">
          <Form.Label>Character Name</Form.Label>
          <Form.Control onChange={(e) => handleChange(e)}/>
        </Form.Group>

          <Form.Group as={Col} className="mb-3">
          <Form.Label>Court</Form.Label>
          <Form.Select >
            <option>Courtless</option>
            <option>Feral</option>
            <option>Radiant</option>
            <option>Catalytic</option>
            <option>Umbral</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridXP">
          <Form.Label>Character XP</Form.Label>
          <Form.Control type="integer" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCXP">
          <Form.Label>Court XP</Form.Label>
          <Form.Control type="integer" />
        </Form.Group>
      </Row>
      <Button type={'submit'}>Submit</Button>
    </Form>
  )
}

export default EditCharForm