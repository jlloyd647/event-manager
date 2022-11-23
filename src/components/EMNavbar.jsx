import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function EMNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Event Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/players">Player List</Nav.Link>
          <Nav.Link href="/new">Add New Player</Nav.Link>
          <Nav.Link href="/events">Event List</Nav.Link>
          <Nav.Link href="/checkin">Check In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default EMNavbar