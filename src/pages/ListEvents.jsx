import React from 'react'
import EventsTable from '../components/EventsTable'
import Container from 'react-bootstrap/Container'

function ListEvents(props) {
  const { eventList } = props

  return (
    <Container>
      <EventsTable eventList={eventList} />
    </Container>
  )
}

export default ListEvents