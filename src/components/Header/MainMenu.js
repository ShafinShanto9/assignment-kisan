import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const MainMenu = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" >
            <Container className="mx-auto">
            <Navbar.Brand href="#home">OYODO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto px-4">
                <Nav.Link >HOME</Nav.Link>
                <Nav.Link >DAPIBUS</Nav.Link>    
                <Nav.Link >ULTRICES</Nav.Link>    
                <Nav.Link >BIBENDUM</Nav.Link>    
                <Nav.Link >MAGNA</Nav.Link>    
            </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar> 
    <div className='bg-white py-1'></div>      
    </div>
  )
}

export default MainMenu