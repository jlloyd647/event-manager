import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function EditCharForm({ selectedChar, charFunctions }) {
  const [form, setForm] = useState({})
  const { addChar } = charFunctions
  const navigate = useNavigate();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })
  }

  const handleSubmit = (event) => {
    selectedChar?.charID ? addChar(form) : addChar(form)
    navigate('/list-characters')
  };

  useEffect(() => {
    
  }, [])
  

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridPlayerID">
          <Form.Label>Player ID</Form.Label>
          <Form.Control defaultValue={selectedChar.playerID} onChange={(e) => setField('playerID', e.target.value)}/>
          <Form.Check defaultValue={selectedChar.seasonPass} type='checkbox' label='Season Pass' />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formGridPlayerID">
          <Form.Label>Character ID</Form.Label>
          <Form.Control defaultValue={selectedChar.charID} onChange={(e) => setField('charID', e.target.value)} disabled={ selectedChar.charID ? true : false}/>
        </Form.Group>  
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridCharName">
          <Form.Label>Character Name</Form.Label>
          <Form.Control defaultValue={selectedChar.charName} onChange={(e) => setField('charName', e.target.value)}/>
        </Form.Group>

          <Form.Group as={Col} className="mb-3">
          <Form.Label>Court</Form.Label>
          <Form.Select onChange={(e) => setField('charCourt', e.target.value)}>
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
          <Form.Control defaultValue={selectedChar.xp} type="integer" onChange={(e) => setField('xp', e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCXP">
          <Form.Label>Court XP</Form.Label>
          <Form.Control defaultValue={selectedChar.cXp} type="integer" onChange={(e) => setField('cXp', e.target.value)}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridXP">
          <Form.Label>Body</Form.Label>
          <Form.Control defaultValue={selectedChar.body} type="integer" onChange={(e) => setField('body', e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCXP">
          <Form.Label>Deaths</Form.Label>
          <Form.Control defaultValue={selectedChar.deaths} type="integer" onChange={(e) => setField('deaths', e.target.value)}/>
        </Form.Group>
      </Row>
      <Button type={'submit'}>Submit</Button>
    </Form>
    </>
  )
}

export default EditCharForm