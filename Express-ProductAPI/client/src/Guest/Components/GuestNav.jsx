import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function GuestNav() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "rgb(42, 222, 174)", left: "0%" }}>
            <Container>
                <Link className='navbar-brand' to='/'><h2>Emart</h2></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/login' className='nav-link'><h3>Login</h3></Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}