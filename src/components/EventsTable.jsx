import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function EventsTable(props) {
  const { eventList } = props

  const eventClick = () => {
    console.log('Event Clicked')
  }
  return (
    <ListGroup>
      {
        eventList.map((event) => {
          return (
            <ListGroup.Item action onClick={() => eventClick()}>
              {event.eventName}
            </ListGroup.Item>
          )
        })
      }
    </ListGroup>
  )
}

export default EventsTable