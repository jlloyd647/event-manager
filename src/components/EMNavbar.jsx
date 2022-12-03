import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function EMNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Character Manager System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/edit-character">Add Character</Nav.Link>
          <Nav.Link href="/edit-skill">Add Skill</Nav.Link>
          <Nav.Link href="/list-characters">Character List</Nav.Link>
          <Nav.Link href="/list-skills">Skill List</Nav.Link>
          <Nav.Link href="/character-sheet">Character Sheet</Nav.Link>
          <Nav.Link href="/"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default EMNavbar